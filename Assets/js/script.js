// Fetch the elements
var startQuiz = document.querySelector("#start");
var timeValue = document.querySelector(".timer-value");
var pElement = document.querySelectorAll(".display-main-page");
var questionEl = document.querySelector("#question");
// var sectionEl = document.querySelector(".display-section");
var answerListEl = document.querySelector("#answers");
var intervalID;

// Create an array of objects containing questions and answers
var questionSet = [{
    question : "Which data type is NOT supported by JavaScript?",
    answer : [{
        choice : "Boolean",
        type : "wrong"
        }, {
        choice : "String",
        type : "wrong"
        }, {
        choice : "Console",
        type : "correct" 
        }, {
        choice : "Number",
        type : "wrong"
        }]
}, {
    question : "In JavaScript, what element is used to store multiple values in a single variable?",
    answer : [{
        choice : "Arrays",
        type : "correct"
        }, {
        choice : "Functions",
        type : "wrong"
        }, {
        choice : "Variables",
        type : "wrong" 
        }, {
        choice : "Strings",
        type : "wrong"
    }]
}, {
    question : "Inside which HTML element do we put the JavaScript?",
    answer : [{
        choice : "<javascript>",
        type : "correct"
        }, {
        choice : "<script>",
        type : "wrong"
        }, {
        choice : "<scripting>",
        type : "wrong" 
        }, {
        choice : "<js>",
        type : "wrong"
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

function showQuestions() {
    var pState;
    for(var i = 0; i < pElement.length; i++) {
        pState = pElement[i].getAttribute("data-state");
        if(pState === "show") {
            pElement[i].setAttribute("data-set", "hidden");
            pElement[i].setAttribute("style", "display:none");
        }
    }

    // questionSet.forEach (function(question) {
    //     questionEl.textContent = question;
    //     console.log(question);
    //   })
    
    var questionsDisplay = function() {

        for (var key in questionSet) {
            value = questionSet[key];
            console.log(key, value);
        }
    }

     questionsDisplay();

    // questionEl.textContent = questionSet[0].question;
    // var ansLi1 = document.createElement("li");
    // var ansLi2 = document.createElement("li");
    // var ansLi3 = document.createElement("li");

    // answerListEl.appendChild(ansLi1);
    // answerListEl.appendChild(ansLi2);
    // answerListEl.appendChild(ansLi3);

    // ansLi1.textContent = questionSet[0].answer[0].choice;

    // for(var j = 0; j < questionSet.length; j++) {
    //     var questionEl = document.createElement("div");
    //     // var questionEl = document.createElement("h2")
    //     var answersEl = document.createElement("ol");
    //     var ansLi1 = document.createElement("li");
    //     var ansLi2 = document.createElement("li");
    //     var ansLi3 = document.createElement("li");

    //     sectionEl.appendChild(questionEl);
    //     // divEl.appendChild(questionEl);
    //     questionEl.appendChild(answersEl);
    //     answersEl.appendChild(ansLi1);
    //     answersEl.appendChild(ansLi2);
    //     answersEl.appendChild(ansLi3);

    //     questionEl.textContent = questionSet[j].question;
    //     ansLi1.textContent = questionSet[j].answer[0].choice;
    //     console.log(questionSet[j].answer[0].choice);
    //     ansLi2.textContent = questionSet[j].answer[1].choice;
    //     ansLi3.textContent = questionSet[j].answer[2].choice;
    // }
}

// Event listeners
// window.addEventListener('load', hideQuestions);
startQuiz.addEventListener("click", setTimer);
startQuiz.addEventListener("click", showQuestions);