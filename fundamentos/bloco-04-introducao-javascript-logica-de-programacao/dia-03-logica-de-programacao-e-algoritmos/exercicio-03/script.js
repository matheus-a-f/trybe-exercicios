function reverseTriangle(size){
    let output = ''

    for (let x = 0; x <= size; x++){
        for (let y = 0; y < size - x; y++){
            output += ' ';
        }
        for (let z = 0; z < x; z++){
            output += '*'
        }
        output += '\n'
    }
    return output
}

console.log(reverseTriangle(3))