'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
/*   var arr =[1];
  var count = num;
  while(count>1){
    if(count%2===0){
      arr.push(2);
      count = count/2;
    }
    else if(count%3===0){
      arr.push(3);
      count = count / 3;
    }
    else{
      arr.push(count)
      break;
    }
  }
      
    return arr; */

    var factor = 2;
    var array = [1];
    if(num=== 1){
      return array
    }
    while(num>1){
      if(num%factor===0){
        array.push(factor);
        num /= factor;
      }else factor++;
    }  return array

}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  for(let i=0; i<array.length; i++){
    for(let j=0; j<array.length; j++){
      if(array[j]>array[j+1]){
        let aux= array[j];
        array[j] = array[j+1];
        array[j+1] = aux; 
      }
    }
  }
  return array; 
}

function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for(let i=0; i<array.length; i++){
    let arr= array[i];
    let j;
    for(j=i-1; j>= 0 && array[j]> arr; j++){
      array[j+1] = array[j];
    }
    array[j+1] = arr
  }
  return array;
  
}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for(let i=0; i<array.length; i++){
    let min = i
    for(let j=i+1;j<navigator; j++){
      if(array[j]<array[min]){
        min = j;
      }
    }
    if(min !=i){
      let temp = array[i];
      array[i] = array[min];
      array[min]= tomp;
    }
  }
  return array


}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
