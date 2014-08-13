function findPalindromes(value) {
    value = value.toLowerCase();
    value = value.replace(".", "");
    value = value.split(/\W+/);
   
    var arr = [];
    
    for (var i = 0; i < value.length; i++) {
       var polindrom = value[i].split("").reverse().join("");
       if (value[i] == polindrom) {
           arr.push(value[i]);
       }
   }
   var output = arr.join(", ");
   return output;
}


console.log(findPalindromes('There is a man, his name was Bob.'));