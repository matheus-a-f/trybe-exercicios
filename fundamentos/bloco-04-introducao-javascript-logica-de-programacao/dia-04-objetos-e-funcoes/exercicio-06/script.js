let testArray = [2, 3, 6, 7, 10, 1];

function greatestIndex(array){
    let greatest = 0;

    for (let i = 0; i < array.length; i++){
        if (array[i] > greatest){
            greatest = i
        }
    }
    return greatest
}

console.log(greatestIndex(testArray))