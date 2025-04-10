let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    //Sortear um valor aleatorio e guardar em uma variavel
    let randomNumber = Math.floor(Math.random() * 3);
    //Variavel o valor de rock, paper ou scissors
    let computerPlay;
    //Se o numero sorteado for 0 variavel recebe = rock
    //Se o numero sorteado for 1 variavel recebe = paper
    //Se nao for nenhum deles variavel recebe = scissors
    if(randomNumber === 0){
        computerPlay = "rock";
    }else if(randomNumber === 1){
        computerPlay = "paper";
    }else {
        computerPlay = "scissors"
    }
    //Retornar a variavel
    return computerPlay;
}

function getHumanChoice(){
    //Pedir a escolha do jogador
    let humanPlay = prompt("Escolha sua jogada:\nRock 🪨\nPaper 📜\nScissors ✂️");
    //Retornar a escolha do jogador
    return humanPlay;
}

function playRound(humanChoice, computerChoice){
    //Cria uma variavel que coloca o parametro humanChoice em minusculo
    const hcLowerCase = humanChoice.toLowerCase();
    console.log(`Computer choice: ${computerChoice}!`);
    console.log(`Player choice: ${hcLowerCase}!`);
    //Caso humanChoice seja igual a "rock" compare com o valor de computerChoice
    //Se o humanChoice for igual a "paper" compare com o valor de computerChoice
    //Se o humanChoice for igual a "scissors" compare com o valor de computerChoice
    //Acrescenta um ponto para o vencedor
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

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
console.log(`\nPlayer score: ${humanScore}`);
console.log(`Computer score: ${computerScore}`);
