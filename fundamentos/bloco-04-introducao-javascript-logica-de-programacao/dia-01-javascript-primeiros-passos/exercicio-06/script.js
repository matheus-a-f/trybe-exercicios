const num1 = 11
const num2 = 3

let ceil = 0

function ceiling (num1, num2){
    if (num1 > num2){
        ceil = num1
        return ceil
    }
    else if (num2 > num1){
        ceil = num2
        return ceil
    }
}

console.log(ceiling(num1, num2))