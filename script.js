function getComputerChoice(){
    //Sortear um valor aleatorio e guardar em uma variavel
    let randomNumber = Math.floor(Math.random() * 3);
    //Retornar essa variavel
    return randomNumber;
}

function getHumanChoice(){
    //Pedir a escolha do jogador
    let number = prompt("Escolha:\nRock = 0\nPaper = 1\nScissors = 2");
    //Retornar a escolha do jogador
    return number;
}
