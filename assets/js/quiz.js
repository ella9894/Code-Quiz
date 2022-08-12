var questions = [
  {
    quest: "Which shows the proper way to call the taskEdit function?",
    choices: ["taskEdit[]", "taskEdit();", "taskEdit()", "taskEdit[];"],
    answer: "taskEdit();",
  },
  {
    quest:
      "For var candies=[“skittles”, “snickers”, “twix”, “kitkat”];, what will console.log(candies[2]); display?",
    choices: ["skittles", "snickers", "kitkat", "twix"],
    answer: "twix",
  },
  {
    quest:
      "What does “#page-content” refer to in the variable declaration var pageContentEl = document.querySelector('#page-content'); ?",
    choices: [
      "A class in the CSS file called page-content ",
      "A class in the HTML called page-content",
      "An id in the CSS file called page-content",
      "An id in the HTML called page-content",
    ],
    answer: "An id in the HTML called page-content",
  },
  {
    quest:
      "What happens if you don't put a 'break' after each case in a switchcase?",
    choices: [
      "The script will only run the case that meets the criterion",
      "The script will only run the case that meets the criterion",
      "The script will run each case, regardless of if it meets the criterion",
      "The script will only run the default",
    ],
    answer:
      "The script will run each case, regardless of if it meets the criterion",
  },
  {
    quest: "What does if (!taskNameInput || !taskTypeInput) mean?",
    choices: [
      "if taskNameInput and taskTypeInput is empty/null",
      "if taskNameInput or taskTypeInput is empty/null",
      "if taskNameInput has input but taskTypeInput is empty/null",
      "if taskNameInput is empty but taskTypeInput has input",
    ],
    answer: "if taskNameInput or taskTypeInput is empty/null",
  },
];

var currentQuestion = 0;
var time = 60;
var timer;

var homeScreen = document.querySelector("#home");
var questionsEl = document.querySelector("#question");
var timeEl = document.querySelector("#time");
var options = document.querySelector("#options");
var submit = document.querySelector("#submit");
var quizStart = document.querySelector("#start");

var comments = document.querySelector("#comments");

var highscore = JSON.parse(window.localStorage.getItem("highscore")) || [];

function beginQuiz() {
  homeScreen.setAttribute("class", "hidden");
  questionsEl.removeAttribute("class");

  timer = setInterval(clock, 1000);

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

    choicebtn.textContent = c + 1 + ". " + choice;

    choicebtn.onclick = AnswerValid;

    options.appendChild(choicebtn);
  });
}

function AnswerValid() {
  if (this.value == questions[currentQuestion].answer) {
    comments.textContent = "Correct!";
  } else {
    time -= 12;

    if (time < 0) {
      time = 0;
    }

    timeEl.textContent = time;
    comments.textContent = "Wrong!";
  }

  comments.setAttribute("class", "comments");
  setTimeout(function () {
    comments.setAttribute("class", "comments hidden");
  }, 1000);

  currentQuestion++;

  if (currentQuestion === questions.length) {
    endQuiz();
  } else {
    getQuestion();
  }
}

function endQuiz() {
  clearInterval(timer);

  var endGame = document.querySelector("#quiz-end");
  endGame.removeAttribute("class");

  var gameScore = document.querySelector("#score");
  gameScore.textContent = time;

  questionsEl.setAttribute("class", "hidden");
}

function clock() {
  time--;
  timeEl.textContent = time;

  if (time <= 0) {
    endQuiz();
  }
}

function saveScore() {
  var initials = document.querySelector("#initials").value.trim();

  if (initials !== "") {
    var newScore = {
      score: time,
      initials: initials,
    };
    highscore.push(newScore);
    window.localStorage.setItem("highscore", JSON.stringify(highscore));
    window.location.href = "highscore.html";
  }
}

function verifyEnter(event) {
  if (event?.key === "Enter") {
    saveScore();
  }
}

submit.addEventListener("click", saveScore);

quizStart.addEventListener("click", beginQuiz);

onkeydown = function () {
  verifyEnter();
};


