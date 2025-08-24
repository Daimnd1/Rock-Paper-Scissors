function getComputerChoice(){
  let choice = Math.floor(Math.random() * 3);
  switch (choice){
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

function getHumanChoice() {
  let choice;
  do{
    choice = prompt("Choose: rock/paper/scissors").toLowerCase();
  } while (choice !== "rock" && choice !== "paper" && choice !== "scissors" && choice !== null);
  return choice;
}

function playRound(computerChoice, humanChoice){
  if (humanChoice === "rock" && computerChoice === "rock"){
    console.log("TIE: Rock ties with rock.")
  }
  else if (humanChoice === "rock" && computerChoice === "paper"){
    console.log("YOU LOSE!: Rock loses against paper.")
    computerScore++;
  }
  else if (humanChoice === "rock" && computerChoice === "scissors"){
    console.log("YOU WIN!: Rock wins against scissors.")
    humanScore++;
  }
  else if (humanChoice === "paper" && computerChoice === "rock"){
    console.log("YOU WIN!: Paper wins against rock.")
    humanScore++;
  }
  else if (humanChoice === "paper" && computerChoice === "paper"){
    console.log("TIE: Paper ties with paper.")
  }
  else if (humanChoice === "paper" && computerChoice === "scissors"){
    console.log("YOU LOSE: Paper loses against scissors.")
    computerScore++;
  }
  else if (humanChoice === "scissors" && computerChoice === "rock"){
    console.log("YOU LOSE: Scissors loses against rock.")
    computerScore++;
  }
  else if (humanChoice === "scissors" && computerChoice === "paper"){
    console.log("YOU WIN: Scissors wins against paper.")
    humanScore++;
  }
  else if (humanChoice === "scissors" && computerChoice === "scissors"){
    console.log("TIE: Scissors ties with scissors.")
  }
  console.log(`Your score: ${humanScore}
Computer's score: ${computerScore}`)
  // playAgain = prompt("Play again? [y/n]");
  // if (playAgain === 'y') playRound(getComputerChoice(), getHumanChoice());
}

function playGame(){
  for (let i = 0; i < 5; i++){
    playRound(getComputerChoice(), getHumanChoice());
  }
  if (humanScore > computerScore){
    alert("ʸᵒᵘ ʷᵒⁿ")
  }
  else if (humanScore < computerScore){
    alert("YOU LOST!!! WAHAHAHAHHA")
  }
  else {
    alert("NO ONE WINS!!! ...boring")
  }
  humanScore = 0;
  computerScore = 0;
}

let humanScore = 0;
let computerScore = 0;

playGame();

