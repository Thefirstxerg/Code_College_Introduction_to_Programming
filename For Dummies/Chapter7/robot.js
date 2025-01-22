//Animating a robot

document.getElementById("lefteye").style.backgroundColor = "purple";
//Right eye loops through colors  slowly changing colors
var rightEye = document.getElementById("righteye");

// Put a 2‐pixel‐wide, solid black border around his body.
document.getElementById("body").style.border = "2px black solid";
// Round the corners of his mouth.
document.getElementById("mouth").style.borderRadius = "4px";
// Put yellow dots around his right eye.
document.getElementById("righteye").style.border =  "4px yellow dotted";
// Change his left arm’s color.
document.getElementById("leftarm").style.backgroundColor = "#FF00FF";
// Change the text color.
document.getElementById("body").style.color = "#FF0000";
// Give Douglas hair.
document.getElementById("head").style.borderTop =  "5px black solid";

//make the robot tilt his head left
document.getElementById("head").style.transform = "rotate(-20deg)";
//make nose round
document.getElementById("nose").style.borderRadius = "50%";
//make right arm green 
document.getElementById("rightarm").style.backgroundColor = "green";
//make the lips(border) pink
document.getElementById("mouth").style.borderColor = "pink";
document.getElementById("mouth").style.borderWidth = "12px";
document.getElementById("mouth").style.borderStyle = "Solid";

//On click change right eye color
rightEye.addEventListener("click", changeColor);
function changeColor() {
    var colors = ["red", "blue", "green", "yellow", "purple", "orange"];
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    rightEye.style.backgroundColor = randomColor;
}

rightEye.addEventListener("click", moveUpDown);
leftarm.addEventListener("click", moveRightLeft);

var rightEyeInterval;
var leftArmInterval;

//On click move the right eye up and down
function moveUpDown() {
    clearInterval(rightEyeInterval);
    var top = 0;
    var goingDown = true;
    rightEyeInterval = setInterval(frame, 20);
    function frame() {
        if (goingDown) {
            top++;
            if (top >= 20) {
                goingDown = false;
            }
        } else {
            top--;
            if (top <= 0) {
                goingDown = true;
            }
        }
        rightEye.style.top = top + "px";
    }
};
//On click move the left arm right and left
function moveRightLeft() {
    clearInterval(leftArmInterval);
    var left = 0;
    var goingRight = true;
    leftArmInterval = setInterval(frame, 20);
    function frame() {
        if (goingRight) {
            left++;
            if (left >= 20) {
                goingRight = false;
            }
        } else {
            left--;
            if (left <= 0) {
                goingRight = true;
            }
        }
        leftarm.style.left = left + 700 + "px";
    }
};