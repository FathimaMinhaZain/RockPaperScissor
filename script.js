function getComputerChoice(){
    let n = Math.random();

    if (n<0.3){
        console.log('Rock');
    } else if (n<0.6){
        console.log('Paper');        
    } else{
        console.log('Scissor');        
    }
}

getComputerChoice();
