'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  return (Number.parseInt(num,2))
}

function DecimalABinario(num) {
  // tu codigo aca
  let binario=[];

  let i=num

  do{
    binario.push(i%2);
    i=Math.floor(i/2)
  }while(i>1)

  binario.push(i);

  return(binario.reverse().join(""))
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}