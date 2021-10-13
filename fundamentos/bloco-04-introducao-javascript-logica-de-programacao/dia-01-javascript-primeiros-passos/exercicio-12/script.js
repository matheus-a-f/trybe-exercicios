const num1 = 1
const num2 = 6
const num3 = 3

let evenFound;

function evenCheck(num1, num2, num3){
    if (num1 % 2 === 0 || num2 % 2 === 0 || num3 % 2 === 0){
        evenFound = true
    }
    else {
        evenFound = false
    }
    return evenFound
}

console.log(evenCheck(num1, num2, num3))