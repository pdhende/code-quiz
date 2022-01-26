// Fetch the elements
var quizPlayer = document.querySelector("#qPlayer-list");
var goBackBtn = document.querySelector("#back");
var clearBtn = document.querySelector("#clear");

// Get the player score from local storage
var quizSc = JSON.parse(localStorage.getItem("quizScore"));
if(quizSc !== null) {
    var listEl = document.createElement('li');
    listEl.classList.add("player-list");
    listEl.textContent = "1. " + quizSc.qName + " - " + quizSc.qScore;
    quizPlayer.appendChild(listEl);
}


// Event Listeners
// goBackBtn.addEventListener('click', showMainPage);
// clearBtn.addEventListener('click', clearScore);