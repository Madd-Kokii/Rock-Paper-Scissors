const YourChoice = document.getElementById("your-choice");
const ComputerChoice = document.getElementById("computer-choice");
const Result = document.getElementById("results");
const YourScore = document.getElementById("your-score");
const ComputerScore  = document.getElementById("computer-score");

var Your_Points = 0;
var Computer_Points = 0;
var attempts = 0;
const maxAttempts = 10;

function getComputerChoice() {
    const options = ['Rock', 'Paper', 'Scissor'];
    const randomNumber = Math.floor(Math.random() * options.length);
    return options[randomNumber];
}

function getResult(YourChoice, ComputerChoice) {
    if (YourChoice === ComputerChoice) {
        return "It's a Draw!";
    }
    if ((YourChoice === 'Rock' && ComputerChoice === 'Scissor') || (YourChoice === 'Paper' && ComputerChoice === 'Rock') ||
        (YourChoice === 'Scissor' && ComputerChoice === 'Paper') )
         {
            Your_Points++;
        return 'You Won';
         } else
            Computer_Points++;
    return 'You lost!';
}

function updateScoresCheckAttemptsAndRestart() {
    attempts++;
    YourScore.innerText = Your_Points;
    ComputerScore.innerText = Computer_Points;
    if (attempts >= maxAttempts) {

            if (Your_Points > Computer_Points) {
                Result.innerHTML = "Game Over! You won with the highest points!" + "<br>" + " Game is restarting now wait 7secs";
            } else if (Computer_Points > Your_Points) {
                Result.innerHTML = "Game Over! Computer won with the highest points!" + "<br>" +  " Game is restarting now wait 7secs";
            } else {
                Result.innerHTML = "Game Over! It's a Draw! Better Luck Next Time!!" + "<br>" + " Game is restarting now wait a few secs";
            }
        setTimeout(resetGame, 9000);
    }
}

function rockMove() {
    YourChoice.innerText = "Rock";
    var computerMove = getComputerChoice();
    ComputerChoice.innerText = computerMove;
    var gameResult = getResult("Rock", computerMove);
    // if (gameResult === "You Won"){
        
    // }
    // if (gameResult === "You lost!") {
        
    // }
    Result.innerText = gameResult;
    // YourScore.innerText = Your_Points;
    // ComputerScore.innerText = Computer_Points;
    updateScoresCheckAttemptsAndRestart();
}

function paperMove() {
    YourChoice.innerText = "Paper";
    var computerMove = getComputerChoice();
    ComputerChoice.innerText = computerMove;
    var gameResult = getResult("Paper", computerMove);
    Result.innerText = gameResult;
    // YourScore.innerText = Your_Points;
    // ComputerScore.innerText = Computer_Points;
    updateScoresCheckAttemptsAndRestart();
}

function scissorMove() {
    YourChoice.innerText = "Scissor";
    var computerMove = getComputerChoice();
    ComputerChoice.innerText = computerMove;
    var gameResult = getResult("Scissor", computerMove);
    Result.innerText = gameResult;
    // YourScore.innerText = Your_Points;
    // ComputerScore.innerText = Computer_Points;
    updateScoresCheckAttemptsAndRestart();
}

function resetGame() {
    Your_Points = 0;
    Computer_Points = 0;
    attempts = 0;
    YourScore.innerText = Your_Points;
    ComputerScore.innerText = Computer_Points;
    YourChoice.innerText = '';
    ComputerChoice.innerText = '';
    Result.innerText = ' ';
}



