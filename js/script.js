// Store game options in an array
const choices = ["Bear", "Ninja", "Hunter"];

// Track total wins
let playerWins = 0;
let computerWins = 0;

// Function to play game when user clicks a button
function playGame(playerChoice) {
  // Randomize computer choice
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  // Determine outcome
  let outcome = "";
  if (playerChoice === computerChoice) {
    outcome = "It's a tie.";
  } else if (
    (playerChoice === "Bear" && computerChoice === "Ninja") ||
    (playerChoice === "Ninja" && computerChoice === "Hunter") ||
    (playerChoice === "Hunter" && computerChoice === "Bear")
  ) {
    outcome = "You win!";
    playerWins++;
  } else {
    outcome = "You lose!";
    computerWins++;
  }

  // Display results
  document.getElementById("results").innerHTML = `
    You picked <strong>${playerChoice}</strong>.<br>
    The computer picked <strong>${computerChoice}</strong>.<br>
    <br>
    ${outcome}
  `;

  // Display scoreboard
  document.getElementById("scoreboard").innerHTML = `
    Player Wins: ${playerWins} | Computer Wins: ${computerWins}
  `;

  // Show Play Again button
  document.getElementById("playAgainContainer").style.display = "block";
}

// Reset game display but keep scores
function resetGame() {
  document.getElementById("results").innerHTML = "";
  document.getElementById("scoreboard").innerHTML = "";
  document.getElementById("playAgainContainer").style.display = "none";
}
