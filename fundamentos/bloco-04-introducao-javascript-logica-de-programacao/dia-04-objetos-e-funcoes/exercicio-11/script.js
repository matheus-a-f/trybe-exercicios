//exercise developed using reference from Tiago Meireles - Turma 17's code, posted on slack on October 15th.

function tailCheck(string, stringEnding){
    string = string.split('')
    stringEnding = stringEnding.split('')

    if (stringEnding[0] === string[string.length - 2] && stringEnding[1] === string[string.length -1]){
        return true
    }
    else{
        return false
    }
}

console.log(tailCheck('trybe', 'be'))