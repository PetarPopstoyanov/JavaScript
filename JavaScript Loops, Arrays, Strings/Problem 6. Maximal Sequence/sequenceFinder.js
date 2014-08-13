function findMaxSequence(value) {
    var counter = 1;
    var longestcounter = 1;
    var maxcounter = value[0];

    for (var i = 1; i < value.length; i++) {
        if (value[i - 1] === value[i]) {
            counter++;
            if (counter >= longestcounter) {
                longestcounter = counter;
                maxcounter = value[i];
            }
        }
        else {
            counter = 1;
        }
    }
    var arr = [];
    for (var i = 0; i < longestcounter; i++) {
        arr.push(maxcounter);
    }
    return arr;
}

console.log(findMaxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]));
console.log(findMaxSequence(['happy']));
console.log(findMaxSequence([2, 'qwe', 'qwe', 3, 3, '3']));
console.log(findMaxSequence([1, 1, 1, 2, 2, 5, 5, 5]));