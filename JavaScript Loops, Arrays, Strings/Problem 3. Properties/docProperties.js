function displayProperties() {
    var keys = [];
    for (var key in document) {
        keys.push(key);
    }

    keys.sort();

    for (var key in keys) {
        console.log(keys[key])
    }
}

displayProperties();