const max = prompt("Enter the max number");

// Parse the input to ensure it's a number
const maxNumber = parseInt(max);

// Check if the input is a valid number
if (isNaN(maxNumber) || maxNumber <= 0) {
    console.log("Please enter a valid positive number.");
} else {
    const random = Math.floor(Math.random() * maxNumber) + 1;

    let guess;

    while (true) {
        guess = prompt("Guess the number between 1 and " + maxNumber + " (or type 'quit' to exit)");

        if (guess === null || guess.toLowerCase() === "quit") {
            console.log("User Quit");
            break;
        }

        // Parse the user's guess to ensure it's a number
        const userGuess = parseInt(guess);

        // Check if the input is a valid number
        if (isNaN(userGuess)) {
            console.log("Please enter a valid number.");
            continue;
        }

        if (userGuess === random) {
            console.log("Congratulations! You guessed the right number. The random number was", random);
            break;
        } else if(userGuess < random){
            prompt("Your guess was too small. please try again")
            }else{
                prompt("Your guess was too large. please try again")

            }
        }
        
    }

