function plusEquals(number){
    let result = 0;

    for (let i = 0; i <= number; i++){
        result += i
    }
    return result
}

console.log(plusEquals(5))