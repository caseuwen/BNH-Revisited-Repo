// --- Playing Session Loop ---
let pickAnother = "yes"; // Overall session

while (pickAnother === "yes") {
  // Buttons remain visible, games called individually
  pickAnother = prompt("Would you like to pick another game to play? yes/no")?.toLowerCase() || "no";

  if (pickAnother !== "yes") {
    document.getElementById("farewell-message").innerHTML = `
      Thanks for playing!<br>
      <button onclick="location.reload()">Play Again</button>
    `;
  }
}

// --- 1. Guessing Game (Function Declaration) ---
function guessingGame() {
  let playAgain = "yes"; // Single Game loop

  while (playAgain === "yes") {
    const randomNum = Math.floor(Math.random() * 10) + 1;
    let guessCount = 0;
    let guess;

    while (true) {
      guess = prompt("Guess a number between 1 and 10.");
      if (guess === null) {
        alert("Invalid input, Press F5 to start again.");
        return;
      }
      guess = parseInt(guess);
      guessCount++;

      if (guess < randomNum) {
        alert("Your guess was too low, guess again.");
      } else if (guess > randomNum) {
        alert("Your guess was too high, guess again.");
      } else {
        alert("You guessed it in " + guessCount + " guesses!");
        break;
      }
    }

    playAgain = prompt("Would you like to keep playing this game? yes/no")?.toLowerCase() || "no";
  }
}

// --- 2. Magic Eight Ball (Function Expression) ---
const magicEightBall = function () {
  let playAgain = "yes";
  const responses = [
    "Absolutely yes!",
    "No way, not happening.",
    "Ask again later.",
    "The stars say yes.",
    "Don't count on it.",
    "It is certain.",
    "Very doubtful.",
    "Without a doubt."
  ];

  while (playAgain === "yes") {
    let question = prompt("Ask a yes/no question, or type 'stop' to quit:");
    if (!question || question.toLowerCase() === "stop") {
      alert("Thanks for playing Magic Eight Ball!");
      return;
    }

    const randomIndex = Math.floor(Math.random() * responses.length);
    alert(`Your question: ${question}\nMagic Eight Ball says: ${responses[randomIndex]}`);

    playAgain = prompt("Would you like to keep playing this game? yes/no")?.toLowerCase() || "no";
  }
};

// --- 3. Bear Ninja Hunter (Arrow Function) ---
const bearNinjaHunter = () => {
  const choices = ["Bear", "Ninja", "Hunter"];
  let playerWins = 0;
  let computerWins = 0;
  let playAgain = "yes";

  while (playAgain === "yes") {
    let playerChoice = prompt("Choose Bear, Ninja, or Hunter:")?.trim();
    if (!playerChoice || !choices.includes(playerChoice)) {
      alert("Invalid choice, try again.");
      continue;
    }

    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    let outcome = "";

    if (playerChoice === computerChoice) {
      outcome = "It's a tie!";
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

    alert(
      `You picked: ${playerChoice}\nComputer picked: ${computerChoice}\n${outcome}\n\nScore: Player ${playerWins} | Computer ${computerWins}`
    );

    playAgain = prompt("Would you like to keep playing this game? yes/no")?.toLowerCase() || "no";
  }
};
