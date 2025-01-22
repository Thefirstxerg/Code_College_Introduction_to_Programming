var dreamCar = {
    make: "Your mother",
    model: "122",
    color: "blue",
    year: 2015,
    bodyStyle: "Very Expensive Car",
    price: 1000000
   };

   alert("The type of dreamCar is: " + typeof dreamCar);

document.getElementById("pricetag").innerHTML = dreamCar.price;
document.getElementById("modelyear").innerHTML = dreamCar.year;
document.getElementById("body").style.backgroundColor = dreamCar.color;
document.getElementById("body").innerHTML = dreamCar.make + " " + dreamCar.model;

var object = {
    key1 : "value",
    key2 : 100,
    key3 : true
};

var array = [1, 2, 3, 4, 5];

//Making the car move right with onclick event
car.addEventListener("click", moveRight);
var moveRightInterval;

function moveRight() {
    clearInterval(moveRightInterval);
    var left = 0;
    moveRightInterval = setInterval(frame, 20);
    function frame() {
        left++;
        car.style.left = left + "px";
    }
};