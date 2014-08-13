function createArray(value) { 
    var arr = new Array(20);
    for (var i = 0; i < arr.length ; i++) {
        arr[i] = i * 5;
    }
    var output = arr.join(", ")
    return output;
}

console.log(createArray());