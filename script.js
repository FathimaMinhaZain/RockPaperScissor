function getComputerChoice(){
    let n = Math.random();

    if (n<0.3){
        console.log('rock');
    } else if (n<0.6){
        console.log('paper');        
    } else{
        console.log('scissor');        
    }
}

function getHumanChoice(){
    let input = prompt('rock/paper/scissor:');
    console.log(input);
}

getHumanChoice();