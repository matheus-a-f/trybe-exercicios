//exercise completed with the help of this youtube video: https://www.youtube.com/watch?v=shO5VbD2rNI

function pyramidMaker(size){
    let output = ''

    for(let x = 0; x <= size; x++){
        for(let y = 0; y <= size - x; y++){
            output += ' '
        }
        for(let z = 0; z < 2 * x - 1; z++){
            output += '*';
        }
        output += '\n'
    }
    return output
}

console.log(pyramidMaker(3))