// declare player and cpu score variables
let playerScore = 0;
let cpuScore = 0;

function getComputerChoice(){
    // Create an array with all 3 possible results
    const computerChoices = ["rock", "paper", "scissors"];

    // Randomly choose a number betweeen 1 and 3
    let randomChoice = Math.floor(Math.random() * 3);

    // Get the value from the array at the index of the random number
    let rpsAction = computerChoices[randomChoice];

    // Return the chosen value
    return rpsAction;
}

function getHumanChoice(){
    // Prompt the user for their option and save it to a variable
    let humanChoice = prompt("Rock, Paper, or Scissors?");

    // Re-prompt the user if they provide an invalid input
    while (humanChoice != "rock" && humanChoice != "paper" && humanChoice != "scissors"){
        humanChoice = prompt("Rock, Paper, or Scissors?");
    }

    // Return valid input
    return humanChoice;
}

function playRound(playerChoice, cpuChoice){
    
}