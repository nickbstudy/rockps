function computerPlay() {
    let choice = Math.floor(Math.random()*3);
    if (choice == 1) {
        return "Rock"
    } else if (choice == 2) {
        return "Paper"
    } else {
        return "Scissors"
    }
}

function playRound(playerSel, computerSel) {
    
    let playerLow = playerSel.toLowerCase()
    
    let compLow = computerSel.toLowerCase()

    if (playerLow == 'rock') {
        if (compLow == 'scissors') {
            return "Player wins, with Rock beating Scissors"
        } else if (compLow == 'rock') {
            return "Tie with Rock"
        } else return "Computer wins, with Paper beating Rock"
    } else if (playerLow == 'paper') {
        if (compLow == 'rock') {
            return 'Player wins, with Paper beating Rock'
        } else if (compLow == 'paper') {
            return 'Tie with Paper'
        } else return 'Computer wins, with Scissors beating Paper'
    } else {
        if (compLow == 'paper') {
            return 'Player wins, with Scissors beating Paper'
        } else if (compLow == 'scissors') {
            return 'Tie with Scissors'
        } else return 'Computer wins, with Rock beating Scissors'
    }

}

function didCompWin(playerSel, computerSel) {
    
    let playerLow = playerSel.toLowerCase()
    let compLow = computerSel.toLowerCase()

    if (playerLow == 'rock') {
        if (compLow == 'scissors') {
            return 0
        } else if (compLow == 'rock') {
            return 2
        } else return 1
    } else if (playerLow == 'paper') {
        if (compLow == 'rock') {
            return 0
        } else if (compLow == 'paper') {
            return 2
        } else return 1
    } else {
        if (compLow == 'paper') {
            return 0
        } else if (compLow == 'scissors') {
            return 2
        } else return 1
    }

}


const writeHere = document.querySelector('#events');
const scores = document.querySelector('#scores')
let outcomeText = "";
let playerScore = 0;
let compScore = 0;
let winner = 0;

function processClick(e) {
    let compChoice = computerPlay();
    switch(e.target.id) {
        case 'rock':
            outcomeText += `\r\n${playRound(e.target.id, compChoice)}`
            winner = didCompWin(e.target.id, compChoice);
            if (winner == 0) {
                playerScore++;
            } else if (winner == 1) {
                compScore++;
            }
            break;
        case 'paper':
            outcomeText += `\r\n${playRound(e.target.id, compChoice)}`
            winner = didCompWin(e.target.id, compChoice);
            if (winner == 0) {
                playerScore++;
            } else if (winner == 1) {
                compScore++;
            }
            break;
        case 'scissors':
            outcomeText += `\r\n${playRound(e.target.id, compChoice)}`
            winner = didCompWin(e.target.id, compChoice);
            if (winner == 0) {
                playerScore++;
            } else if (winner == 1) {
                compScore++;
            }
            break;
        
    }
    writeHere.textContent = outcomeText
    scores.textContent = `Player: ${playerScore}  -  Site: ${compScore}`
    if (playerScore == 5 || compScore == 5) {
        document.removeEventListener('click', processClick);
        (playerScore == 5) ? alert("You win!") : alert("You lose.");
        
    }
}

document.addEventListener('click', processClick);