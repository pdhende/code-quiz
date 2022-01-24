// Fetch the elements
var startQuiz = document.querySelector("#start");
var timeValue = document.querySelector(".timer-value");
var pElement = document.querySelectorAll(".display-main-page");
var questionEl = document.querySelector("#question");
var answerListEl = document.querySelector("#answers");
var intervalID;
var questionNum = 0;

// Create an array of objects containing questions and answers
var questionSet = [
    {
        question: "Which data type is NOT supported by JavaScript?",
        answer: [{
            choice: "Boolean",
            type: "wrong"
            }, {
            choice: "String",
            type: "wrong"
            }, {
            choice: "Console",
            type: "correct" 
            }, {
            choice: "Number",
            type: "wrong"
            }]
    }, 
    {
        question: "In JavaScript, what element is used to store multiple values in a single variable?",
        answer: [{
            choice: "Arrays",
            type: "correct"
            }, {
            choice: "Functions",
            type: "wrong"
            }, {
            choice: "Variables",
            type: "wrong" 
            }, {
            choice: "Strings",
            type: "wrong"
        }]
    },
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answer: [{
            choice: "<javascript>",
            type: "correct"
            }, {
            choice: "<script>",
            type: "wrong"
            }, {
            choice: "<scripting>",
            type: "wrong" 
            }, {
            choice: "<js>",
            type: "wrong"
        }]
    }];

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

// Function to hide the main page introduction
function hideMainPage() {
    var pState;
    for(var i = 0; i < pElement.length; i++) {
        pState = pElement[i].getAttribute("data-state");
        if(pState === "show") {
            pElement[i].setAttribute("data-set", "hidden");
            pElement[i].setAttribute("style", "display:none");
        }
    }
    displayQuestions();
}

// Show the questions one by one
function displayQuestions() {
    questionEl.textContent = questionSet[questionNum].question;
    var answers = questionSet[questionNum].answer;
    answers.forEach(function(ans){
        var ansListItem = document.createElement('li');
        ansListItem.textContent = ans.choice;
        answerListEl.appendChild(ansListItem);
    })
}

// Event listeners
startQuiz.addEventListener("click", setTimer);
startQuiz.addEventListener("click", hideMainPage);