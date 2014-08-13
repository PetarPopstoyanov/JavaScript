function roundNumber(value) {
    return Math.floor(value) + "\n" + Math.round(value);
    return Math.round(value);
}

console.log(roundNumber(22.7) + "\n");
console.log(roundNumber(12.3) + "\n");
console.log(roundNumber(58.7));