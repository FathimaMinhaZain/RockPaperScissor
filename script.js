function getComputerChoice() {
    let n = Math.random();

    let comChoice = ''
    if (n < 0.3) {
        comChoice = 'rock'
    } else if (n < 0.6) {
        comChoice = 'paper';
    } else {
        comChoice = 'scissor';
    }

    console.log('computer: ' + comChoice);
    return comChoice;
}

let i = 0;
let humanScore = 0;
let computaScore = 0;

const div = document.getElementById('score')
const content = document.createElement('div')


function playRound(me) {
    i++;
    let human = me;
    console.log('me: ' + human);
    let computa = getComputerChoice();
    if (i <= 5)
        playGame(human, computa)
    else {
        w=winner()
        const win = document.createElement('div')
        win.textContent = w + ' won';
        div.appendChild(win);
    }

    content.textContent = 'HumanScore: ' + humanScore + ' ComputaScore: ' + computaScore;
    div.appendChild(content);

}


function playGame(h, c) {

    if (c == h) {
        console.log('draw');
    } else if (c == 'rock') {
        if (h == 'paper') {
            humanScore++;
            console.log('You win, Paper covers Rock');
        } else if (h == 'scissor') {
            computaScore++;
            console.log('You loose, Rock smashes Scissor');
        }
    } else if (c == 'paper') {
        if (h == 'rock') {
            computaScore++;
            console.log('You loose, Paper covers Rock');
        } else if (h == 'scissor') {
            humanScore++;
            console.log('You win, Scissor cuts Paper');
        }
    } else if (c == 'scissor') {
        if (h == 'rock') {
            humanScore++;
            console.log('You win, Rock smashes Scissor');
        } else if (h == 'paper') {
            computaScore++;
            console.log('You loose, Scissor cuts Paper');
        }
    }

}


function winner() {
    if (humanScore > computaScore) {
        return 'you'
    } else if (computaScore > humanScore) {
        return 'computa'
    } else {
        return 'draw'
    }
    
}





