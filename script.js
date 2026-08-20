function getComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3);
    let computerChoice;

    if(randomNumber === 0){
        computerChoice = 'rock';
    }else if(randomNumber === 1){
        computerChoice = 'paper'
    }else {
        computerChoice = 'scissors'
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


function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    
    function playRound(humanChoice, computerChoice){
        let humanChoiceLow = humanChoice.toLowerCase();
        
        if(humanChoiceLow === computerChoice){
            console.log(`It's a tie! You both chose ${humanChoice}`)
        }
        
        if( humanChoiceLow === 'rock'){
            if(computerChoice === 'paper'){
                console.log('You lose! Paper beats Rock.');
                computerScore += 1;
            }else if(computerChoice === 'scissors'){
                console.log('You win! Rock beats Scissors.');
                humanScore += 1;
            }    
        }else if(humanChoiceLow === 'paper'){
            if(computerChoice === 'rock'){
                console.log('You win! Paper beats Rock.');
                humanScore += 1;
            }else if(computerChoice === 'scissors'){
                console.log('You lose! Scissors beats Paper');
                computerScore += 1;
            }
        }else if(humanChoiceLow === 'scissors'){
            if(computerChoice === 'rock'){
                console.log('You lose! Rock beats Scissors.');
                computerScore += 1;
            } else if(computerChoice === 'paper'){
                console.log('You win! Scissors beats Paper.');
                humanScore += 1;
            }
        }
    }

    function showWinner(){
        if(humanScore > computerScore){
            console.log(`You win the match! ${humanScore} X ${computerScore}.`);
        }else if(humanScore < computerScore){
            console.log(`You lose the match! ${humanScore} X ${computerScore}`);
        }else{
            console.log('It\'s a tie!');
        }
    }

    for(i = 0; i < 5; i++){
        playRound(getHumanChoice(), getComputerChoice());
    }
    
    showWinner()
}

playGame();
