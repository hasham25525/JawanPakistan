/***********Array**********/
var cities = ["Atlanta", "Baltimore", "Chicago", "Denver", "Los Angeles", "Seattle"];
console.log("Welcome to " + cities[3]);


/***********Adding and removing elements**********/
var pets = [];
pets[0] = 'dog';
pets[1] = 'cat';
pets[2] = 'bird';
pets.pop();
console.log('Pets array after pop', pets);

pets.push("fish", "ferret");
console.log('Pets array after push', pets);


/************Removing, inserting, and extracting elements**************/
pets.shift();
console.log('after shift', pets);

pets.unshift("gerbil", "snake");
console.log('after unshift', pets);

pets.splice(2, 2, "pig", "duck", "emu");


/**************for loops*************/
var cityToCheck;
var cleanestCities = ["Cheyenne", "Santa Fe", "Tucson", "Great Falls", "Honolulu"];
for (var i = 0; i <= 4; i++) {
    if (cityToCheck === cleanestCities[i]) {
        alert("It's one of the cleanest cities");
    }
}


/********Flags, Booleans, array length, and loopus interruptus**********/
var numElements = cleanestCities.length;
var matchFound = false;
for (var i = 0; i < numElements; i++); {
    if (cityToCheck === cleanestCities[i]) {
        matchFound = true;
        alert("It's one of the cleanest cities");
    }
}

if (matchFound === false) {
    alert("It's not on the list");
}


/***************for loops nested*************/
var firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "];
var lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];
var fullNames = [];
for (var i = 0; i < firstNames.length; i++) {
    for (var j = 0; j < lastNames.length; j++) {
        fullNames.push(firstNames[i] + lastNames[j]);
    }
}