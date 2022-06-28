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
  if(value === this.value){//si el valor es igual al this,value
    return true;
  }
  if(value > this.value){//si el value es mayor a this.value
    if(!this.right){//si no tiene derecha
      return false;
    }
    return this.right.contains(value)//si tiene derecha se aplica resursividad

  }else{//si es menro el value a this.value
    if(!this.left){//si no tiene izquiera
      return false
    }
    return this.left.contains(value)//si tiene izquierda se aplica la recursividad

  }
};
BinarySearchTree.prototype.depthFirstForEach = function(cb, order){
  if(order === 'in-order' || !order){//si order es in-order
    if(this.left){//si tiene this.left
      this.left.depthFirstForEach(cb, order);//entra y le aplica resursividad
    }
    cb(this.value);//aplica el callback
    if(this.right){//si tiene algo a la derecha
      this.right.depthFirstForEach(cb,order);//entra y le aplica recursividad
    }
  }
  else if(order === 'pre-order'){//si order es pro0order
    cb(this.value);// aplica el callback

    if(this.left){//si tiene izquierda
      this.left.depthFirstForEach(cb, order);//entra y aplica recursividad
    }
    if(this.right){//si tiene derecha
      this.right.depthFirstForEach(cb,order);//entra a la derecha y aplca recursividad
    }
  }else{//sino
    if(this.left){//si tiene izquierda
      this.left.depthFirstForEach(cb, order);//entra y aplica recursividad
    }
    if(this.right){//si tiene derecha
      this.right.depthFirstForEach(cb,order);//entra y aplica recursividad
    }
    cb(this.value);//aplica el callback
  }
}

BinarySearchTree.prototype.breadthFirstForEach = function(cb, arr= []){
  cb(this.value)
  if(this.left){//si tiene una izquierda
    arr.push(this.left)//pushea this.left
  }
  if(this.right){//si tiene derecha
    arr.push(this.right)//pushe this.right
  }
  let nextNode = arr.shift();// pusheao el primer elemento [20,23,34,65,...]
  if(nextNode){//si tienen algo nextNode
    nextNode.breadthFirstForEach(cb, arr)//si tiene llama a la recursion 
  }
};

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
