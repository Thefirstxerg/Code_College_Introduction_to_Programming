//Listing 15.1

var myNumber = prompt("Enter your favorite day of the week!");
    var theResponse;
switch (myNumber) {
    case "Monday":
        theResponse = "Ack!";
        break;
    case "Tuesday":
        theResponse = "Taco day!";
        break;
    case "Wednesday":
        theResponse = "Halfway there!";
        break;
    case "Thursday":
        theResponse = "It's the new Friday!";
        break;
    case "Friday":
        theResponse = "TGIF! Yeah!";
        break;
    case "Saturday":
        theResponse = "What a day!";
        break;
    case "Sunday":
        theResponse = "Sunday = Funday!";
        break;
    default:
        theResponse = "I haven't heard of that one!";
        break;
}
alert(theResponse);