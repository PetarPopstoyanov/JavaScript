function replaceSpaces(value) {
    var re = new RegExp(" ", 'g');
    return result = value.replace(re, "");
}

console.log(replaceSpaces("But you were living in another world tryin' to get your message through"));