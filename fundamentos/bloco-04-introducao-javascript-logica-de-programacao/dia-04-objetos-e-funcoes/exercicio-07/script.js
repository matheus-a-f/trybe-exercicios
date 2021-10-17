let testArray = [2, 4, 6, 7, 10, 0, -3];

function smallestIndex(array){
    let smallest = array[0];

    for (let i = 0; i < array.length; i++){
        if (array[i] < smallest){
            smallest = i;
        }
    }
    return smallest
}

console.log(smallestIndex(testArray))