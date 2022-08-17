function playRockPaperScissors() {

    // initialize score
    scores = {
        computer: 0,
        user: 0
    }

    isPlaying = true;
    // while user wants to play
    while (isPlaying) {
        // Ask computer to choose rock, paper, or scissors and store in variable compAns
        compAns = getCompAns();

        // Ask user to choose rock, paper, or scissors and store in variable userAns
        userAns = getUserAns();

        // Print results to console
        console.log(`The computer chose: ${compAns}`)
        console.log(`You chose: ${userAns}`)

        // Find winner and store in variable winner
        winner = getWinner(compAns, userAns);

        // Update score
        updateScore(winner, scores);

        // Show score
        console.log(`Score: Computer ${scores.computer} - User ${scores.user}`)

        // Ask user if they want to continue playing and store in variable 
    }
}

function getCompAns() {
    // generate random number from 1 to 3 and assign to randNum
    randNum = Math.floor(Math.random() * 3)

    // if 0, return 'p'
    if (randNum === 0) return 'p'
    // if 1, return 's'
    if (randNum === 1) return 's'
    // if 2, return 'r'
    if (randNum === 2) return 'r'

}

function getUserAns() {
    return prompt('Choose between r, p, or s').toLowerCase()
}

function updateScore(winner, scores) {
    switch (winner) {
        case 'computer':
            scores.computer++;
            break;
        case 'user':
            scores.user++;
            break;
    }
}

function getWinner(comp, user) {
    // returns null if tie, otherwise returns string of winner ('computer' or 'user')
    if (comp === user) {
        console.log(`It's a tie`)
        return null
    }

    //  User wins under the following scenarios:
    // Comp: r -> User: p
    // Comp: p -> User: s
    // Comp: s -> User: r
    switch (true) {
        case (comp === 'r' && user === 'p'):
        case (comp === 'p' && user === 's'):
        case (comp === 's' && user === 'r'):
            console.log('You win!')
            return 'user'
    }

    console.log('You lost.')
    return 'computer'
}

playRockPaperScissors();