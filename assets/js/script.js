// some code taken from love maths project

// list of global variables 
const rmvButton = document.getElementById("rmv-player");
const addButton = document.getElementById("add-player");
const playButton = document.getElementById("play-button");
const stakeButton = document.getElementById("change-stake");
const addFundsButton = document.getElementById("add-funds");
const stakeBox = document.getElementsByClassName("stake-box");

/**
 * gets two random numbers one for the computer and one for the user
 * pairs them up with a card index 
 * adds the numbers to the corresponding cards
 */
function runGame(event) {

    let cardArray = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "K", "Q", "A"];
    // cardArray[0].value = 1;
    // cardArray[1].value = 2;
    // cardArray[2].value = 3;
    // cardArray[3].value = 4;
    // cardArray[4].value = 5;
    // cardArray[5].value = 6;
    // cardArray[6].value = 7;
    // cardArray[7].value = 8;
    // cardArray[8].value = 9;
    // cardArray[9].value = 10;
    // cardArray[10].value = 11;
    // cardArray[11].value = 12;
    // cardArray[12].value = 13;

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

    let player1Result = document.getElementById("player1-result");

    if (runGame)
        if (num1 < num2) {
            ifPlayer1Wins();
            player1Result.innerText = "You Win!";
        } else if (num1 === num2) {
        player1Result.innerText = "It's a Draw!";
    } else {
        ifComputerWins();
        player1Result.innerText = "You Loses!";
    };

}

function checkResultPlayer2(num1, num3) {
    let player2Result = document.getElementById("player2-result");

    let user2 = document.getElementById("user2-card");
    if (user2) {
        if (runGame)
            if (num1 < num3) {
                ifPlayer2Wins();
                player2Result.innerText = "You Win!";
            } else if (num1 === num3) {
                player2Result.innerText = "It's a Draw!";
        } else {
            ifComputerWins();
            player2Result.innerText = "You Loses!";
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
            <p id="player2-result" class="center"></p>
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

/**
 * changes color of stake ammount when selected
 */
function stakeValue() {
    
    // code from https://www.w3schools.com/howto/howto_js_image_grid.asp
    current = document.getElementsByClassName("active");

    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
    

}

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
    
    for (box of stakeBox) {
        box.addEventListener("click", stakeValue);
    }

});