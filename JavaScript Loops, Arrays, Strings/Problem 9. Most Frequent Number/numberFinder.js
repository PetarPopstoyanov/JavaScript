function findMostFreqNum(value) {
    var arr = [];
    var min;
    var temp = 0;
    for (var i = 0; i < value.length - 1; i++) {
        min = i;
        for (var j = i + 1; j < value.length; j++) {
            if (value[j] < value[min]) {
                min = j;
            }
        }
        if (i != min) {
            temp = value[i];
            value[i] = value[min];
            value[min] = temp;
        }
    }
    for (var i = 0; i < value.length; i++) {
        arr.push(value[i]);
    }

    var counter = 1;
    var longestnumber = 1;
    var mostnum = arr[0];

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == arr[i + 1]) {
            counter++;
            if (counter > longestnumber) {
                longestnumber = counter;
                mostnum = arr[i];
            }
        }
        else {
            counter = 1;
        }

    }
    return mostnum + " (" + longestnumber + " times" + ")";
}

console.log(findMostFreqNum([4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3]));
console.log(findMostFreqNum([2, 1, 1, 5, 7, 1, 2, 5, 7, 3, 87, 2, 12, 634, 123, 51, 1]));
console.log(findMostFreqNum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]));