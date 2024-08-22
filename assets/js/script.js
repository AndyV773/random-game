// some code taken from love maths project
// wait for the dom to finish loading before running the game
// get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "play-button") {
                runGame();
            } else if (this.getAttribute("data-type") === "add-player") {
                addPlayer();
            } else if (this.getAttribute("data-type") === "rmv-player") {
                rmvPlayer();
            } else if (this.getAttribute("data-type") === "change-stake") {
                alert('stake changed');
            } else if (this.getAttribute("data-type") === "add-funds") {
                alert('funds added');
            } else if (this.getAttribute("data-type") === "cash-out") {
                alert('you took the money');
            } else {
                alert("Function Unknown");
            }
        });
    }
})

/**
 * gets two random numbers one for the computer and one for the user
 * pairs them up with a card index 
 * adds the numbers to the corresponding cards
 */
// function runGame() {
//     let num1 = Math.floor(Math.random() * 12);
//     let num2 = Math.floor(Math.random() * 12);
//     let computerCard = document.getElementById(computers-card);
//     let user1Card = document.getElementById(user1-card);

//     num1 || num2 === "0" ? "2";
//     num1 || num2 === "1" ? "3";
//     num1 || num2 === "2" ? "4";
//     num1 || num2 === "3" ? "5";
//     num1 || num2 === "4" ? "6";
//     num1 || num2 === "5" ? "7";
//     num1 || num2 === "6" ? "8";
//     num1 || num2 === "7" ? "9";
//     num1 || num2 === "8" ? "10";
//     num1 || num2 === "9" ? "j";
//     num1 || num2 === "10" ? "k";
//     num1 || num2 === "11" ? "q";
//     num1 || num2 === "12" ? "a";

//     computerCard.innerText = num1;
//     user1Card.innerText = num2;

// }

/**
 * adds player to game board when click + button
 * alerts user when no more players can be added
 */
function addPlayer() {
    let userDiv = document.getElementById("users-div");
    let html = `
        <div>
            <p class="center">P2</p>
            <div id="user2-card" class="card">0</div>
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