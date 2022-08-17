function playRockPaperScissors() {

    // initialize score
    scores = {
        computer: 0,
        user: 0
    }

    isPlaying = True;
    // while user wants to play
    while (isPlaying) {
        // Ask computer to choose rock, paper, or scissors and store in variable compAns
        compAns = getCompAns();

        // Ask user to choose rock, paper, or scissors and store in variable userAns
        userAns = getUserAns();

        // Find winner and store in variable winner
        winner = getWinner(compAns, userAns);

        // Update score
        updateScore(winner, scores);

        // Show score
        console.log(`Score: Computer ${scores.computer} - User ${scores.user}`)

        // Ask user if they want to continue playing and store in variable 
    }
}

function getUserAns() {
    return prompt('Choose between R, P, or S').toLowerCase()
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