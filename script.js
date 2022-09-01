function playRound(playerSelection, computerSelection) {
    // your code here!
    if (playerSelection  == "Rock" && computerSelection == "Scissors"){

        console.log("You won, your selection has been Rock and the CPU Scissors") ;
        wonByUser++

    }else if (playerSelection  == "Paper" && computerSelection == "Rock"){

        console.log("You won, your selection has been Paper and the CPU Rock");
        wonByUser++

    }else if (playerSelection  == "Scissors" && computerSelection == "Paper"){

        console.log("You won, your selection has been Scissors and the CPU Paper");
        wonByUser++

    }else if (playerSelection  == computerSelection ){

        console.log(`You have drown both of you have selected ${playerSelection}`);

    }else{

        console.log(`You lost the CPU has choosen ${computerSelection} and you ${playerSelection} `);
        wonByCpu++;
    }
  }
   
  let wonByUser = 0;
  let wonByCpu = 0


  function getComputerChoice(){
    let randomNumb = Math.floor(Math.random() * (3 - 1 + 1) + 1);
    let symbolToReturn = "";
    if(randomNumb == 1){

        return symbolToReturn = "Rock";

    }else if(randomNumb == 2){

        return symbolToReturn = "Paper";

    }else{

        return symbolToReturn = "Scissors";

    }


  }

  

  const hoWmanyPlays = prompt("Introduce how many times do you want to play")

  for(let i = 0; i < hoWmanyPlays; i++){

    const playerSelection = prompt("Select Rock, Paper o Scissorss ");
    const computerSelection = getComputerChoice();
  
    console.log(playRound(playerSelection, computerSelection));
  }
 

 

  console.table({Usuario:wonByUser, Maquina: wonByCpu});