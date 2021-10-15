function squareMaker(size){
    let output = ''

    for (let x = 0; x < size; x++){
        for (let y = 0; y < size; y++){
            output += '*'
        }
        output += '\n'
    }
    return output
}

console.log(squareMaker(5))