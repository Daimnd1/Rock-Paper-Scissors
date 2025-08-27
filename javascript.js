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
    h1RoundResult.textContent = 'TIE: Rock ties with rock.';
    console.log("TIE: Rock ties with rock.")
  }
  else if (humanChoice === "rock" && computerChoice === "paper"){
    h1RoundResult.textContent = 'YOU LOSE!: Rock loses against paper.';
    console.log("YOU LOSE!: Rock loses against paper.")
    computerScore++;
  }
  else if (humanChoice === "rock" && computerChoice === "scissors"){
    h1RoundResult.textContent = 'YOU WIN!: Rock wins against scissors.';
    console.log("YOU WIN!: Rock wins against scissors.")
    humanScore++;
  }
  else if (humanChoice === "paper" && computerChoice === "rock"){
    h1RoundResult.textContent = 'YOU WIN!: Paper wins against rock.';
    console.log("YOU WIN!: Paper wins against rock.")
    humanScore++;
  }
  else if (humanChoice === "paper" && computerChoice === "paper"){
    h1RoundResult.textContent = 'TIE: Paper ties with paper.';
    console.log("TIE: Paper ties with paper.")
  }
  else if (humanChoice === "paper" && computerChoice === "scissors"){
    h1RoundResult.textContent = 'YOU LOSE: Paper loses against scissors.';
    console.log("YOU LOSE: Paper loses against scissors.")
    computerScore++;
  }
  else if (humanChoice === "scissors" && computerChoice === "rock"){
    h1RoundResult.textContent = 'YOU LOSE: Scissors loses against rock.';
    console.log("YOU LOSE: Scissors loses against rock.")
    computerScore++;
  }
  else if (humanChoice === "scissors" && computerChoice === "paper"){
    h1RoundResult.textContent = 'YOU WIN: Scissors wins against paper.';
    console.log("YOU WIN: Scissors wins against paper.")
    humanScore++;
  }
  else if (humanChoice === "scissors" && computerChoice === "scissors"){
    h1RoundResult.textContent = 'TIE: Scissors ties with scissors.';
    console.log("TIE: Scissors ties with scissors.")
  }
  console.log(`Your score: ${humanScore}
Computer's score: ${computerScore}`)
  updateScore();
}

function updateScore(){
  textHumanScore.textContent = `${humanScore}`;
  textComputerScore.textContent = `${computerScore}`;
  if (humanScore === 5) {
    alert("ʸᵒᵘ ʷᵒⁿ");
    humanScore = 0;
    computerScore = 0;
    humanGames++;
    h4HumanGames.textContent = `${humanGames}`;
    h1RoundResult.textContent = `Play again - choose`;
  }
  else if (computerScore === 5){
    alert("YOU LOST!!! WAHAHAHAHHA");
    humanScore = 0;
    computerScore = 0;
    computerGames++;
    h4ComputerGames.textContent = `${computerGames}`;
    h1RoundResult.textContent = `Play again - choose`;
  }
}

const body = document.querySelector("body");

const buttonRock = document.createElement("button");
const buttonPaper = document.createElement("button");
const buttonScissors = document.createElement("button");
const divButtons = document.createElement("div");

const divScores = document.createElement("div");
const h1RoundResult = document.createElement('h1');
const divHuman = document.createElement("div"); 
const divComputer = document.createElement("div"); 
const h2Human = document.createElement("h2");
const h2Computer = document.createElement("h2");
const textHumanScore = document.createTextNode("0");
const h4HumanGames = document.createElement("h4");
const textComputerScore = document.createTextNode("0");
const h4ComputerGames = document.createElement("h4");

buttonRock.textContent = "Rock";
buttonPaper.textContent = "Paper";
buttonScissors.textContent = "Scissors";

divButtons.appendChild(buttonRock);
divButtons.appendChild(buttonPaper);
divButtons.appendChild(buttonScissors);

divButtons.style.cssText = "display: flex; gap: 2rem";

divScores.style.cssText = "display: flex; gap: 1rem;";

h1RoundResult.textContent = "Play - Choose";
h2Human.textContent = "Human Score:";
h2Computer.textContent = "Computer Score:";
h4HumanGames.textContent = '0';
h4ComputerGames.textContent = '0';

divScores.appendChild(divHuman);
divScores.appendChild(divComputer);

divHuman.appendChild(h2Human);
divHuman.appendChild(textHumanScore);
divHuman.appendChild(h4HumanGames);

divComputer.appendChild(h2Computer);
divComputer.appendChild(textComputerScore);
divComputer.appendChild(h4ComputerGames);

body.style.cssText = `display: flex; 
flex-flow: column; 
justify-content: center; 
align-items: center; 
gap: 50px; 
padding: 100px;`;
body.appendChild(divButtons);
body.appendChild(h1RoundResult);
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

let humanGames = 0;
let computerGames = 0;