// some code taken from love maths project
// wait for the dom to finish loading before running the game
// get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "play-button") {
                alert("Hello World!");
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


function runGame() {

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