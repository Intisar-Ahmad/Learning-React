
export function genNumber(size) {
    let newArray = new Array(size);
    for (let index = 0; index < newArray.length; index++) {
        newArray[index] = Math.floor(Math.random() * 10);
    }

    return newArray;
}

export function summing(arr,n) {
    let sum = arr.reduce((accumulator,currentVal)=>{
        return accumulator+=currentVal;
    },0);
   return sum===n ? "Winner" : "Loser";
}
