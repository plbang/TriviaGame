// When Start button is pressed, inititate 1st question
// 1st question is displayed with set timer of 10 seconds, 4 choices
// When choice is selected, function will compare the answer
// If choice is not correct, Wrong++, display correct answer, then move onto next question
// If choice is correct, Correct++, congratulate, then move onto next question
// After 10 questions, display the number of correct and wrong answers
// Restart button


// GLOBAL VARIABLES ========================
var questions = [];
var choices = [];
var correct = 0;
var incorrect = 0;
var notAnswered = 0;
var time = 0;

// FUNCTIONS ===============================

// Start Game

function startGame () {
    $('.jumbotron').show();
    $('#startBtn').hide();
    
}

function changeQuestion () {

}



// MAIN PROCESS ============================

$(document).ready(function(){
    $('.jumbotron').hide();

$('#startBtn').on('click', function() {
    startGame();
});




});



// RANDOM TESTING ==========================