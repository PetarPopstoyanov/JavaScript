function createArray() {
    var arr = [];
    for (var i = 0; i < 20; i++) {
        arr.push(i * 5);
    }
    var output = arr.join(", ");
    return output;
}

console.log(createArray());