function variablesTypes(value) { 
    return "\"My name is: " + value[0] + " //type is " + typeof(value[0]) + "\n" + 
            "My age is: " + value[1] + " //type is " + typeof(value[1]) + "\n" + 
            "I am male: " + value[2] + " //type is " + typeof(value[2]) + "\n" + 
            "My favorite foods are: " + value[3] + " //type is " + typeof(value[3]) + "\""
}

console.log(variablesTypes(['Ivaylo', 22, true, ['fries', 'banana', 'cake']]));