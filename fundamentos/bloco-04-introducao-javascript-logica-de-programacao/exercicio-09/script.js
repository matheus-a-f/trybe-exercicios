const a = 80
const b = 60
const c = 40

let validTriangle;

function triCheck(sideA, sideB, sideC){
    if (sideA + sideB + sideC === 180){
        validTriangle = true
    }
    else if (sideA < 0 || sideB < 0 || sideC < 0){
        validTriangle = false
        console.log("Invalid angle value.")
    }
    else{
        validTriangle = false
    }
    return validTriangle;
}   

console.log(triCheck(a, b, c))
