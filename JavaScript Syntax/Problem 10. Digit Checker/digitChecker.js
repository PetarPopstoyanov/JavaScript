function checkDigit(value) {
    if (value < 1000) {
        return "bad input";
    }
    else {
        var a = Math.floor((value / 100) % 10);
        if (a == 3) {
            return true;
        }
        else {
            return false;
        }
    }
}

console.log(checkDigit(1235));
console.log(checkDigit(25368));
console.log(checkDigit(123456));
console.log(checkDigit(999));