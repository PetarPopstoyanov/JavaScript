function isPrime(value) {
    var a = Math.round(Math.sqrt(value));
    for (var i = 2; i <= a; i++) {
        if (value % i == 0) {
            return false;
        }
        else {
            return true;
        }
    }
}

console.log(isPrime(7));
console.log(isPrime(254));
console.log(isPrime(587));