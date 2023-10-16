let userScore = 0;
let computerScore = 0;

const userScore_span = document.getElementById("score0");
const computerScore_span = document.getElementById("score2");
const result_p = document.getElementById("result");

const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");
const playAgain_div = document.getElementById("play-again");


function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${userChoice} beats ${computerChoice}. You win! 🔥`;
}

function lose(userChoice, computerChoice) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${computerChoice} beats ${userChoice}. You lose! 💩`;
}

function draw(userChoice, computerChoice) {
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${userChoice} equals ${computerChoice}. It's a draw! 🙃`;
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            win(userChoice, computerChoice);
            break;
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            lose(userChoice, computerChoice);
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            draw(userChoice, computerChoice);
            break;
    }
}

function resetScores() {
    userScore = 0;
    computerScore = 0;
    userScore_span.textContent = userScore;
    computerScore_span.textContent = computerScore;
    result_p.textContent = "Make your move!";
}

function main() {
    rock_div.addEventListener("click", function () {
        game("rock");
    });

    paper_div.addEventListener("click", function () {
        game("paper");
    });

    scissors_div.addEventListener("click", function () {
        game("scissors");
    });

    playAgain_div.addEventListener("click", function () {
        resetScores();
    });
}

main();
