const repeatString = function(word, num) {
    if (num < 0) {
        return 'ERROR';
    }
    final = '';
    for (i = 0; i < num; i++) {
        final += word;
    }
    return final;
};

// Do not edit below this line
module.exports = repeatString;
