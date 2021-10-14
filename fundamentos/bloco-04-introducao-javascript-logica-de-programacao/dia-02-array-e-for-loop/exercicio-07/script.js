let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

function arithMean(array){
    let sum = 0
    let mean;
    let message = ''

    for (let i = 0; i < array.length; i++){
        sum += array[i]
    }

    mean = sum / array.length

    if (mean < 20){
        message = 'Value smaller than 20:'
    }
    else{
        message = 'Value greater than 20:'
    }

    return message + mean
}

console.log(arithMean(numbers))