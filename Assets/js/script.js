// Fetch the elements
var startQuiz = document.querySelector("#start");
var timeValue = document.querySelector(".timer-value");
var pElement = document.querySelectorAll(".display-main-page");
var quesAnsEl = document.querySelector(".display-question");
var questionEl = document.querySelector("#question");
var answerListEl = document.querySelector("#answers");
var formEl = document.querySelector("#final-form");

// Declare and initialize variables
var timerCount;
var intervalID;
var showResult;
var questionNum = 0;
var ansType = "";
var score = 0;

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
            type: "wrong"
            }, {
            choice: "2. <script>",
            type: "correct"
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
    timerCount = 30;
    function setTime() {
        timerCount--;
        timeValue.textContent = timerCount;

        if(timerCount <= 0) {
            clearInterval(intervalID);
            displayFinalResult();
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
        ansListItem.setAttribute("data-choice-type", ans.type);
        answerListEl.appendChild(ansListItem);
        ansListItem.addEventListener('click', displayResult);
    })
}

// Function to display result based on answer selected and display next question
function displayResult() {
    var ansChoiceType = this.getAttribute("data-choice-type");
    showResult = document.createElement('p');
    showResult.classList.add("p-result");
    showResult.textContent = ansChoiceType + "!";
    quesAnsEl.appendChild(showResult);

    setTimeout(clearQuestions, 750);

    function clearQuestions() {
        if(ansChoiceType === "correct") {
            score = score + 2;
        }
        else if((ansChoiceType === "wrong") && (timerCount >= 10)) {
            timerCount = timerCount - 10;
        }
        else {
            clearInterval(intervalID);
            timerCount = 0;
            timeValue.textContent = timerCount;
        }
        answerListEl.innerHTML='';        
        showResult.innerHTML='';
        questionNum++;
        if(questionNum < questionSet.length) {
            displayQuestions();
        }
        else {
            displayFinalResult();
        }
    }
}

// Function to display final page displaying score
function displayFinalResult() {
    clearInterval(intervalID);
    timerCount = 0;
    timeValue.textContent = timerCount;
    questionEl.innerHTML='';
    answerListEl.innerHTML='';        
    showResult.innerHTML='';

    var hTag = document.createElement('h3');
    hTag.classList.add("h3-result-page");
    hTag.textContent = "All done!";
    var pTag = document.createElement('p');
    pTag.textContent = "Your final score is : "+ score;
    quesAnsEl.appendChild(hTag);
    quesAnsEl.appendChild(pTag);
    var formMainEl = document.createElement('form');
    formMainEl.setAttribute("action", "")
    formMainEl.setAttribute("method", "post");
    formEl.appendChild(formMainEl);
    var labelEl = document.createElement('label');
    labelEl.textContent = "Enter initials :"
    var inputEl = document.createElement('input');
    inputEl.type = "text"; 
    inputEl.value = "";
    inputEl.width = "50px";
    var submitBtn = document.createElement('button');
    submitBtn.textContent = "Submit";

    quesAnsEl.appendChild(formEl);
    formMainEl.appendChild(labelEl);
    formMainEl.appendChild(inputEl);
    formMainEl.appendChild(submitBtn);

    submitBtn.addEventListener('click', function(event) {
        event.preventDefault();
        saveScore();
    });

    function saveScore() {
        var quizScore = JSON.parse(sessionStorage.getItem("quizScArr")); // Get previous score from local storage

        if(quizScore === null) {
            var newQuizSc = [{
                qName: inputEl.value,
                qScore: score
            }];
            sessionStorage.setItem("quizScArr", JSON.stringify(newQuizSc));
        }
        else {
            var prevQuizScArr = JSON.parse(sessionStorage.getItem("quizScArr")) || [];
            var newQuizSc = {
                qName: inputEl.value,
                qScore: score
            };
            prevQuizScArr.push(newQuizSc);
            sessionStorage.setItem("quizScArr", JSON.stringify(prevQuizScArr));
        }
            window.location.href="highscores.html";
    }
}

// Event listeners
startQuiz.addEventListener("click", setTimer);
startQuiz.addEventListener("click", hideMainPage);
