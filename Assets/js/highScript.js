// Fetch the elements
var quizPlayer = document.querySelector("#qPlayer-list");
var goBackBtn = document.querySelector("#back");
var clearBtn = document.querySelector("#clear");
var index = 0;

// Get the player score from local storage
var quizSc = JSON.parse(sessionStorage.getItem("quizScArr"));
if(quizSc !== null) {
    
    quizSc.forEach(function(obj) {
        index++;
        var listEl = document.createElement('li');
        listEl.classList.add("player-list");
        listEl.textContent = index + ". " + obj.qName + " - " + obj.qScore;
        quizPlayer.appendChild(listEl);
        });
}

// Function to navigate to quiz home page
function showMainPage() {
    window.location.href = "index.html";
}

// Function to delete list from local storage
function clearScore() {
    sessionStorage.removeItem("quizScArr");
    quizPlayer.innerHTML="";
}

// Event Listeners
goBackBtn.addEventListener('click', showMainPage);
clearBtn.addEventListener('click', clearScore);
