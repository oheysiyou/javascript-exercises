const palindromes = function (words) {
    reverseWords = '';
    trimmedWords = '';
    let punctionlessWords = '';
    for (i = 0; i < words.length; i++) { // Taking out all the punctuations.
        if (words[i] != '!' && words[i] != ',' && words[i] != '.') {
            punctionlessWords = punctionlessWords + words[i];
        }
    }
    for (i = 0; i < punctionlessWords.length; i++) { // Checking by trimming white spaces.
        if (punctionlessWords[i] != ' ') {
            trimmedWords = trimmedWords + punctionlessWords[i];
        }
    }
    for (i = trimmedWords.length - 1; i >= 0; i--) { // Reversing the word or phrase.
        reverseWords = reverseWords + trimmedWords[i];
    }
    if (reverseWords.toUpperCase() == trimmedWords.toUpperCase()) { // Palindromes?
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
 