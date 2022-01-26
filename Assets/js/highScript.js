// Fetch the elements
var quizPlayer = document.querySelector("#qPlayer-list");
var goBackBtn = document.querySelector("#back");
var clearBtn = document.querySelector("#clear");

// Get the player score from local storage
var quizSc = JSON.parse(localStorage.getItem("quizScArr"));
if(quizSc !== null) {
    var listEl = document.createElement('li');
    listEl.classList.add("player-list");
    listEl.textContent = "1. " + quizSc.qName + " - " + quizSc.qScore;
    quizPlayer.appendChild(listEl);
}

// Function to navigate to quiz home page
function showMainPage() {
    window.location.href = "index.html";
}

// Function to delete list from local storage
function clearScore() {
    localStorage.removeItem("quizScArr");
    quizPlayer.innerHTML="";
}

// Event Listeners
goBackBtn.addEventListener('click', showMainPage);
clearBtn.addEventListener('click', clearScore);