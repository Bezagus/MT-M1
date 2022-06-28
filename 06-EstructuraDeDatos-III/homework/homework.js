"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

function BinarySearchTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

BinarySearchTree.prototype.size = function() {
  if(!this.left && !this.right){//sino tiene ni izquierda ni derecha
    return 1;
  }
  if(!this.right){//si no tiene derecha
     return 1 + this.left.size();
  }
  if(!this.left){// si no tiene izquierda
    return 1 + this.right.size();
  }

  return 1 + this.left.size() + this.right.size();
}
BinarySearchTree.prototype.insert = function(value){
  if(value > this.value){// si values es mayor al this.value
    if(!this.right){//si this.right es null
      this.right = new BinarySearchTree(value);
    }else{//sino tiene null
      this.right.insert(value);
    }
  }else{//si es menor
    if(!this.left){//si this.left es null
      this.left = new BinarySearchTree(value);
    }else{//si no es null
      this.left.insert(value);
    }
  }
};
BinarySearchTree.prototype.contains = function(value){
  if(value === this.value){
    return true;
  }
  if(value > this.value){
    if(!this.right){
      return false;
    }
    return this.right.contains(value)

  }else{
    if(!this.left){
      return false
    }
    return this.left.contains(value)

  }
};
BinarySearchTree.prototype.depthFirstForEach = function(cb, order){
  if(order === 'in-order' || !order){
    if(this.left){
      this.left.depthFirstForEach(cb, order);
    }
    cb(this.value);
    if(this.right){
      this.right.depthFirstForEach(cb,order);
    }
  }
  else if(order === 'pre-order'){
    cb(this.value);

    if(this.left){
      this.left.depthFirstForEach(cb, order);
    }
    if(this.right){
      this.right.depthFirstForEach(cb,order);
    }
  }else{
    if(this.left){
      this.left.depthFirstForEach(cb, order);
    }
    if(this.right){
      this.right.depthFirstForEach(cb,order);
    }
    cb(this.value);
  }
}

BinarySearchTree.prototype.breadthFirstForEach = function(cb, arr){
  if(!arr){
     var arr = [];
  }
  cb(this.value)
  if(this.left){
    arr.push(this.left)
  }
  if(this.right){
    arr.push(this.right)
  }
  if(arr.length){
  arr.shift().breadthFirstForEach(cb, arr);
  }
};

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
