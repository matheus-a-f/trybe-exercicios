const num1 = 12
const num2 = 10
const num3 = 8

let ceil = 0

function ceiling(num1, num2, num3){
    if (num1 > num2 && num1 > num3){
        ceil = num1
    }
    else if (num2 > num1 && num2 > num3) {
        ceil = num2
    }
    else{
        ceil = num3
    }
    return ceil
}

console.log(ceiling(num1, num2, num3))