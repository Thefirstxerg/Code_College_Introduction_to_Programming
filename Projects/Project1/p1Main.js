
// Please add an if statement which checks if the guess is correct, if it is, then display a message: Correct Guess!, otherwise “Sorry, incorrect Guess!
// How can you combine line 2 and 3 into one line
// Expand the program to do this in a while loop, only exiting when the guess was correct
// While the guess is incorrect, test also if it is too low or too high and display the message “Incorrect, too low” or “Incorrect, too high”.
// When you are done make the secret number random
document.getElementById("btnGuess").addEventListener("click", clickFunction());

function clickFunction() {
    // Generate a random number between 1 and 20, +1 is to include 20
    let secret = Math.floor(Math.random() * 20) + 1;
    // Convert the string guess to an integer so that we can compare
    var guess = parseInt(prompt("Please guess the secret number (1-20)"));
    while (guess !== secret) {
        if (guess < secret) {
            alert("Incorrect, too low");
        } else if (guess > secret) {
            alert("Incorrect, too high");
        }
        guess = parseInt(prompt("Please guess the secret number (1-20)"));
    }
    alert("Correct Guess!");
}

