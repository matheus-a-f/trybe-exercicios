const num1 = 1
const num2 = 4
const num3 = 6

let oddFound;

function oddFinder(num1, num2, num3){
    if (num1 % 2 !== 0 || num2 % 2 !== 0 || num3 % 2 !== 0){
        oddFound = true
    }
    else {
        oddFound = false
    }
    return oddFound
}

console.log(oddFinder(num1, num2, num3))