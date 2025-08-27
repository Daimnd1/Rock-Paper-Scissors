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
  updateScore();
}

function updateScore(){
  textHumanScore.textContent = `${humanScore}`;
  textComputerScore.textContent = `${computerScore}`;
}

const body = document.querySelector("body");

const buttonRock = document.createElement("button");
const buttonPaper = document.createElement("button");
const buttonScissors = document.createElement("button");
const divButtons = document.createElement("div");

const divScores = document.createElement("div");
const divHuman = document.createElement("div"); 
const divComputer = document.createElement("div"); 
const h2Human = document.createElement("h2");
const h2Computer = document.createElement("h2");
const textHumanScore = document.createTextNode("0");
const textComputerScore = document.createTextNode("0");

buttonRock.textContent = "Rock";
buttonPaper.textContent = "Paper";
buttonScissors.textContent = "Scissors";

divButtons.appendChild(buttonRock);
divButtons.appendChild(buttonPaper);
divButtons.appendChild(buttonScissors);

divButtons.style.cssText = "display: flex; gap: 2rem";

divScores.style.cssText = "display: flex; gap: 1rem;";

h2Human.textContent = "Human Score:";
h2Computer.textContent = "Computer Score:";

divScores.appendChild(divHuman);
divScores.appendChild(divComputer);

divHuman.appendChild(h2Human);
divHuman.appendChild(textHumanScore);

divComputer.appendChild(h2Computer);
divComputer.appendChild(textComputerScore);

body.style.cssText = `display: flex; 
flex-flow: column; 
justify-content: center; 
align-items: center; 
gap: 50px; 
padding: 100px;`;
body.appendChild(divButtons);
body.appendChild(divScores);

const buttons = [buttonRock, buttonPaper, buttonScissors];

buttons.forEach((btn) => {
  btn.style.cssText = `background-color: rgba(51, 51, 51, 0.05);
  border-radius: 8px;
  border-width: 0;
  color: #333333;
  cursor: pointer;
  display: inline-block;
  font-family: "Haas Grot Text R Web", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 44px;
  font-weight: 500;
  line-height: 20px;
  list-style: none;
  margin: 0;
  padding: 20px 32px;
  text-align: center;
  transition: all 200ms;
  vertical-align: baseline;
  white-space: nowrap;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
`;

  btn.addEventListener("click", (e) => playRound(getComputerChoice(), e.target.textContent.toLowerCase()));
})

let humanScore = 0;
let computerScore = 0;