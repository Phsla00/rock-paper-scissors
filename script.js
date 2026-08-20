function getComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3);
    let computerChoice;

    if(randomNumber === 0){
        computerChoice = 'Rock';
    }else if(randomNumber === 1){
        computerChoice = 'Paper'
    }else {
        computerChoice = 'Scissors'
    }
    
    return computerChoice;
}

function getHumanChoice(){
    let humanChoice = +prompt("Escolha sua jogada: 1. Rock! 2. Paper! 3. Scissors!"); 
    if(humanChoice === 1){
        humanChoice = 'Rock';
    }else if(humanChoice === 2){
        humanChoice = 'Paper';
    }else{
        humanChoice = 'Scissors';
    }
    
    return humanChoice;
}
