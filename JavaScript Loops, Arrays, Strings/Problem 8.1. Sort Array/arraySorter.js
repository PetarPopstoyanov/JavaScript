function sortArray(value) {
    var arr = [];
    var min;
    for (var i = 0; i < value.length; i++) {
        min = Math.min.apply(Math, value);
        arr.push(min);
        value[value.indexOf(min)] = Number.MAX_VALUE;
    }
    return arr;
}

console.log(sortArray([5, 4, 3, 2, 1, -5]));
console.log(sortArray([12, 12, 50, 2, 6, 22, 51, 712, 6, 3, 3]));