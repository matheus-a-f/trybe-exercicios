let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

function oddCounter(array){
    let count = 0
    let message = ''

    for(let i = 0; i < array.length; i++){
        
        if (array[i] % 2 !== 0){
            count += 1
        }

    }
    if (count > 0){
        message = count + ' odd numbers found!'
    }
    else{
        message = 'No odd numbers found.'
    }

    return message
}

console.log(oddCounter(numbers))