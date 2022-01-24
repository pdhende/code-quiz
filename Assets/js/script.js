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
            choice: "1. Boolean",
            type: "wrong"
            }, {
            choice: "2. String",
            type: "wrong"
            }, {
            choice: "3. Console",
            type: "correct" 
            }, {
            choice: "4. Number",
            type: "wrong"
            }]
    }, 
    {
        question: "In JavaScript, what element is used to store multiple values in a single variable?",
        answer: [{
            choice: "1. Arrays",
            type: "correct"
            }, {
            choice: "2. Functions",
            type: "wrong"
            }, {
            choice: "3. Variables",
            type: "wrong" 
            }, {
            choice: "4. Strings",
            type: "wrong"
        }]
    },
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answer: [{
            choice: "1. <javascript>",
            type: "correct"
            }, {
            choice: "2. <script>",
            type: "wrong"
            }, {
            choice: "3. <scripting>",
            type: "wrong" 
            }, {
            choice: "4. <js>",
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

// Function to show the questions one by one
function displayQuestions() {
    var ansListItem;
    questionEl.textContent = questionSet[questionNum].question;
    var answers = questionSet[questionNum].answer;
    answers.forEach(function(ans){
        ansListItem = document.createElement('button');
        ansListItem.classList.add('list-item-bttns');
        ansListItem.textContent = ans.choice;
        answerListEl.appendChild(ansListItem);
        ansListItem.addEventListener('click', showChoiceType);
    })
}

// Function to track score and display next question
function showChoiceType() {
    questionNum++;
    answerListEl.innerHTML='';
    displayQuestions();
}

// Event listeners
startQuiz.addEventListener("click", setTimer);
startQuiz.addEventListener("click", hideMainPage);
// ansListItem.addEventListener('click', showChoiceType);
