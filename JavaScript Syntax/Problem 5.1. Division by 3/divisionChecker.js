function divisionBy3(value) {
    var sum = 0;
    if (value < 9) {
        return "bad input";
    }
    else {
        while (value > 0) {
            sum = sum + (value % 10);
            value = Math.floor(value / 10);
        }
    }

    if (sum % 3 == 0) {
        return "the number is divided by 3 without remainder";
    }
    else {
        return "the number is not divided by 3 without remainder";
    }
}

console.log(divisionBy3(6));
console.log(divisionBy3(189));
console.log(divisionBy3(591));
console.log(divisionBy3(112));