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

let playerScore = 0;
let computerScore = 0;

function playGame(){
    const choice = document.querySelector("#choice");
    let playerChoiceTxt = document.createElement("span");
    let computerChoiceTxt = document.createElement("span");
    let result = document.createElement("span");

    const results = document.querySelector("#results");

    const score = document.querySelector("#score");
    let plrScore = document.createElement("p");
    let cptScore = document.createElement("p");

    const winner = document.querySelector("#winner");
    const winnerTxt = document.createElement("span");

    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {        
        button.addEventListener("click", () => {
            const playerChoice = button.id;
            const computerChoice = getComputerChoice();

            playerChoiceTxt.textContent = `Player choice: ${playerChoice}! `;
            computerChoiceTxt.textContent = `Computer choice: ${computerChoice}!`;
            choice.appendChild(playerChoiceTxt);
            choice.appendChild(computerChoiceTxt);            

            switch(playerChoice){
            case "rock":
                if(computerChoice === "rock"){
                    result.textContent = "Draw!";
                }else if(computerChoice === "paper"){
                    result.textContent = "You lose! Paper beats Rock";
                    computerScore++;
                }else{
                    result.textContent = "You win! Rock beats Scissors";
                    playerScore++;
                }
            break;
    
            case "paper":
                if(computerChoice === "rock"){
                    result.textContent = "You win! Paper beats Rock";
                    playerScore++;
                }else if(computerChoice === "paper"){
                    result.textContent = "Draw!";
                }else{
                    result.textContent = "You lose! Scissors beats Paper";
                    computerScore++;
                }
            break;
    
            case "scissors":
                if(computerChoice === "rock"){
                    result.textContent = "You lose! Rock beats Scissors";
                    computerScore++;
                }else if(computerChoice === "paper"){
                    result.textContent = "You win! Scissors beats Paper";
                    playerScore++;
                }else{
                    result.textContent = "Draw!";
                }
            break;
        }
        results.appendChild(result);
        plrScore.textContent = `\nPlayer score: ${playerScore}`;
        cptScore.textContent = `Computer score: ${computerScore}`;
        score.appendChild(plrScore);
        score.appendChild(cptScore);

        if(playerScore === 5){
            winnerTxt.textContent = "You WIN!";
            winner.appendChild(winnerTxt);
            score.removeChild(plrScore);
            score.removeChild(computerScore);
        }else if(computerScore === 5){
            winnerTxt.textContent = "Computer WINS!";
            winner.appendChild(winnerTxt);
            score.removeChild(plrScore);
            score.removeChild(cptScore);
        }
        });
    });    

    choice.removeChild(playerChoiceTxt);
    choice.removeChild(computerChoiceTxt);
    results.removeChild(result);    
}

playGame();
