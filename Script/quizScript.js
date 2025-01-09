function correctTheAnswers(correctAnswers) {
    var score = 0;
    var questions = document.querySelectorAll('.question');

    // Loop through questions to calculate the score
    for (var i = 0; i < questions.length; i++) {
        var question = questions[i];
        var selectedAnswer = question.querySelector('button.selected');

        if (selectedAnswer) {
            var userAnswer = selectedAnswer.getAttribute('data-answer');

            // Compare the selected answer with the correct answer
            if (userAnswer === correctAnswers[i + 1]) {
                score++;
            }
        }
    }

    // Display the result
    var result = document.getElementById('result');
    result.textContent = `You scored ${score} out of ${Object.keys(correctAnswers).length}.`;
    result.style.color = score === Object.keys(correctAnswers).length ? 'green' : 'red';

    // Disable all answer buttons after submission
    var answerButtons = document.querySelectorAll('.answer');
    for (var i = 0; i < answerButtons.length; i++) {
        answerButtons[i].disabled = true;
    }
}

// Handle button clicks for true/false answers
var answerButtons = document.querySelectorAll('.answer');
for (var i = 0; i < answerButtons.length; i++) {
    answerButtons[i].addEventListener('click', function () {
        // Remove the "selected" class from all buttons in the same question
        var parent = this.closest('.question');
        var buttons = parent.querySelectorAll('.answer');
        for (var j = 0; j < buttons.length; j++) {
            buttons[j].classList.remove('selected');
        }

        // Add the "selected" class to the clicked button
        this.classList.add('selected');
    });
}







function correctTheChooseAnswers(chooseAnswers){
    var score = 0;

    for (var key in chooseAnswers) {
        var selectedAnswer = document.querySelector(`input[name="${key}"]:checked`);
        if (selectedAnswer && selectedAnswer.value === chooseAnswers[key]) {
            score++;
        }   
    }

    var result = document.getElementById('result');
    result.textContent = `You scored ${score} out of 4.`;
    result.style.color = score === 4 ? 'green' : 'red';
}


