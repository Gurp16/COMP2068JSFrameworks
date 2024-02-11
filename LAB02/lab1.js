const prompt = require('prompt');
console.log('Choose your option ROCK, PAPER, SCISSOR');

// Prompt the user to choose ROCK, PAPER, or SCISSOR
prompt.start();
prompt.get(['userSelection'], function (err, result) {
    if (err) { return onErr(err); }
    const userSelection = result.userSelection.toUpperCase(); // Convert to uppercase

    // Generate a random number for computerSelection
    const randomNum = Math.random();
    let computerSelection;
    if (randomNum <= 0.34) {
        computerSelection = 'PAPER';
    } else if (randomNum <= 0.67) {
        computerSelection = 'SCISSOR';
    } else {
        computerSelection = 'ROCK';
    }
     
   
    // Display userSelection and computerSelection
    console.log(`User Selection: ${userSelection}`);
    console.log(`Computer Selection: ${computerSelection}`);

    // Determine the winner
    let outcome;
    if (
        (userSelection === 'ROCK' && computerSelection === 'SCISSOR') ||
        (userSelection === 'PAPER' && computerSelection === 'ROCK') ||
        (userSelection === 'SCISSOR' && computerSelection === 'PAPER')
    ) {
        outcome = 'User Wins';
    } else if (
        (userSelection === 'SCISSOR' && computerSelection === 'ROCK') ||
        (userSelection === 'ROCK' && computerSelection === 'PAPER') ||
        (userSelection === 'PAPER' && computerSelection === 'SCISSOR')
    ) {
        outcome = 'Computer Wins';
    } else if(userSelection === computerSelection){
        outcome = "It's a tie";
    }
    else{
        outcome = "Invalid Input";
    }

    // Display the outcome
    console.log(outcome);
});

function onErr(err) {
    console.log(err);
    return 1;
}
