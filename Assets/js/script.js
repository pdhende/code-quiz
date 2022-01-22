// Fetch the elements
var startQuiz = document.querySelector("#start");
var timeValue = document.querySelector(".timer-value");

var setTimer = function() {
    var timerCount = 75;
    timeValue.textContent = timerCount;
}

startQuiz.addEventListener("click", setTimer);