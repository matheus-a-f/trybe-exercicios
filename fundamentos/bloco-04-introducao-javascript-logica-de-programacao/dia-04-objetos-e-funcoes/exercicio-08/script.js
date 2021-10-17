let testArray = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function longName(array){
    let longestName = ''

    for(let i = 0; i < array.length; i++){
        if (array[i].length > longestName.length){
            longestName = array[i]
        }
    }
    return longestName
}

console.log(longName(testArray))
