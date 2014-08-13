function checkBrackets(value) {
    var counter = 0;
    for (var ch in value) {
        if (value[ch] == "(") {
            counter++;
        }
        else if (value[ch] == ")") {
            counter--;
        }

        if (counter < 0) {
            break;
        }
    }
    if (counter == 0) {
        return "correct";
    }
    else if (counter != 0) {
        return "incorrect;"
    }
}

console.log(checkBrackets('( ( a + b ) / 5 – d )'));
console.log(checkBrackets(') ( a + b ) )'));
console.log(checkBrackets('( b * ( c + d *2 / ( 2 + ( 12 – c / ( a + 3 ) ) ) )'));

