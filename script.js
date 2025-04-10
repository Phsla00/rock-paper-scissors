function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3);
    let computerPlay;

    if(randomNumber === 0){
        computerPlay = "rock";
    }else if(randomNumber === 1){
        computerPlay = "paper";
    }else {
        computerPlay = "scissors"
    }
    return computerPlay;
}

function getHumanChoice(){
    let humanPlay = prompt("Escolha sua jogada:\nRock 🪨\nPaper 📜\nScissors ✂️");
    return humanPlay;
}



function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice){
        const hcLowerCase = humanChoice.toLowerCase();
        console.log(`\nComputer choice: ${computerChoice}!`);
        console.log(`Player choice: ${hcLowerCase}!`);

        switch(hcLowerCase){
            case "rock":
                if(computerChoice === "rock"){
                    console.log("Draw!");
                }else if(computerChoice === "paper"){
                    console.log("You lose! Paper beats Rock");
                    computerScore++;
                }else{
                    console.log("You win! Rock beats Scissors");
                    humanScore++;
                }
            break;
    
            case "paper":
                if(computerChoice === "rock"){
                    console.log("You win! Paper beats Rock");
                    humanScore++;
                }else if(computerChoice === "paper"){
                    console.log("Draw!");
                }else{
                    console.log("You lose! Scissors beats Paper");
                    computerScore++;
                }
            break;
    
            case "scissors":
                if(computerChoice === "rock"){
                    console.log("You lose! Rock beats Scissors");
                    computerScore++;
                }else if(computerChoice === "paper"){
                    console.log("You win! Scissors beats Paper");
                    humanScore++;
                }else{
                    console.log("Draw!");
                }
            break;
        }
    }

    for(let i = 0; i < 5; i++){
        playRound(getHumanChoice(), getComputerChoice());
        console.log(`\nPlayer score: ${humanScore}`);
        console.log(`Computer score: ${computerScore}`);
    }

    if(humanScore > computerScore){
        console.log("You WIN!");
    }else if(computerScore > humanScore){
        console.log("Computer WINS!");
    }else{
        console.log("DRAW!");
    }
}

playGame();
