function playRound(playerSelection, computerSelection) {
    // your code here!
    if (playerSelection  == "Piedra" && computerSelection == "Tijera"){

        console.log("Has ganado, has seleccionado Piedra y la máquina Tijera") ;
        wonByUser++

    }else if (playerSelection  == "Papel" && computerSelection == "Piedra"){

        console.log("Has ganado, has seleccionado Papel y la máquina Piedra");
        wonByUser++

    }else if (playerSelection  == "Tijera" && computerSelection == "Papel"){

        console.log("Has ganado, has seleccionado Tijera y la máquina Papel");
        wonByUser++

    }else if (playerSelection  == computerSelection ){

        console.log(`Habéis empatado la selección ha sido de ${playerSelection}`);

    }else{

        console.log(`Has perdido La máquina ha seleccionado ${computerSelection} y tu ${playerSelection} `);
        wonByCpu++;
    }
  }
   
  let wonByUser = 0;
  let wonByCpu = 0


  function getComputerChoice(){
    let randomNumb = Math.floor(Math.random() * (3 - 1 + 1) + 1);
    let symbolToReturn = "";
    if(randomNumb == 1){

        return symbolToReturn = "Piedra";

    }else if(randomNumb == 2){

        return symbolToReturn = "Papel";

    }else{

        return symbolToReturn = "Tijera";

    }


  }

  

  const hoWmanyPlays = prompt("Introduce how many times do you want to play")

  for(let i = 0; i < hoWmanyPlays; i++){

    const playerSelection = prompt("Selecciona Piedra, papel o tijeras ");
    const computerSelection = getComputerChoice();
  
    console.log(playRound(playerSelection, computerSelection));
  }
 

 

  console.table({Usuario:wonByUser, Maquina: wonByCpu});