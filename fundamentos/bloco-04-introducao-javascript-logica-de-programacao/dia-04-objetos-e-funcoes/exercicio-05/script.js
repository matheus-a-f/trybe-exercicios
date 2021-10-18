function palindromeCheck(string){
    let splitString = string.split("");
    let reverseArray = splitString.reverse();
    let reverseString = reverseArray.join("");

    if (string === reverseString){
        return true
    }
    else{
        return false
    }
}

console.log(palindromeCheck('arara'))