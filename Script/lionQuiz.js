// Correct answers object
var correctAnswers = {
    1: 'true',  // Q1: True
    2: 'false', // Q2: False
    3: 'true',  // Q3: True
    4: 'false'  // Q4: False
};



// Submit button event listener
document.getElementById('submitBtn').addEventListener('click', function () {
    correctTheAnswers(correctAnswers);
});