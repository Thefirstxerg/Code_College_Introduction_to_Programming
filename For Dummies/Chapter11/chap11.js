//Arrays
var people = ["Mary", "Bobby", "Judy", "Eddie", "Herbie", "Paul", "Bobby"];
var otherPeople = ["Teddy", "Goergie", "Katty", "Jack"];

//Examples of every array method

//Concat is used to join two arrays
people = people.concat(otherPeople);
//IndexOf is used to find the index of a value in an array
var eddieIndex = people.indexOf("Eddie");
//Join is used to join the elements of an array into a string
var peopleString = people.join();
//LastIndexOf is used to find the last index of a value in an array
var lastBobbyIndex = people.lastIndexOf("Bobby");
//Pop is used to remove the last element of an array
people.pop();
people.pop();
//Push is used to add an element to the end of an array
people.push("Teddy");
people.push("Teddy");
//Reverse is used to reverse the order of an array
people.reverse();
//Shift and Unshift is used to remove or add the first element of an array
people.shift();
people.unshift("Teddy");
//Slice is used to extract a part of an array
var slicedPeople = people.slice(0, 3);
//Sort is used to sort the elements of an array numerically according to ASCII values
people.sort();
//Splice is used to add or remove elements from an array while also returning some of the removed elements
people.splice(1, 0, "Cathy");

//Simple example
var parents = ["Parent1", "Parent2"];
var friends = ["Friend1", "Friend2"];
var family = parents.concat(friends).toString();
var familyID = document.getElementById("myFamily");

console.log(family);

familyID.innerHTML = "<h3> This is my family: " + family + "</h3>";

var veryLongArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var selectNumbers = veryLongArray.slice(2, 7); 
console.log(selectNumbers);
console.log(veryLongArray.slice(7,9));