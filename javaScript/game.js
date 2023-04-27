function computerPlay(){
  const computerSelection= Math.floor(Math.random()*3);
  switch(computerSelection){
    case 0:
        return "rock";
        break;
    case 1:
        return "paper";
        break;
    case 2:
        return "scissors";
        break;
  }
}
function playerSelectionPrompt(roundNumber){
    let playerInputOkFlag=false,
    playerInput;
    do{
        playerInput=prompt(`Round #${roundNumber+1}: type in your selection(rock,paper,scissors)`);
        playerInput=playerInput.toLocaleLowerCase();
        switch(playerInput){
            case "rock":
            case "paper":
            case "scissors":
                playerInputOkFlag=true;
        }
        if(!playerInputOkFlag){
            alert("please enter a valid input")
        }
    }while(!playerInputOkFlag)
    return playerInput;
}  

function playround(roundNumber){
    const computerSelection=computerPlay();
    const playerSelection=playerSelectionPrompt(roundNumber);
    let outcome = comperSelections(playerSelection,computerSelection);
    if(outcome==="draw"){
        alert(`its a draw! you both picked ${computerSelection}`)
    }else{
        alert(`You ${outcome}! ${outcome==="win"?playerSelection:computerSelection} beats ${outcome==="lose"?playerSelection:computerSelection}`)
    }
    return outcome;

} 

function comperSelections(playerSelection,computerSelection){
    if(playerSelection===computerSelection){
        return "draw"
    }else{
        switch (playerSelection){
            case "rock":
                if(computerSelection==="paper"){
                    return "lose";
                }else{
                    return "win";
                }
                break;
            case "scissors":
                if(computerSelection==="paper"){
                    return "win";
                }else{
                    return "lose";
                }
                break;
            case "paper":
                if(computerSelection==="scissors"){
                    return "lose";
                }else{
                    return "win";
                }
            break;
        }
    }
}

function game(){
    const score={
        player:0,
        computer:0
    }
    for(let i=0; i<5; i++){
        const outcome=playround(i);
        if(outcome==="win"){
            score.player++;
        }
        else if(outcome==="lose"){
            score.computer++;
        }

    }
    alert(`game finished you score is player:${score.player} computer:${score.computer}`)
}

game();