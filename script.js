function getComputerChoice(){
    // Create an array with all 3 possible results
    const computerChoices = ["rock", "paper", "scissors"];

    // Randomly choose a number betweeen 1 and 3
    let randomChoice = Math.floor(Math.random() * 3);

    // Get the value from the array at the index of the random number
    let rpsAction = computerChoices[randomChoice];

    // Return the chosen value
    console.log(rpsAction);
}