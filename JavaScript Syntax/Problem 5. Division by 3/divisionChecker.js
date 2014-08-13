function divisionBy3(value) {
    if (value < 9) {
        return "bad input";
    }
    else if (value % 3 == 0) {
        return "the number is divided by 3 without remainder";
    }
    else {
        return "the number is not divided by 3 without remainder";
    }
}

console.log(divisionBy3(12));
console.log(divisionBy3(189));
console.log(divisionBy3(591));
console.log(divisionBy3(112));
console.log(divisionBy3(6));