// When Start button is pressed, inititate 1st question
// 1st question is displayed with set timer of 10 seconds, 4 choices
// When choice is selected, function will compare the answer
// If choice is not correct, Wrong++, display correct answer, then move onto next question
// If choice is correct, Correct++, congratulate, then move onto next question
// After 10 questions, display the number of correct and wrong answers
// Restart button

// GLOBAL VARIABLES ========================
var questionsList = [
  {
    question: "Who makes the F-150 truck?",
    answerList: ["Cheverolet", "Nissan", "GMC", "Ford"],
    answer: 3
  },
  {
    question: "What generation is a 2009 BMW 335i?",
    answerList: ["E36", "E46", "E90", "F30"],
    answer: 2
  },
  {
    question:
      "What year did the Honda NSX officially become available to purchase?",
    answerList: ["1989", "1990", "1991", "1992"],
    answer: 1
  },
  {
    question: 'What car manufacturer for naming their cars as "classes"?',
    answerList: ["Mercedes", "BMW", "Alfa Romeo", "Jaquar"],
    answer: 0
  },
  {
    question: "What car did Lexus make to compete with the E60 BMW M5 ",
    answerList: ["GS300", "LS400", "GS400", "ES350"],
    answer: 2
  }
];

var choicesList = [];
var correct = 0;
var incorrect = 0;
var notAnswered = 0;
var time = 0;
var number = 10;
var intervalId;

var questionDisplayed = $(".questions").text(questionsList[0].question);
var choiceDisplayed0 = $("#choice0").text(questionsList[0].answerList[0])
var choiceDisplayed1 = $("#choice1").text(questionsList[0].answerList[1])
var choiceDisplayed2 = $("#choice2").text(questionsList[0].answerList[2])
var choiceDisplayed3 = $("#choice3").text(questionsList[0].answerList[3])





// FUNCTIONS ===============================

// Start Game
function startGame() {
  $(".jumbotron").show();
  $("#startBtn").hide();
  correct = 0;
  incorrect = 0;
  notAnswered = 0;

  timer();


  //Testing
  //console.log(questionsList[0].question)
}


// Interval
function timer () {
    clearInterval();
    intervalId = setInterval(decrement, 1000);
}

function decrement () {
    number--;
    $('#timer').text('Timer: ' + number);
    if (number === 0) {
        stop();
    }
}

function stop () {
    clearInterval(intervalId);
}

function changeQuestion() {}




// MAIN PROCESS ============================

$(document).ready(function() {
  $(".jumbotron").hide();

  $("#startBtn").on("click", function() {
    startGame();
  });
});

// RANDOM TESTING ==========================
