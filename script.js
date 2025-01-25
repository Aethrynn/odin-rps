function getComputerChoice(){
    // Create an array with all 3 possible results
    const computerChoices = ["Rock", "Paper", "Scissors"];

    // Randomly choose a number betweeen 1 and 3
    let randomChoice = Math.floor(Math.random() * 3);

    // Get the value from the array at the index of the random number
    let rpsAction = computerChoices[randomChoice];

    // Return the chosen value
    return rpsAction;
}

function getHumanChoice(){
    let humanChoice;

    // Prompt the user for their option and save it to a variable
    // set the user's input to capitalize the first letter and keep the rest lowercase
    while (humanChoice != "Rock" && humanChoice != "Paper" && humanChoice != "Scissors"){
        humanChoice = prompt("Rock, Paper, or Scissors?");
        let firstLetter = humanChoice.charAt(0);
        let restOfWord = humanChoice.slice(1);
        humanChoice = firstLetter.toUpperCase() + restOfWord.toLowerCase();
    }

    // Return valid input
    return humanChoice;
}

function playGame(){
    // declare player and cpu score variables
    let playerScore = 0;
    let cpuScore = 0;

    function playRound(playerChoice, cpuChoice){
        // declare variable used to track the winner
        let winner;
    
        // compare the player's choice and the cpu's choice
        switch (playerChoice) {
            case "Rock":
                switch (cpuChoice) {
                    case "Rock":
                        winner = "none";
                        break;
                    case "Paper":
                        winner = "cpu";
                        break;
                    case "Scissors":
                        winner = "player";
                        break;            
                    default:
                        break;
                }
                break;
            case "Paper":
                switch (cpuChoice) {
                    case "Rock":
                        winner = "player";
                        break;
                    case "Paper":
                        winner = "none";
                        break;
                    case "Scissors":
                        winner = "cpu";
                        break;            
                    default:
                        break;
                }
                break;
            case "Scissors":
                switch (cpuChoice) {
                    case "Rock":
                        winner = "cpu";
                        break;
                    case "Paper":
                        winner = "player";
                        break;
                    case "Scissors":
                        winner = "none";
                        break;            
                    default:
                        break;
                }
                break;
            default:
                break;
        }
    
        // output a console message declaring the winner and increment the score of the winner
        if (winner == "player") {
            console.log("You win! " + playerChoice + " beats " + cpuChoice);
            playerScore++;
        } else if (winner == "cpu") {
            console.log("You lose! " + cpuChoice + " beats " + playerChoice);
            cpuScore++;
        } else {
            console.log("You tie! " + playerChoice + " is the same as " + cpuChoice);
        }
    
        // print out the current score
        console.log("Current Score: You: " + playerScore + " CPU: " + cpuScore);
    }

    for (let index = 0; index < 5; index++) {
        let computerChoice = getComputerChoice();
        let humanChoice = getHumanChoice();
        playRound(humanChoice, computerChoice);
    }

    console.log("FINAL SCORE! You: " + playerScore + " CPU: " + cpuScore);
}