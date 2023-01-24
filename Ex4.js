function arrayQuadratico(num = []){
    for(let i = 0; i < num.length; i++){
        console.log(array[i] * 2);
    }
    return "";
}

function paraString(num = []){
    let j;
    for(let i = 0; i < num.length; i++){
        console.log(`${array[i] * 2}`);
    }
    return "";
}

function parOuImpar(num = []){
    
    for(let i = 0; i < num.length; i++){
        if(num[i] % 2 == 0){
            console.log(num[i] + ": é par");
        }
        else{
            console.log(num[i] + ": é impar");
        }
    }
    return "";
}

const array = [1, 2, 3, 4, 5, 6];

console.log(arrayQuadratico(array));
console.log(paraString(array));
console.log(parOuImpar(array));


