function yesUpper(word, num) { // Range is 65 - 90
    let finalChar = '';
    let charValue = word.charCodeAt(0) + (num % 26);
    if (charValue < 65) {
        charValue = (charValue - 65) + 91;
    } else if (charValue > 90) {
        charValue = (charValue - 90) + 64;
    }
    finalChar = String.fromCharCode(charValue);
    return finalChar;
}

function notUpper(word, num) { // Range is 97 - 122
    let finalChar = '';
    let charValue = word.charCodeAt(0) + (num % 26);
    if (charValue < 97) {
        charValue = (charValue - 97) + 123;
    } else if (charValue > 122) {
        charValue = (charValue - 122) + 96;
    }
    finalChar = String.fromCharCode(charValue);
    return finalChar;
}

const caesar = function(word, num) {
    finalWord = '';
    isUpper = true;
    for (i = 0; i < word.length; i++) {
        // Special characters checker
        if (word[i] == '!' || word[i] == ' ' || word[i] == ',') {
            finalWord = finalWord + word[i];
        } else {
            // Is it capital letter or not?
            if (word[i] == word[i].toUpperCase()) {
                finalWord = finalWord + yesUpper(word[i], num);
            }
            else {
                finalWord = finalWord + notUpper(word[i], num);
            }
        }
    }
    return finalWord;
};

// Do not edit below this line
module.exports = caesar;
