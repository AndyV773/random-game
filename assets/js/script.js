// love maths project was used as a referance and some code was used 

// list of global variables 
const refreshButton = document.getElementById("refresh");
const rmvButton = document.getElementById("rmv-player");
const addButton = document.getElementById("add-player");
const playButton = document.getElementById("play-button");
const addFundsButton = document.getElementById("add-funds");
const stakeBtn = document.getElementsByClassName("stake-btn");
const cashOutButton = document.getElementById("cash-out");

function refreshPage() {
    alert("Refresh");
}

/**
 * gets two random numbers one for the computer and one for the user
 * pairs them up with a card index 
 * adds the numbers to the corresponding cards
 */
function runGame() {

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



    let computerCard = document.getElementById("computers-card");
    let user1Card = document.getElementById("user1-card");

    computerCard.innerText = num1;
    user1Card.innerText = num2;

    let user2 = document.getElementById("user2-card");
    if (user2) {
        user2.innerHTML = num3;
    };


    checkResultPlayer1(num1, num2);
    checkResultPlayer2(num1, num3);

}

/**
 * gets the card numbers from runGame() for computer and player 1
 * then works out the higher card
 * and calls the correct function for winner
 * @param {computer} num1 
 * @param {player 1} num2 
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

/**
 * gets the card numbers from runGame() for computer and player 2
 * then works out the higher card
 * and calls the correct function for winner
 * @param {computer} num1 
 * @param {player 2} num3 
 */
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
            <p class="center">Player 2</p>
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
 * sets background color of stake amount selected to orange 
 * by moving active class
 */
function stakeValue() {

    // code from https://www.w3schools.com/howto/howto_js_image_grid.asp
    let active = document.getElementsByClassName("active");

    active[0].className = active[0].className.replace(" active", "");
    this.className += " active";

}

/**
 * alerts the player to let them know how much they have set the stake to
 */
function stakeAlert() {

    let active = parseInt(document.getElementsByClassName("active")[0].innerText);

    if (active === 20) {
        alert("You have set stake to 20");
    } else if (active === 10) {
        alert("You have set stake to 10");
    } else if (active === 5) {
        alert("You have set stake to 5");
    } else {
        alert("Error");
    }
}

/**
 * add funds to the game in increments of 5
 */
function addFunds() {

    let oldFunds = parseInt(document.getElementById("player-funds").innerText);
    let funds = document.getElementById("player-funds").innerText = oldFunds + 5;
    let max = 1000;

    if (funds > max) {
        alert("Sorry you can't add anymore funds");
    }

}

/**
 * checks if the players has enough funds before runing the game
 */
function checkFunds() {

    let funds = parseInt(document.getElementById("player-funds").innerText);
    let active = parseInt(document.getElementsByClassName("active")[0].innerText);
    let user2 = document.getElementById("user2-card");

    if (user2) {
        if (active === 5 && funds < 10) {
            alert("Please add funds");
        } else if (active === 10 && funds < 20) {
            alert("Please add funds");
        } else if (active === 20 && funds < 40) {
            alert("Please add funds");
        } else {
            runGame();
        }
    } else {
        if (active === 5 && funds < 5) {
            alert("Please add funds");
        } else if (active === 10 && funds < 10) {
            alert("Please add funds");
        } else if (active === 20 && funds < 20) {
            alert("Please add funds");
        } else {
            runGame();
        }
    }
}

/**
 * if the computer wins will remove the selected stake amount from funds
 * and add to the computers score
 */
function ifComputerWins() {

    let active = parseInt(document.getElementsByClassName("active")[0].innerText);
    let oldComputerScore = parseInt(document.getElementById("computer-score").innerText);
    let oldFunds = parseInt(document.getElementById("player-funds").innerText);

    if (active === 20) {
        document.getElementById("computer-score").innerText = oldComputerScore + 20;
        document.getElementById("player-funds").innerText = oldFunds - 20;
    } else if (active === 10) {
        document.getElementById("computer-score").innerText = oldComputerScore + 10;
        document.getElementById("player-funds").innerText = oldFunds - 10;
    } else {
        document.getElementById("computer-score").innerText = oldComputerScore + 5;
        document.getElementById("player-funds").innerText = oldFunds - 5;
    }

}

/**
 * if player one wins will remove the selected stake amount from funds
 * and add to player one's score
 */
function ifPlayer1Wins() {

    let active = parseInt(document.getElementsByClassName("active")[0].innerText);
    let oldPlayer1Score = parseInt(document.getElementById("player1-score").innerText);
    let oldFunds = parseInt(document.getElementById("player-funds").innerText);

    if (active === 20) {
        document.getElementById("player1-score").innerText = oldPlayer1Score + 20;
        document.getElementById("player-funds").innerText = oldFunds - 20;
    } else if (active === 10) {
        document.getElementById("player1-score").innerText = oldPlayer1Score + 10;
        document.getElementById("player-funds").innerText = oldFunds - 10;
    } else {
        document.getElementById("player1-score").innerText = oldPlayer1Score + 5;
        document.getElementById("player-funds").innerText = oldFunds - 5;
    }

}

/**
 * if player two wins will remove the selected stake amount from funds
 * and add to player two's score
 */
function ifPlayer2Wins() {

    let active = parseInt(document.getElementsByClassName("active")[0].innerText);
    let user2 = document.getElementById("user2-card");
    let oldFunds = parseInt(document.getElementById("player-funds").innerText);

    if (user2) {
        let oldPlayer2Score = parseInt(document.getElementById("player2-score").innerText);
        if (active === 20) {
            document.getElementById("player2-score").innerText = oldPlayer2Score + 20;
            document.getElementById("player-funds").innerText = oldFunds - 20;
        } else if (active === 10) {
            document.getElementById("player2-score").innerText = oldPlayer2Score + 10;
            document.getElementById("player-funds").innerText = oldFunds - 10;
        } else {
            document.getElementById("player2-score").innerText = oldPlayer2Score + 5;
            document.getElementById("player-funds").innerText = oldFunds - 5;
        }
    };

}

function cashOut() {
    alert("You cashed out");
}

// get the button elements and add event listeners to them
window.addEventListener("DOMContentLoaded", (event) => {

    refreshButton.addEventListener("click", refreshPage);
    rmvButton.addEventListener("click", rmvPlayer);
    addButton.addEventListener("click", addPlayer);
    playButton.addEventListener("click", checkFunds);
    // stakeButton.addEventListener("click", stakeValue);
    addFundsButton.addEventListener("click", addFunds);
    cashOutButton.addEventListener("click", cashOut);

    for (buttons of stakeBtn) {
        buttons.addEventListener("click", stakeValue);
        buttons.addEventListener("click", stakeAlert);
    }

});