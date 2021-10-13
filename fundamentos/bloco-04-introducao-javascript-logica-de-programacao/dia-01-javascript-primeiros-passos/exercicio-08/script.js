const num = 12
let message = ''

function posOrNeg(num){
    if (num > 0){
        message = 'positive'
    }
    else if (num < 0){
        message = 'negative'
    }
    else{
        message = 'zero'
    }
    return message
}

console.log(posOrNeg(num))