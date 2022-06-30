'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  let pivote = array[array.length - 1];
	let masChico = [];
	let masGrande = [];

	if (array.length <= 1) { return array };

	for (let i = 0; i < array.length - 1; i++) {

		if (array[i] < pivote) {
			masChico.push(array[i]);
		}
		else {
			masGrande.push(array[i]);
		}
	}
	return [].concat(quickSort(masChico), pivote, quickSort(masGrande));
  
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
	/*  if(array.length<=1){return array};
	 function merge(){
	   let aux=[];
	   for(let i=0;i<left.length;i++){
		 for(let j=0;j<right.length;j++){
		 if(right<left){
		   right[j] = aux;
		   right.shift(right[j])
		   return aux = right[i]
		 }
	   }
	 }
	 }

	 
	 var left= array.slice(0,Math.floor(array.lenght/2)).mergeSort().merge();
	 var right= array.slice(Math.ceil(array.lenght/2)).mergeSort().merge(); */
	/*  var mitad= (array.lenght)/2
	 var left= array.splice(0,Math.floor(mitad))
	 var right= array.splice(Math.ceil(mitad))
	 console.log(left);
	 return right
	*/
	if(array.length === 1) return array;
	
	var merge = function(arr1, arr2) {
		var arrSorted = [];
		while(arr1.length && arr2.length) {
			if(arr1[0] >= arr2[0]) arrSorted.push(arr2.shift());
			if(arr1[0] < arr2[0]) arrSorted.push(arr1.shift());
		}
		return arrSorted.concat(arr1).concat(arr2);
	}

	// [5, 1, 4, 2, 8]
	//        ^
	// mitad = 2
	// left = [5, 1]
	//            ^
	// 			mitad = 1
	// 			left = [5]
	//		 	right = [1]
	// right = [4, 2, 8]
	//			   ^
	//			mitad = 2 
	//			left = [4]
	//			right = [2, 8]
	// 						^
	//				 	mitad = 1 
	//					left = [2]
	//				 	right = [8]


	var half = Math.ceil(array.length/2);
	var left = array.slice(0, half);
	var right = array.slice(half);


	return merge(mergeSort(left), mergeSort(right));
				// [4]  , [2, 8]

 
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
