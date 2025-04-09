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
        computerPlay = "Rock";
    }else if(randomNumber === 1){
        computerPlay = "Paper";
    }else {
        computerPlay = "Scissors"
    }
    //Retornar a variavel
    return computerPlay;
}

function getHumanChoice(){
    //Pedir a escolha do jogador
    let number = prompt("Escolha:\nRock = 0\nPaper = 1\nScissors = 2");
    //Retornar a escolha do jogador
    return number;
}

