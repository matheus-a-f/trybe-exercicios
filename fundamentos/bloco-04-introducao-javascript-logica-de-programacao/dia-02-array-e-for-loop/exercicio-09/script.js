let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

function smallestNumber(array){
    let smol = array[0]

    for (let i = 0; i < array.length; i++){
        if (array[i] < smol){
            smol = array[i]
        }
    }
    return smol
}

console.log(smallestNumber(numbers))