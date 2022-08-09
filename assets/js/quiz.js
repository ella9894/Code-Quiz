var questions = [
    {
        quest: "Which shows the proper way to call the taskEdit function?",
        choices: ["taskEdit[]", "taskEdit();", "taskEdit()", "taskEdit[];"],
        answer: "taskEdit();"
    },
    {
        quest: "For var candies=[“skittles”, “snickers”, “twix”, “kitkat”];, what will console.log(candies[2]); display?",
        choices: ["skittles", "snickers", "kitkat", "twix"],
        answer: "twix"
    },
    {
        quest: "What does “#page-content” refer to in the variable declaration var pageContentEl = document.querySelector('#page-content'); ?",
        choices: ["A class in the CSS file called page-content ","A class in the HTML called page-content","An id in the CSS file called page-content","An id in the HTML called page-content"],
        answer: "An id in the HTML called page-content"
    },
    {
        quest: "What happens if you don't put a 'break' after each case in a switchcase?",
        choices: ["The script will only run the case that meets the criterion", "The script will only run the case that meets the criterion", "The script will run each case, regardless of if it meets the criterion", "The script will only run the default"],
        answer: " The script will run each case, regardless of if it meets the criterion"
    },
    {
        quest: "What does if (!taskNameInput || !taskTypeInput) mean?",
        choices: ["if taskNameInput or taskTypeInput is empty/null","if taskNameInput or taskTypeInput is empty/null","if taskNameInput has input but taskTypeInput is empty/null","if taskNameInput is empty but taskTypeInput has input"],
        answer:"if taskNameInput or taskTypeInput is empty/null"
    }

];
var currentQuestion = 0;
var time = 60;
var timer;

var homeScreen = document.querySelector("#home");
var questionsEl = document.querySelector("#question");
var timeEl = document.querySelector("#time");
var options = document.querySelector("#options");
var submit = document.querySelector("#submit");
var QuizStart = document.querySelector("#start");
var initials = document.querySelector("#initials");
var comments = document.querySelector("#comments");

function beginQuiz() {
    homeScreen.setAttribute("class", "hidden");
    questionsEl.removeAttribute("class");

    timer = setInterval(clock, 1500);

    timer.textContent = time;

    getQuestion();

}

function getQuestion() {
    var nowQuestion = questions[currentQuestion];
    var questionTopic = document.getElementById("q-topic");
    questionTopic.textContent = nowQuestion.quest;

    options.innerHTML = "";

    nowQuestion.choices.forEach(function (choice, c) {
        var choicebtn = document.createElement("button");
        choicebtn.setAttribute("class", "options");
        choicebtn.setAttribute("value", choice);

        choicebtn.textContent = c + 1 + choice;

        choicebtn.onclick = AnswerValid;

        options.appendChild(choicebtn);
    });
}

function AnswerValid() {
    if (this.value== questions[currentQuestion].answer) {
        comments.textContent = "Correct!";
    } else {
        
        time -= 15;

        if (time < 0) {
            time = 0;
        }
        
        timeEl.textContent = time;
        comments.textContent = "Wrong!";
    }

    comments.setAttribute("class", "feedback");
    setTimeout(function () {
        comments.setAttribute("class", "comments hidden");
    }, 1500);

    currentQuestion++;

    if (currentQuestion===questions.length) {
        endQuiz();
    } else { getQuestion(); }
}

function endQuiz() { 
    clearInterval(timer);

    var endGame = document.querySelector("#quiz-end");
    endGame.removeAttribute("class");

    var gameScore = document.querySelector("#score");
    gameScore.textContent = time;

    questionsEl.setAttribute("class", "hidden");

}

function clock () {
    time--;
    timer.textContent = time;

    if (time <= 0) {
        endQuiz();
    }
}

function saveScore() {
    var init = initials.value.trim();
    if (init !== "") {
        var highscore = JSON.parse(window.localStorage.getItem("highscore")) || [];
        var newScore = {
            score: time,
            init: init
        };
        highscore.push(newScore);
        window.localStorage.setItem("highscore", JSON.stringify(highscore));
        window.location.href = "highscore.html";
    }
}

function verifyEnter(event) {
    if (event.key === "Enter") {
        saveScore();
    }
}

submit.onclick = saveScore;

QuizStart.onlick = beginQuiz;

initials.onkeydown = verifyEnter;
















