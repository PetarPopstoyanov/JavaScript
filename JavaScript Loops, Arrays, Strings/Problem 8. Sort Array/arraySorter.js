function sortArray(value) {
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
    var output = arr.join(", ");
    return output;
}

console.log(sortArray([5, 4, 3, 2, 1, -5]));
console.log(sortArray([12, 12, 50, 2, 6, 22, 51, 712, 6, 3, 3]));