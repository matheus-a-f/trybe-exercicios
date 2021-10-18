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