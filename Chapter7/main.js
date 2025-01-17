//Creating a Hangman Game

            //Player input:
            var name = prompt("What's your name?");
            console.log("Hello " + name);

            if (name === "") {
                console.log("Please enter a name");
                prompt("What's your name?");
            }
            else {
                alert("Hello " + name + "!");
            }

            //Creating an array of words
                var WordsArray = ["javascript", "python", "java", "php", "html", "css", "csharp", "swift", "kotlin"];
                var Randomword = WordsArray[Math.floor(Math.random() * WordsArray.length)];

            //Hangman guess array
                var HangmanAnswerArray = [];
                for (var i = 0; i < Randomword.length; i++) {
                 HangmanAnswerArray[i] = "_";
                }
                console.log(HangmanAnswerArray);
                var RemainingLetters = Randomword.length;

            //Player guessing the letters(Game Code)
            //Players only have 6 incorrect guesses
                var incorrectGuesses = 0;
                var maxIncorrectGuesses = 6;

                while (RemainingLetters > 0 && incorrectGuesses < maxIncorrectGuesses) {
                    alert(HangmanAnswerArray.join(" ") + "\n Incorrect guesses: " + incorrectGuesses + "\n Remember, if you enter nothing the game ends");
                    var playerGuess = prompt("Guess a letter").toLowerCase();
                    console.log("Player's guess is: " + playerGuess);
                    //General Input Validation, If the player enters nothing, the game ends
                    if (playerGuess === null || playerGuess === "" || playerGuess === " ") {
                        break;
                    } else if (playerGuess.length !== 1) {
                        alert("Please enter a single letter.");
                    } else {
                        var correctGuess = false;
                        //Correct guesses
                            for (var j = 0; j < Randomword.length; j++) {
                                if (Randomword[j] === playerGuess.toLowerCase()) {
                                    if (HangmanAnswerArray[j] === "_") { //You see where that underscore is? There was a space with it.
                                                                        // I tore my hair out trying to fix the comparison error because
                                                                        //of a FLIPPING SPACE. 
                                        HangmanAnswerArray[j] = playerGuess.toLowerCase();
                                        RemainingLetters--;
                                        correctGuess = true;
                                    }
                                }
                            }
                            //Incorrect guess both for already guessed letters and new letters
                            if (!correctGuess && HangmanAnswerArray.includes(playerGuess.toLowerCase())) { 
                                alert("You've already guessed that letter");
                            } else if (!correctGuess) {
                                incorrectGuesses++;
                            }
                        }
                    }
                    //End of the game messages
                    if (RemainingLetters === 0) {
                        alert("Congratulations! You guessed the word: " + Randomword);
                    } else {
                        alert("Sorry, you've been hanged! The word was: " + Randomword);
                    }
