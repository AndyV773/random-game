// love maths project was used as a referance and some code was used 

// list of global variables 
const refreshButton = document.getElementById("refresh");
const rmvButton = document.getElementById("rmv-player");
const addButton = document.getElementById("add-player");
const playButton = document.getElementById("play-button");
const addFundsButton = document.getElementById("add-funds");
const stakeButtons = document.getElementsByClassName("stake-btn");
const cashOutButton = document.getElementById("cash-out");

/**
 * other then the amount of players this resets everything back to factory settings
 */
function refreshPage() {

    let reset = document.getElementsByClassName("reset");

    for (set of reset) {
        set.innerText = 0;
    }

    let cardDeck = document.getElementsByClassName("cardDeck");

    for (decks of cardDeck) {
        decks.innerText = "";
    }

    document.getElementById("player1-result").innerText = "";

    let user2 = document.getElementById("user2-card");
    if (user2) {
        document.getElementById("player2-result").innerText = "";
    }

    // sets stake to 5
    let setStake5 = document.getElementsByClassName("stake-btn")[0];
    let active = document.getElementsByClassName("active");
    active[0].className = active[0].className.replace(" active", "");
    setStake5.className += " active";

}

/**
 * @param {1 or 2} a 
 * @returns random card object
 */
function randomCard(a) {

    let cardArray = [{
        card: "2",
        rank: 2
    }, {
        card: "3",
        rank: 3
    }, {
        card: "4",
        rank: 4
    }, {
        card: "5",
        rank: 5
    }, {
        card: "6",
        rank: 6
    }, {
        card: "7",
        rank: 7
    }, {
        card: "8",
        rank: 8
    }, {
        card: "9",
        rank: 9
    }, {
        card: "10",
        rank: 10
    }, {
        card: "J",
        rank: 11
    }, {
        card: "Q",
        rank: 12
    }, {
        card: "K",
        rank: 13
    }, {
        card: "A",
        rank: 14
    }];

    let extraCards = [{
        card: "9",
        rank: 9
    }, {
        card: "Q",
        rank: 12
    }];

    // push array of objects in to another (...) https://stackoverflow.com/questions/64797162/push-an-array-into-the-same-array-javascript
    a == 2 ? cardArray.push(...extraCards) : a = 1;

    // random array from https://stackoverflow.com/questions/43267033/understanding-the-use-of-math-floor-when-randomly-accessing-an-array
    let cards = cardArray[Math.floor(Math.random() * cardArray.length)];

    return cards;

};

/**
 * gets two random objects from randomCard function one for the computer and one for each user 
 * adds the object card string to the corresponding cards inner text
 * takes both the of the ranks from the card object and comparse them with the 
 * corresponding check results function
 */
function runGame() {

    // change the argument for card1 from 1 to 2, to increase the odds for the dealer 
    let card1 = randomCard(1);
    let card2 = randomCard(1);

    let computerCard = document.getElementById("computers-card");
    let user1Card = document.getElementById("user1-card");

    computerCard.innerText = card1.card;
    user1Card.innerText = card2.card;

    let user2 = document.getElementById("user2-card");
    if (user2) {
        let card3 = randomCard(1);
        user2.innerHTML = card3.card;
        checkResults(card1.rank, card3.rank, 2);
    };

    checkResults(card1.rank, card2.rank, 1);

}

/**
 * takes both the arguments of comupters and players card 
 * then takes the argument of the players number
 * works out the higher rank and calls the correct function for the winner
 * also sets the results within html
 * @param {computers card} a 
 * @param {players card} b 
 * @param {players number} num 
 */
function checkResults(a, b, num) {

    let playerResult = document.getElementById(`player${num}-result`);

    if (runGame)
        if (a < b) {
            ifPlayerWins(num);
            playerResult.innerText = "You Win!";
        } else if (a > b) {
        ifComputerWins();
        playerResult.innerText = "You Lose!";
    } else {
        playerResult.innerText = "It's a Draw!";
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
            <div id="user2-card" class="cardDeck"></div>
        </div>
    `;
    let scoresDiv = document.getElementById("scores-inner-div");
    let scoresHtml = `
        <p>Player 2 Score: <span id="player2-score" class="reset">0</span></p>
    `;

    let user2 = document.getElementById("user2-card");

    if (user2) {
        alert("Sorry you can't add anymore players");
    } else {
        userDiv.innerHTML += html;
        scoresDiv.innerHTML += scoresHtml;
        stakeButtons[0].innerText = 10;
        stakeButtons[1].innerText = 20;
        stakeButtons[2].innerText = 40;
    };

}

/**
 * removes player from the game board when click - button
 * checks player 2 score before removing player
 * alerts user when can't remove anymore players
 */
function rmvPlayer() {

    let userDiv = document.getElementById("users-div");
    let scoresDiv = document.getElementById("scores-inner-div");
    let user2 = document.getElementById("user2-card");

    if (user2) {
        let player2Score = parseInt(document.getElementById("player2-score").innerText);
        if (player2Score != 0) {
            alert("You must cash out before Removing player 2");
        } else {
            userDiv.children[1].remove();
            scoresDiv.children[2].remove();
            stakeButtons[0].innerText = 5;
            stakeButtons[1].innerText = 10;
            stakeButtons[2].innerText = 20;
        }
    } else {
        alert("You can't remove anymore players");
    };

}

/**
 * sets background color of stake amount selected to orange 
 * by moving active class and alerts the player
 * to let them know how much they have set the stake to
 */
function stakeValue() {

    // code from https://www.w3schools.com/howto/howto_js_image_grid.asp
    let active = document.getElementsByClassName("active");

    active[0].className = active[0].className.replace(" active", "");
    this.className += " active";

    if (active = !undefined) {
        currentActive = parseInt(document.getElementsByClassName("active")[0].innerText);
        alert(`Stake set to ${currentActive}`);
    } else {
        alert("Error current stake is Unkown");
    }

}

/**
 * add funds to the game in increments of 5
 */
function addFunds() {

    playButton.focus();

    let oldFunds = parseInt(document.getElementById("player-funds").innerText);
    let funds = document.getElementById("player-funds").innerText = oldFunds + 100;
    let max = 1000;

    if (funds > max) {
        alert("Sorry you can't add anymore funds");
    }

    let oldcost = parseInt(document.getElementById("player-cost").innerText);
    document.getElementById("player-cost").innerText = oldcost + 100;

}

/**
 * checks if the players has enough funds before runing the game
 */
function checkFunds() {

    let funds = parseInt(document.getElementById("player-funds").innerText);
    let active = parseInt(document.getElementsByClassName("active")[0].innerText);
    let user2 = document.getElementById("user2-card");

    if (user2) {
        if (funds < active) {
            alert(`Please add funds. Minimum stake is set to ${active}.`);
        } else {
            runGame();
        }
    } else {
        if (funds < active) {
            alert(`Please add funds. Minimum stake is set to ${active}`);
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
    let user2 = document.getElementById("user2-card");

    if (user2) {
        document.getElementById("computer-score").innerText = oldComputerScore + active;
        document.getElementById("player-funds").innerText = oldFunds - active / 2;
    } else if (user2 == undefined && active != undefined) {
        document.getElementById("computer-score").innerText = oldComputerScore + active * 2;
        document.getElementById("player-funds").innerText = oldFunds - active;
    } else {
        alert("Stake undefined");
    }

}

/**
 * takes the argument of the players number and works out the scores
 * @param {players number} num 
 */
function ifPlayerWins(num) {

    let active = parseInt(document.getElementsByClassName("active")[0].innerText);
    let oldPlayerScore = parseInt(document.getElementById(`player${num}-score`).innerText);
    let oldFunds = parseInt(document.getElementById("player-funds").innerText);
    let user2 = document.getElementById("user2-card");

    if (user2) {
        document.getElementById(`player${num}-score`).innerText = oldPlayerScore + active;
        document.getElementById("player-funds").innerText = oldFunds - active / 2;
    } else if (user2 == undefined && active != undefined) {
        document.getElementById(`player${num}-score`).innerText = oldPlayerScore + active * 2;
        document.getElementById("player-funds").innerText = oldFunds - active;
    } else {
        alert("Stake undefined");
    }

}

/**
 * removes the amount from player scores and funds then adds them to total
 * alerts if funds are not available
 */
function cashOut() {

    let oldFunds = parseInt(document.getElementById("player-funds").innerText);
    let oldComputerScore = parseInt(document.getElementById("computer-score").innerText);
    let oldPlayer1Score = parseInt(document.getElementById("player1-score").innerText);
    let oldCashOutTotal = parseInt(document.getElementById("cash-out-total").innerText);
    let user2 = document.getElementById("user2-card");

    if (user2) {
        let oldPlayer2Score = parseInt(document.getElementById("player2-score").innerText);
        let twoPlayerScore = oldPlayer1Score + oldPlayer2Score + oldFunds;

        if (oldPlayer1Score > 0 || oldPlayer2Score > 0) {
            document.getElementById("cash-out-total").innerText = oldCashOutTotal + twoPlayerScore;
            document.getElementById("computer-score").innerText = oldComputerScore - oldComputerScore;
            document.getElementById("player2-score").innerText = oldPlayer2Score - oldPlayer2Score;
            document.getElementById("player1-score").innerText = oldPlayer1Score - oldPlayer1Score;
            document.getElementById("player-funds").innerText = oldFunds - oldFunds;
        } else {
            alert("Insufficient Funds");
        }
    } else if (oldPlayer1Score > 0) {
        let onePlayerScore = oldPlayer1Score + oldFunds;

        document.getElementById("cash-out-total").innerText = oldCashOutTotal + onePlayerScore;
        document.getElementById("computer-score").innerText = oldComputerScore - oldComputerScore;
        document.getElementById("player1-score").innerText = oldPlayer1Score - oldPlayer1Score;
        document.getElementById("player-funds").innerText = oldFunds - oldFunds;
    } else {
        alert("Insufficient Funds");
    }

}

/**
 * disables buttons for extra security and player experience
 */
function buttonDisabled() {

    // funds and play button disable
    let funds = parseInt(document.getElementById("player-funds").innerText);
    let max = 1000;

    funds != 0 ? playButton.disabled = false : playButton.disabled = true;
    funds == max || funds > 900 ? addFundsButton.disabled = true : addFundsButton.disabled = false;

    // add player and remove player button disable
    let user2 = document.getElementById("user2-card");

    user2 ? (rmvButton.disabled = false, addButton.disabled = true) : (rmvButton.disabled = true, addButton.disabled = false);

    // cash out button disable
    let oldPlayer1Score = parseInt(document.getElementById("player1-score").innerText);

    if (user2) {
        let oldPlayer2Score = parseInt(document.getElementById("player2-score").innerText);

        if (oldPlayer1Score > 0 || oldPlayer2Score > 0) {
            cashOutButton.disabled = false;
        } else {
            cashOutButton.disabled = true;
        }
    } else if (oldPlayer1Score > 0) {
        cashOutButton.disabled = false;
    } else {
        cashOutButton.disabled = true;
    }

}

// get the button elements and add event listeners to them
window.addEventListener("DOMContentLoaded", (event) => {

    refreshButton.addEventListener("click", refreshPage);

    rmvButton.addEventListener("click", rmvPlayer);
    rmvButton.addEventListener("click", buttonDisabled);

    addButton.addEventListener("click", addPlayer);
    addButton.addEventListener("click", buttonDisabled);

    playButton.addEventListener("click", checkFunds);
    playButton.addEventListener("click", buttonDisabled);

    addFundsButton.addEventListener("click", addFunds);
    addFundsButton.addEventListener("click", buttonDisabled);
    addFundsButton.focus();

    cashOutButton.addEventListener("click", cashOut);
    cashOutButton.addEventListener("click", buttonDisabled);

    for (buttons of stakeButtons) {
        buttons.addEventListener("click", stakeValue);
    }

    document.getElementById("play-button").addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            checkFunds();
        }
    });

});