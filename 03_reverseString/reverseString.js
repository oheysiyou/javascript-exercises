const reverseString = function(str) {
    reversed = '';
    for(i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    };

    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
