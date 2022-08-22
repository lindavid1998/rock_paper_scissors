scores = {computer: 0, user: 0}

let buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', playRockPaperScissors))

function playRockPaperScissors(e) {

    let userAns = e.target.textContent;
    let compAns = getCompAns();

    winner = getWinner(compAns, userAns);

    updateScore(winner, scores);
    let score = document.querySelector('.score');
    let result = document.querySelector(`.result`)
    let description = document.querySelector(`.description`)
    score.textContent = `You: ${scores.user} - Computer: ${scores.computer}`
    result.textContent = `${winner}`
    description.textContent = `You chose ${userAns} while the computer chose ${compAns}.`

    if (scores.user >= 5 || scores.computer >= 5) {
        let h1 = document.createElement('h1')
        let container = document.querySelector('.container')

        if (scores.user > scores.computer) {
            h1.textContent = 'Game over. You won!'
        } else {
            h1.textContent = 'Game over. You lost.'
        }
        container.appendChild(h1)

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