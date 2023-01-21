const  array = [0, 8, 23, 16, 10, 15, 41, 12, 13]

const cont = array.length 
const reverso = [cont] //O array reverso deve ter o mesmo tamanho que o "array referência.

var i = 0

for(i; i < cont; i++){
reverso[i] = array[cont - i - 1]
}

console.log(`array original = ${array} e seu reverso é: ${reverso}`)