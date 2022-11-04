/*****************chap 9*************** */
/******************prompt************* */
var question = "Your species?";
var defaultAnswer = "human";
var spec = prompt(question, defaultAnswer);

/*****************chap 10*************** */
/******************if************* */


var z = 'Vatican';

var correctAnswer = "Vatican";
if (z === correctAnswer) {
    console.log("Correct!");
}

/*****************chap 11*************** */
/**************comparision op************* */
/*

        < less than
        > greater than
        <= less than equal to
        >= greater than equal to
        == equal to (values only)
        != not equal to
        === equal to (values and data type)

*/
var yourTicketNumber = 487102;
if (yourTicketNumber !== 487208) {
    console.log("Better luck next time.");
}


/*****************chap 12*************** */
/**************if-else else-if************* */

if (z === correctAnswer) {
    console.log("Correct!");
}
else if (z === "Rome") {
    console.log("Incorrect but close");
}
else {
    console.log("Incorrect");
}

/*****************chap 13*************** */
/*************Testing sets of conditions************* */

// &&
var weight = 279;
var time = 5;
var gender = 'male';
if (weight > 300 && time < 6 && age > 17 && gender === "male") {
    console.log("Come to our tryout!");
}
else {
    console.log("Come to our cookout!");
}

// ||
var SAT = 40;
var avg = 30;
var GPA = +prompt('Your GPA ');
var sport = 'cricker';
if (SAT > avg || GPA > 2.5 || sport === "football") {
    alert("Welcome to Bubba State!");
}
else {
    alert("Have you looked into appliance repair?");
}

/*****************chap 14*************** */
/*************if statements nested************* */
var c, d, x, y, a, b, e, f, g, h;

if (c === d) {
    if (x === y) {
        g = h;
    }
    else if (a === b) {
        g = h;
    }
    else {
        e = f;
    }
} else {
    e = f;
}