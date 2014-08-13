function findMaxSequence(value) {
    var counter = 1;
    var longestcounter = 1;
    var startindex;
    var endindex;

    for (var i = 1; i < value.length; i++) {
        if (value[i - 1] < value[i]) {
            counter++;
            if (counter > longestcounter) {
                longestcounter = counter;
                startindex = i - counter + 1;
                endindex = startindex + counter;
            }
        }
        else { 
            counter = 1;
        }
    }
    if (counter < 2) {
        return "no";
    }
    var arr = value.slice(startindex, endindex);
    return arr;
}

console.log(findMaxSequence([3, 2, 3, 4, 2, 2, 4]));
console.log(findMaxSequence([3, 5, 4, 6, 1, 2, 3, 6, 10, 32]));
console.log(findMaxSequence([3, 2, 1]));
console.log(findMaxSequence([1, 2, 3, 4, 4, 4, 3, 4, 5, 6]));