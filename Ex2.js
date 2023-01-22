function arrayQuadratico(array = []){

  var i = 0;
  for(i; i < array.length; i++){
    if(array[i] % 2 == 0){
        console.log(array[i] ** 2);
      }
    }
    return "";
}

const vetor = [1,2,3,4,5,6];
console.log(arrayQuadratico(vetor));