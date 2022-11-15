// chater 01

alert('Welcome to JS Land... \nHappy Coding ');

// chapter 02
document.write('<h1>Chapter 01-02</h1> <br>Check Alert and Console');

console.log('chapter 2 ');
var username = 'hasham';
var fullname = 'Muhammad Hasham';
console.log(username, fullname);
var book = 'A smarter way to learn JavaScript';
console.log(book);

// chapter 03
console.log('chapter 3 ');
var age = 20;
console.log('My age is', age, 'years old');

var visitor = ' Khan';
var product = ' T-Shirts';
var quantity = 5;
document.write('<h1>Chapter 03</h1> ');
document.write(visitor, ' ordered ', quantity, product, ' on XYZ Clothing store');

// chapter 04
document.write('<h1>Chapter 04</h1> ');
document.write('<h3>“Rules for naming JS variables”</h3>')
document.write('Variable names can only contain "numbers", "$"and "_".')
document.write('<br>For example $my_1stVariable Variables must begin with a letter, $ or _.')
document.write('<br>For example $name, _name or name Variable names are case sensitive.<br> Variable names should not be JS keywords')

// chapter 05
document.write('<h1>Chapter 05</h1> ');

var num;
document.write('Value after declaration is ', num);
num = 5;
document.write('<br>Initial value is ', num);
num++;
document.write('<br>Valiue after increment is ', num);
num = num + 7;
document.write('<br>Value after adding 7 is ', num);
num--;
document.write('<br>Value after decrement is ', num);
num = num / 3;
document.write('<br>Reminder is 0');


var tempinC = 30;
var tempinF = (tempinC * (9 / 5)) + 35;
document.write('<br><br>Temp in C is ', tempinC, 'C', '<br>Temp in F is ', tempinF, 'F');

// chapter 06
document.write('<h1>Chapter 06-09</h1> ');
var tbl = +prompt('Give a number you want a table of.', '05');
document.write('<br>', tbl, ' X 1 =', tbl * 1);
document.write('<br>', tbl, ' X 2=', tbl * 2);
document.write('<br>', tbl, ' X 3=', tbl * 3);
document.write('<br>', tbl, ' X 4 =', tbl * 4);
document.write('<br>', tbl, ' X 5 =', tbl * 5);
document.write('<br>', tbl, ' X 6 =', tbl * 6);
document.write('<br>', tbl, ' X 7 =', tbl * 7);
document.write('<br>', tbl, ' X 8 =', tbl * 8);
document.write('<br>', tbl, ' X 9 =', tbl * 9);
document.write('<br>', tbl, ' X 10 =', tbl * 10);

// chapter 09-11
document.write('<h1>Chapter 09-11</h1> ');
let emarks = +prompt('Marks in English ', '80');
let mmarks = +prompt('Marks in Maths ', '80');
let umarks = +prompt('Marks in Urdu ', '80');
let imarks = +prompt('Marks in Islamiat ', '80');

document.write('<h3>MARKS SHEET</h3>');
document.write('<br>Marks in English ', emarks, ' out of 100');
document.write('<br>Marks in Maths ', mmarks, ' out of 100');
document.write('<br>Marks in Urdu ', umarks, ' out of 100');
document.write('<br>Marks in Islamiat ', imarks, ' out of 100');
var total = emarks + mmarks + umarks + imarks;
document.write('<br><br><b>Total Marks: </b>', total, ' out of 400');
var per = (total / 400) * 100;
document.write('<br><b>Percentage: </b>', per)


if (per >= 85) {
    document.write('<br><b>Grade: A+</b>');
} else if (per >= 75) {
    document.write('<br><b>Grade: A</b>');
} else if (per >= 70) {
    document.write('<br><b>Grade: B</b>');
} else if (per >= 60) {
    document.write('<br><b>Grade: C</b>');
} else if (per >= 50) {
    document.write('<br><b>Grade: D</b>');
} else {
    document.write('<br><b>Grade: Fail</b>')
}


// chapter 12-13
document.write('<h1>Chapter 12-13</h1> ');
var check = prompt('Enter a Character', 'A-Z, a-z');

if (check == check.toLocaleUpperCase()) {
    document.write('Character is in Capitalcase');
} else if (check == check.toLocaleLowerCase()) {
    document.write('Character is in Lowercase');
}



var inta = 22;
var intb = 33;
if (inta < intb) {
    document.write('\nInteger A is less than B')
} else {
    document.write('\nInteger B is less than A')

}


var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
}
else {
    greeting = "Good evening";
}
console.log(greeting);

