function reverseWordsInString(str) {
    var arr = [];
    var word = str.split(" ");
    for (var i = 0; i < word.length; i++) {
        var result = word[i].split("").reverse().join("");
        arr.push(result);
        var output = arr.join(" ");
    }
    return output;
}

console.log(reverseWordsInString("Hello, how are you."));
console.log(reverseWordsInString("Life is pretty good, isn’t it?"));