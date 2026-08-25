function getComputerChoice(){
    let n = Math.random();

    let comChoice = ''
    if (n<0.3){
        comChoice = 'rock'
    } else if (n<0.6){
        comChoice ='paper';        
    } else{
        comChoice = 'scissor';        
    }

    console.log('computer: ' + comChoice);
    return comChoice;
}

function getHumanChoice(){
    let humChoice = prompt('rock/paper/scissor:');
    console.log('your choice: ' + humChoice);
    return humChoice;
}

function playRound(comp, human){
    let c = comp;
    let h = human.toLowerCase();

    if(c==h){
        console.log('draw');
    } else if (c=='rock'){
        if (h=='paper'){
            humanScore++;
            console.log('You win, Paper covers Rock');
        } else if (h=='scissor'){
            computaScore++;
            console.log('You loose, Rock smashes Scissor');
        }
    } else if (c=='paper'){
        if (h=='rock'){
            computaScore++;
            console.log('You loose, Paper covers Rock');
        } else if (h=='scissor'){
            humanScore++;
            console.log('You win, Scissor cuts Paper');
        }
    } else if (c=='scissor'){
        if (h=='rock'){
            humanScore++;
            console.log('You win, Rock smashes Scissor');
        } else if (h=='paper'){
            computaScore++;
            console.log('You loose, Scissor cuts Paper');
        }
    }

    // console.log('your score: '+ humanScore + ' computer score: ' + computaScore);
}

function playGame(){
    let i=0;
    for (i=0;i<5;i++){
        let comp = getComputerChoice();
        let human = getHumanChoice();

        playRound(comp, human);
    }

}

let humanScore = 0;
let computaScore = 0;

playGame();
if (humanScore > computaScore){
        console.log('you win! ' + 'your score: '+ humanScore + ' computer score: ' + computaScore )
} else if (computaScore > humanScore){
        console.log('you loose! ' + 'your score: '+ humanScore + ' computer score: ' + computaScore )
} else {
        console.log('draw!' + 'your score: '+ humanScore + ' computer score: ' + computaScore )
}


