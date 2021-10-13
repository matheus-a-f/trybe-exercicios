const gradeNumeric = 100
let gradeAlpha;

function gradeConverter(grade){
    if (grade >= 90 && grade <= 100){
        gradeAlpha = 'A'
    }
    else if (grade >= 80 && grade < 90){
        gradeAlpha = 'B'
    }
    else if (grade >= 70 && grade < 80){
        gradeAlpha = 'C'
    }
    else if (grade >= 60 && grade < 70){
        gradeAlpha = 'D'
    }
    else if (grade >= 50 && grade < 60){
        gradeAlpha = 'E'
    }
    else if (grade < 50 && grade >= 0){
        gradeAlpha = 'F'
    }
    else {
        console.log('Invalid grade number.')
    }
    return gradeAlpha
}

console.log(gradeConverter(gradeNumeric))