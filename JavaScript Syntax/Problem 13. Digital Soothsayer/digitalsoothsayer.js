function soothsayer(numbers, languages, cities, cars) { 
    var randomnumber = numbers[Math.floor(Math.random() * numbers.length)];
    var randomlanguage = languages[Math.floor(Math.random() * languages.length)];
    var randomcity = cities[Math.floor(Math.random() * cities.length)];
    var randomcar = cars[Math.floor(Math.random() * cars.length)];

    return "You will work " + randomnumber + " years on " + randomlanguage + "." +  "\n" +
           "You will live in " + randomcity + " and drive " + randomcar + "."

}

console.log(soothsayer([3, 5, 2, 7, 9], ["Java", "Python", "C#", "JavaScript", "Ruby"], 
                       ["Silicon Valley", "London", "Las Vegas", "Paris", "Sofia"], ["BMW", "Audi", "Lada", "Skoda", "Opel"]));