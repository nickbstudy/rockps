let message = "Rock, Paper, or Scissors?"

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

function getInput() {

        //check if player entered a valid choice
    // if (playerChoice.toLowerCase() == "rock") {
    //     message = "Rock, Paper, or Scissors?"
    //     console.log('made it to rock')
    //     return 'rock'
    // } else if (playerChoice.toLowerCase() == "scissors") {
    //     message = "Rock, Paper, or Scissors?"
    //     console.log('made it to sci')
    //     return 'scissors'
    // } else if (playerChoice.toLowerCase() == "paper") {
    //     message = "Rock, Paper, or Scissors?"
    //     console.log('made it to pap')
    //     return 'paper'
    // }  else {
    //     message = "You have entered an invalid choice, try again - rock paper or scissors"
    //     getInput()
    // }


    // get players input
    let inp = prompt("Enter your choice - R for Rock, P for Paper, or S for Scissors")
    inp = inp.toLowerCase()
    // check if it's R P or S
    while(inp != 'r' && inp != 'p' && inp != 's') {
        inp = prompt("Try again - r p or s")
    }

    if (inp == "r") {
        return 'rock'
    } else if (inp == "p") {
        return 'paper'
    } else if (inp == "s") {
        return 'scissors'
    }



    // if it's none then keep checking with a different message
    

}

function game() {

    let playerScore = 0
    let compScore = 0
    
    for (let i = 0; i < 5; i++) {
         {
            let playersItem = getInput()
            let compsItem = computerPlay()
            console.log(`player has ${playersItem} to the pc ${compsItem}`)
            
            //print result
            console.log(playRound(playersItem, compsItem))

            //update scores
            let comp = didCompWin(playersItem, compsItem)
            if (comp == 1) {
                compScore++
            } else if (comp == 0) playerScore++

            console.log(`Scores are: player ${playerScore} - pc ${compScore}`)
        }

        
    }
}

game()