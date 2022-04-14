//GIVEN I am taking a code quiz
//WHEN I click the start button
//THEN a timer starts and I am presented with a question
//WHEN I answer a question
//THEN I am presented with another question
//WHEN I answer a question incorrectly
//THEN time is subtracted from the clock
//WHEN all questions are answered or the timer reaches 0
//THEN the game is over
//WHEN the game is over
//THEN I can save my initials and score
//document.getElelemtnbyID("quiz-score");

var score = 0;

var butnEl = document.querySelector("#start");
var Questions = document.querySelector("#");

//Create variables to store quiz question
var question1 = document.createElement("p");
    question1.className = "quest";
    question1.textContent = "Which option shows the correct way to call the taskEdit function?";
question1.appendChild();

var question2 = document.createElement("p");
question2.className = "quest";
question2.textContent = "For var candies=[“skittles”, “snickers”, “twix”, “kitkat”];, what will console.log(candies[2]); display?";
question2.appendChild();

var question3 = document.createElement("p");
question3.className = "quest";
question3.textContent= "What does page-content refer to in the variable declaration var pageContentEl = document.querySelector('#page-content') ?";
question3.appendChild();

var question4 = document.createElement("p");
question4.className = "quest";
question4.textContent = "What happens if you don’t put a ‘break’ after each case in a switchcase?"
question4.appendChild();

var question5 = document.createElement("p");
question5.className = "quest";
question5.textContent = "What does if (!movieNameInput || !movieTypeInput) mean?";
question5.appendChild();





var createQuestion = function () {
    
};
b

//Use mouse-click events to start the quiz
butnEl.addEventListener("click", createQuestion);
//Write for loops to cycle through the quiz
//Write conditional statements to determine wrong and right answers
for (var i = 0; i < Questions.length; i++) { 
    var response = window.prompt(questions[i].prompt);
    if (response == questions[i].answer) {
        score + 10;
        alert("Correct");
    }
    else {
        alert("WRONG!");
    }
}


//Use key-press events to receive user input in the form of answers to quiz questions

//Create a time limit for the game using time functions



//Use client-side storage to store high scores

