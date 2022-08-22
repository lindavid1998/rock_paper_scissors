scores = {computer: 0, user: 0}

let buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', playRockPaperScissors))

function playRockPaperScissors(e) {

    let userAns = e.target.textContent;
    let compAns = getCompAns();

    winner = getWinner(compAns, userAns);

    updateScore(winner, scores);
    let compScore = document.querySelector('.computer-score');
    let userScore = document.querySelector('.user-score')
    let result = document.querySelector(`.result`)
    userScore.textContent = `You: ${scores.user}`
    compScore.textContent = `Computer: ${scores.computer}`
    result.textContent = `You chose ${userAns} while the computer chose ${compAns}. The result: ${winner}`

    if (scores.user >= 5 || scores.computer >= 5) {
        let para = document.createElement('p')
        let body = document.querySelector('body')

        if (scores.user > scores.computer) {
            para.textContent = 'Game over. You won!'
        } else {
            para.textContent = 'Game over. You lost.'
        }
        body.appendChild(para)

        buttons.forEach(button => button.removeEventListener('click', playRockPaperScissors))
    }
}
    
function getCompAns() {
    // generate random number from 1 to 3 and assign to randNum
    randNum = Math.floor(Math.random() * 3)

    // convert randNum to rock, paper, or scissors and return
    if (randNum === 0) return 'Paper'
    if (randNum === 1) return 'Scissors'
    if (randNum === 2) return 'Rock'
}

function getWinner(comp, user) {
    // returns null if tie, otherwise returns string of winner ('computer' or 'user')
    if (comp === user) {
        return 'Tie'
    }

    switch (true) {
        case (comp === 'Rock' && user === 'Paper'):
        case (comp === 'Paper' && user === 'Scissors'):
        case (comp === 'Scissors' && user === 'Rock'):
            return 'User wins!'
    }

    return 'Computer wins!'
}

function updateScore(winner, scores) {
    if (winner === 'Computer wins!') {
        scores.computer++;
    } else if (winner === 'User wins!') {
        scores.user++;
    }
}