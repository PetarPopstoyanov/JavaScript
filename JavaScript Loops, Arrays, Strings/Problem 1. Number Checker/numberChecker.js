function printNumbers(n) {
    var arr = [];
    if (n < 0) {
        return "no";
    }
    else {
        for (var i = 1; i <= n; i++) {
            if (i % 4 != 0 && i % 5 != 0) {
                arr.push(i);
            }
        }
        var output = arr.join(", ");
        return output;
    }
}

console.log(printNumbers(20));
console.log(printNumbers(-5));
console.log(printNumbers(13));