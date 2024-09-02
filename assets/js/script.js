// love maths project was used as a referance and some code was used 

// list of global variables 
const resetButton = document.getElementById("reset-btn");
const rmvButton = document.getElementById("rmv-player");
const addButton = document.getElementById("add-player");
const playButton = document.getElementById("play-button");
const addFundsButton = document.getElementById("add-funds");
const stakeButtons = document.getElementsByClassName("stake-btn");
const cashOutButton = document.getElementById("cash-out");

/**
 * other then the amount of players this resets everything back to factory settings
 */
function resetPage() {

    let reset = document.getElementsByClassName("reset");

    for (set of reset) {
        set.innerText = 0;
    }

    let cardDeck = document.getElementsByClassName("cardDeck");

    for (decks of cardDeck) {
        decks.innerText = "";
    }

    // i could have added player-reset to the P element but decided to do it like this 
    let playerReset = document.getElementsByClassName("player-reset");
    for (players of playerReset) {
        players.children[1].innerText = "";
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
 * 
 * @param {player number} num 
 * @returns true of false
 */
function checkAmountOfPlayers(num) {
    let user2 = document.getElementById("user2-card");
    let user3 = document.getElementById("user3-card");

    if (user3 && num == 3) {
        return true;
    } else if (user2 && num == 2) {
        return true;
    } else {
        return false;
    }

}

/**
 * checks if funds are less then stake
 * calls runGame function if false
 */
function checkFunds() {

    let funds = parseInt(document.getElementById("player-funds").innerText);
    let active = parseInt(document.getElementsByClassName("active")[0].innerText);

    if (funds < active) {
        alert(`Please add funds, minimum stake is set to ${active}.`);
    } else {
        animatedDelay();
    }

}

/**
 * resets player card results and runs a short animation
 * before calling runGame function
 */
function animatedDelay() {

    let playerReset = document.getElementsByClassName("player-reset");
    for (players of playerReset) {
        players.children[1].innerText = "";
    }

    // code from https://developer.mozilla.org/en-US/docs/Web/API/setInterval
    function myTimer() {
        let cards = randomCard(1);
        let cardDeck = document.getElementsByClassName("cardDeck");

        for (decks of cardDeck) {
            decks.innerText = cards.card;
        }
    }

    // calls myTimer function every 1ms before setTimeout calls clearRun
    // (sets the speed of the animation)
    let intervalID = setInterval(myTimer, 100);

    function clearRun() {
        clearInterval(intervalID);
        runGame();
    }

    // calls clearRun function after 1.5s
    // (sets the duration of the animation)
    setTimeout(clearRun, 1500);

}

/**
 * gets two random objects from randomCard function one for the computer and one for each user 
 * adds the object card string to the corresponding cards inner text
 * takes both the of the ranks from the card object and comparse them with the 
 * corresponding check results function
 */
function runGame() {

    // change the argument for card1 from 1 to 2, to increase the odds for the dealer 
    let card0 = randomCard(1);
    let card1 = randomCard(1);

    let computerCard = document.getElementById("computers-card");
    let user1Card = document.getElementById("user1-card");

    computerCard.innerText = card0.card;
    user1Card.innerText = card1.card;

    if (checkAmountOfPlayers(2)) {
        let user2 = document.getElementById("user2-card");
        let card2 = randomCard(1);
        user2.innerHTML = card2.card;
        checkResults(card0.rank, card2.rank, 2);
    };

    if (checkAmountOfPlayers(3)) {
        let user3 = document.getElementById("user3-card");
        let card3 = randomCard(1);
        user3.innerHTML = card3.card;
        checkResults(card0.rank, card3.rank, 3);
    };

    checkResults(card0.rank, card1.rank, 1);

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
        ifPlayerLoses();
        playerResult.innerText = "You Lose!";
    } else {
        playerResult.innerText = "It's a Draw!";
    };

}

/**
 * creates html element for extra player and adds it to the docs
 * @param {new player number} num 
 */
function extraPlayer(num) {

    let userDiv = document.getElementById("users-div");
    let html = `
        <div class="player-reset">
            <p class="center">Player ${num}</p>
            <p id="player${num}-result" class="center"></p>
            <div id="user${num}-card" class="cardDeck"></div>
        </div>
    `;
    let scoresDiv = document.getElementById("scores-inner-div");
    let scoresHtml = `
        <p>Player ${num} Score: <span id="player${num}-score" class="reset">0</span></p>
    `;

    userDiv.innerHTML += html;
    scoresDiv.innerHTML += scoresHtml;

}

/**
 * checks how many players there are and then calls the correct function
 * adjusts the stake values
 */
function addPlayer() {

    if (checkAmountOfPlayers(2)) {
        extraPlayer(3)
        stakeButtons[0].innerText = 15;
        stakeButtons[1].innerText = 30;
        stakeButtons[2].innerText = 60;
    } else {
        extraPlayer(2)
        stakeButtons[0].innerText = 10;
        stakeButtons[1].innerText = 20;
        stakeButtons[2].innerText = 40;
    };

}

/**
 * checks if players score is equal to 0
 * @param {player number} num 
 * @returns true or false
 */
function checkScore(num) {

    let playerScore = parseInt(document.getElementById(`player${num}-score`).innerText);

    if (playerScore > 0) {
        return true;
    } else {
        return false;
    }

}

/**
 * removes player if checkScore() is equal to true
 */
function rmvPlayer() {

    let userDiv = document.getElementById("users-div");
    let scoresDiv = document.getElementById("scores-inner-div");

    if (checkAmountOfPlayers(3)) {
        if (checkAmountOfPlayers(3) && checkScore(3) != true) {
            userDiv.children[2].remove();
            scoresDiv.children[3].remove();
            stakeButtons[0].innerText = 10;
            stakeButtons[1].innerText = 20;
            stakeButtons[2].innerText = 40;
        } else {
            alert("You must cash out before removing player");
        }
    } else if (checkAmountOfPlayers(2) && checkScore(2) != true) {
        userDiv.children[1].remove();
        scoresDiv.children[2].remove();
        stakeButtons[0].innerText = 5;
        stakeButtons[1].innerText = 10;
        stakeButtons[2].innerText = 20;
    } else {
        alert("You must cash out before removing player");
    }

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
 * add funds to the game
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
 * if the computer wins will remove the selected stake amount from funds
 * and add to the computers score
 */
function ifPlayerLoses() {

    let active = parseInt(document.getElementsByClassName("active")[0].innerText);
    let oldComputerScore = parseInt(document.getElementById("computer-score").innerText);
    let oldFunds = parseInt(document.getElementById("player-funds").innerText);

    if (checkAmountOfPlayers(3)) {
        document.getElementById("computer-score").innerText = oldComputerScore + active / 3 * 2;
        document.getElementById("player-funds").innerText = oldFunds - active / 3;
    } else if (checkAmountOfPlayers(2)) {
        document.getElementById("computer-score").innerText = oldComputerScore + active;
        document.getElementById("player-funds").innerText = oldFunds - active / 2;
    } else {
        document.getElementById("computer-score").innerText = oldComputerScore + active * 2;
        document.getElementById("player-funds").innerText = oldFunds - active;
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

    if (checkAmountOfPlayers(3)) {
        document.getElementById(`player${num}-score`).innerText = oldPlayerScore + active / 3 * 2;
        document.getElementById("player-funds").innerText = oldFunds - active / 3;
    } else if (checkAmountOfPlayers(2)) {
        document.getElementById(`player${num}-score`).innerText = oldPlayerScore + active;
        document.getElementById("player-funds").innerText = oldFunds - active / 2;
    } else {
        document.getElementById(`player${num}-score`).innerText = oldPlayerScore + active * 2;
        document.getElementById("player-funds").innerText = oldFunds - active;
    }
}

/**
 * checks the amount of players and calls cashOutPlayer function
 */
function cashOutFunction() {

    /**
     * removes player score and funds then adds them to total
     * @param {player number} num 
     */
    function cashOutPlayer(num) {

        let oldFunds = parseInt(document.getElementById("player-funds").innerText);
        let oldComputerScore = parseInt(document.getElementById("computer-score").innerText);
        let oldCashOutTotal = parseInt(document.getElementById("cash-out-total").innerText);
        let oldPlayerScore = parseInt(document.getElementById(`player${num}-score`).innerText);

        document.getElementById("cash-out-total").innerText = oldCashOutTotal + oldPlayerScore + oldFunds;
        document.getElementById("computer-score").innerText = oldComputerScore - oldComputerScore;
        document.getElementById(`player${num}-score`).innerText = oldPlayerScore - oldPlayerScore;
        document.getElementById("player-funds").innerText = oldFunds - oldFunds;

    }

    if (checkAmountOfPlayers(3)) {
        cashOutPlayer(1);
        cashOutPlayer(2);
        cashOutPlayer(3);
    } else if (checkAmountOfPlayers(2)) {
        cashOutPlayer(1);
        cashOutPlayer(2);
    } else {
        cashOutPlayer(1);
    }
}

/**
 * disables buttons for extra security and player experience
 */
function buttonDisabled() {

    // button disable https://stackoverflow.com/questions/13831601/disabling-and-enabling-a-html-input-button
    // funds and play button disable
    let funds = parseInt(document.getElementById("player-funds").innerText);
    let max = 1000;

    funds != 0 ? playButton.disabled = false : playButton.disabled = true;
    funds == max || funds > 900 ? addFundsButton.disabled = true : addFundsButton.disabled = false;

    // add player button and remove player button disable
    if (checkAmountOfPlayers(3)) {
        rmvButton.disabled = false;
        addButton.disabled = true;
    } else if (checkAmountOfPlayers(2)) {
        rmvButton.disabled = false;
        addButton.disabled = false;
    } else {
        rmvButton.disabled = true;
        addButton.disabled = false;
    }

    // cash out button disable
    if (checkAmountOfPlayers(3)) {
        if (checkScore(1) || checkScore(2) || checkScore(3)) {
            cashOutButton.disabled = false;
        } else {
            cashOutButton.disabled = true;
        }
    } else if (checkAmountOfPlayers(2)) {
        if (checkScore(1) || checkScore(2)) {
            cashOutButton.disabled = false;
        } else {
            cashOutButton.disabled = true;
        }
    } else if (checkScore(1)) {
        cashOutButton.disabled = false;
    } else {
        cashOutButton.disabled = true;
    }

}

// get the button elements and add event listeners to them
window.addEventListener("DOMContentLoaded", (event) => {

    resetButton.addEventListener("click", resetPage);
    rmvButton.addEventListener("click", rmvPlayer);
    addButton.addEventListener("click", addPlayer);
    playButton.addEventListener("click", checkFunds);
    addFundsButton.addEventListener("click", addFunds);

    addFundsButton.focus();

    cashOutButton.addEventListener("click", cashOutFunction);

    for (buttons of document.getElementsByTagName("button")) {
        buttons.addEventListener("click", buttonDisabled);
    }

    for (buttons of stakeButtons) {
        buttons.addEventListener("click", stakeValue);
    }

    document.getElementById("play-button").addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            checkFunds();
        }
    });

});