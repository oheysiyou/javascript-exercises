const fibonacci = function(num) {
    fiboArray = [1, 1];
    toNum = Number(num);
    newNum = 1;
    if (toNum < 0) {
        return 'OOPS';
    } else {
        for (i = 1; i < toNum - 1; i++) {
            newNum = fiboArray[i] + fiboArray[i - 1];
            fiboArray.push(newNum);
        }
        return newNum;
    }
};

// Do not edit below this line
module.exports = fibonacci;
