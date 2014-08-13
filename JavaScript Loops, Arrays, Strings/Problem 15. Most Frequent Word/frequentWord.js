function findMostFreqWord(value) {
    value = value.toLowerCase();
    value = value.split(/\W+/);

    var arr = [];
    var min;
    var temp = 0;
    for (var i = 0; i < value.length - 1; i++) {
        min = i;
        for (var j = i + 1; j < value.length; j++) {
            if (value[j] < value[min]) {
                min = j;
            }
        }
        if (i != min) {
            temp = value[i];
            value[i] = value[min];
            value[min] = temp;
        }
    }

for (var i = 0; i < value.length; i++) {
    arr.push(value[i]);
}

    var counter = 1;
    var longestfrequent = 1;

    for (var i = 0; i < arr.length; i++) {
        if(arr[i] == arr[i + 1]) {
            counter++;
            if (counter > longestfrequent) {
                longestfrequent = counter;
                var mostfrequent = [arr[i]];
            }
            else if (counter == longestfrequent && mostfrequent.indexOf(arr[i]) < 0) {
                mostfrequent.push(arr[i]);
            }
        }
        else {
            counter = 1;
        }
    }
        for (var k = 0; k < mostfrequent.length; k++) {
            console.log("%s -> %s times", mostfrequent[k], longestfrequent);
        }
}

findMostFreqWord('in the middle of the night');
findMostFreqWord('Welcome to SoftUni. Welcome to Java. Welcome everyone.');
findMostFreqWord('Hello my friend, hello my darling. Come on, come here. Welcome, welcome darling.');