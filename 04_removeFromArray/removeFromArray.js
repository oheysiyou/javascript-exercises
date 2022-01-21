const removeFromArray = function(list, ...del) {
     // transfer to a list (list)
    let toList = [];
    for (iList = 0; iList < list.length; iList++) {
        toList.push(list[iList]);
    }

     // transfer to a list (del)
    let toDel = [];
    checkedDel = typeof del;
    if (checkedDel == 'object') {
        for (iDel = 0; iDel < del.length; iDel++) {
            toDel.push(del[iDel]);
        }
    } else {
        toDel.push(del);
    }

    // Scanning the list
    let indexToDel = 0;
    for (i = 0; i < toDel.length; i++) {
        for (j = 0; j < toList.length; j++) {
            if (toDel[i] === toList[j]) {
                toList.splice(j, 1)
            }
        }
    }

    return toList;
};

// Do not edit below this line
module.exports = removeFromArray;
