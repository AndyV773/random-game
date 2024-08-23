// some code taken from love maths project

// list of global variables 
const rmvButton = document.getElementById("rmv-player");
const addButton = document.getElementById("add-player");
const playButton = document.getElementById("play-button");
const stakeButton = document.getElementById("change-stake");
const addFundsButton = document.getElementById("add-funds");

/**
 * gets two random numbers one for the computer and one for the user
 * pairs them up with a card index 
 * adds the numbers to the corresponding cards
 */
function runGame(event) {

    let cardArray = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "K", "Q", "A"];

    // random array from https://stackoverflow.com/questions/43267033/understanding-the-use-of-math-floor-when-randomly-accessing-an-array
    let num1 = cardArray[Math.floor(Math.random() * cardArray.length)];
    let num2 = cardArray[Math.floor(Math.random() * cardArray.length)];
    let num3 = cardArray[Math.floor(Math.random() * cardArray.length)];


    if (event) {
        let computerCard = document.getElementById("computers-card");
        let user1Card = document.getElementById("user1-card");

        computerCard.innerText = num1;
        user1Card.innerText = num2;

        let user2 = document.getElementById("user2-card");
        if (user2) {
            user2.innerHTML = num3;
        };
    }

    checkResultPlayer1(num1, num2);
    checkResultPlayer2(num1, num3);

}

/**
 * gets the card numbers from runGame() and works out the higher card
 * then returns the winner 
 */
function checkResultPlayer1(num1, num2) {

    if (runGame)
        if (num1 < num2) {
            ifPlayer1Wins();
            console.log("Player 1 Wins!");
        } else if (num1 === num2) {
        console.log("Player 1 Draw!");
    } else {
        ifComputerWins();
        console.log("Player 1 Loses!");
    };

}

function checkResultPlayer2(num1, num3) {

    let user2 = document.getElementById("user2-card");
    if (user2) {
        if (runGame)
            if (num1 < num3) {
                ifPlayer2Wins();
                console.log("Player 2 Wins!");
            } else if (num1 === num3) {
            console.log("Player 2 Draw!");
        } else {
            ifComputerWins();
            console.log("Player 2 Loses!");
        };
    };

}

/**
 * adds player to game board when click + button
 * alerts user when no more players can be added
 */
function addPlayer() {
    let userDiv = document.getElementById("users-div");
    let html = `
        <div>
            <p class="center">P2</p>
            <div id="user2-card" class="card"></div>
        </div>
    `;
    let scoresDiv = document.getElementById("scores-inner-div");
    let scoresHtml = `
        <p>Player 2 Score: <span id="player2-score">0</span></p>
    `;

    let user2 = document.getElementById("user2-card");

    if (user2) {
        alert("Sorry you can't add anymore players");
    } else {
        userDiv.innerHTML += html;
        scoresDiv.innerHTML += scoresHtml;
    };

}

/**
 * removes player from the game board when click - button
 * alerts user when can't remove anymore players
 */
function rmvPlayer() {
    let userDiv = document.getElementById("users-div");
    let scoresDiv = document.getElementById("scores-inner-div");
    let user2 = document.getElementById("user2-card");

    if (user2) {
        userDiv.children[1].remove();
        scoresDiv.children[2].remove();
    } else {
        alert("You can't remove anymore players");
    };
}

// function stakeValue() {
//     let stakeBox = document.getElementsByClassName("stake-box");

//     let stake5 = document.getElementById("stake-5");
//     let stake10 = document.getElementById("stake-10");
//     let stake20 = document.getElementById("stake-20");

//     // stake5.style.backgroundColor = "white";
//     // stake10.style.backgroundColor = "white";
//     // stake20.style.backgroundColor = "white";

//     if (this.style.backgroundColor === "white") {
//         stakeBox[0].style.backgroundColor = "orange";
//     } else if (stake5.style.backgroundColor === "orange" && stake10.style.backgroundColor === "white" && stake20.style.backgroundColor === "white") {
//         stake10.style.backgroundColor = "orange";
//     } else if (stake5.style.backgroundColor === "white" && stake10.style.backgroundColor === "orange" && stake20.style.backgroundColor === "white") {
//         stake20.style.backgroundColor = "orange";
//     } else {
//         alert('error')
//     };

// }

function addFunds() {
    let oldFunds = parseInt(document.getElementById("player-funds").innerText);
    let funds = document.getElementById("player-funds").innerText = oldFunds + 5;
    let max = 1000;

    if (funds > max) {
        alert("Sorry you can't add anymore funds");
    }

}

function ifComputerWins() {

    let oldComputerScore = parseInt(document.getElementById("computer-score").innerText);
    document.getElementById("computer-score").innerText = oldComputerScore + 5;

}

function ifPlayer1Wins() {

    let oldPlayer1Score = parseInt(document.getElementById("player1-score").innerText);
    document.getElementById("player1-score").innerText = oldPlayer1Score + 5;

}

function ifPlayer2Wins() {

    let user2 = document.getElementById("user2-card");
    if (user2) {
        let oldPlayer2Score = parseInt(document.getElementById("player2-score").innerText);
        document.getElementById("player2-score").innerText = oldPlayer2Score + 5;
    };

}

// get the button elements and add event listeners to them
window.addEventListener("DOMContentLoaded", (event) => {

    rmvButton.addEventListener("click", rmvPlayer);
    addButton.addEventListener("click", addPlayer);
    playButton.addEventListener("click", runGame);
    // stakeButton.addEventListener("click", stakeValue);
    addFundsButton.addEventListener("click", addFunds);

});