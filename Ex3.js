function sequenciaNumPares(n){
    let array = [];

    for(let i = 0; array.length < n; i += 2){
        array.push(i);
    }
    return array;
}

const n = 8;

console.log(sequenciaNumPares(n));
