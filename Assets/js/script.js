// Fetch the elements
var startQuiz = document.querySelector("#start");
var timeValue = document.querySelector(".timer-value");
var intervalID;

// Function to set the timer
function setTimer() {
    var timerCount = 75;
    function setTime() {
        timerCount--;
        timeValue.textContent = timerCount;

        if(timerCount == 0) {
            clearInterval(intervalID);
        }
    }
    intervalID = setInterval(setTime, 1000);
}

// Event listeners to capture click of a button
startQuiz.addEventListener("click", setTimer);