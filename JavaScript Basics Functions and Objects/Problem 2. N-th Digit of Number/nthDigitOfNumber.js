function findNthDigit(arr) {
    var arr1 = [];
    var firstnumber = arr[0];
    var lastnumber = arr[1].toString().replace(".", "").replace("-", "");
    var patt1 = /\d/g;
    var result = lastnumber.match(patt1);
    for (var i = 0; i < result.length; i++) {
        arr1.push(result[i]);
        var output = arr1[arr1.length - firstnumber];
    }
    if (firstnumber > arr1.length) { 
        return "The number doesn’t have " + firstnumber + " digits";
    }
        return output;
}
console.log(findNthDigit([1, 6]));
console.log(findNthDigit([2, -55]));
console.log(findNthDigit([6, 923456]));
console.log(findNthDigit([3, 1451.78]));
console.log(findNthDigit([6, 888.88]));