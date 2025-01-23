// Listing 14 - 1
var language = prompt("What language do you speak?");

if (language === "JavaScript") {
    alert("Great! Let's talk JavaScript!");
    var speaksJavaScript = true;
} else {
    alert("I don't know what you're saying.");
}

if (speaksJavaScript) {
 alert("It's great to meet you.");
}

var password = "password";

var userPassword = prompt("Enter your password:").toLowerCase();
if (userPassword === password) {
    alert("Welcome!");
} else {    
    alert("Incorrect password.");
}

let age = prompt("What is your age?");
let userName = prompt("What is your name?");
if ((age === 20) && (userName === "John")) {
    alert("You are John.");
} else {    
    alert("You are not John.");
}