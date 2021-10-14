let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

function arithMean(array){
    let sum = 0
    let mean;

    for (let i = 0; i < array.length; i++){
        sum += array[i]
    }

    mean = sum / array.length

    return mean
}

console.log(arithMean(numbers))