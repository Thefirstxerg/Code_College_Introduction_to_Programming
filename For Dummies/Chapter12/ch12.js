//Functions

//Built-in Functions 
// Example of getElementById()
document.getElementById('myElement').style.color = 'red';

// Example of toString()
let number = 123;
let numberString = number.toString();
console.log(numberString); // "123"

// Example of addEventListener()
document.getElementById('myButton').addEventListener('click', function() {
    alert('Button was clicked!');
});

// Example of indexOf()
let array = [1, 2, 3, 4, 5];
let index = array.indexOf(3);
console.log(index); // 2

//Self-Built functions
var displayName = function(name) {
    console.log('Hello ' + name);
}
displayName('Ulrich'); // Hello Ulrich 

