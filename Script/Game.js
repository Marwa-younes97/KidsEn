var images = document.querySelectorAll('img');
var counterElement = document.getElementById('counter');
var tryAgainButton = document.getElementById('try-again-btn');
var firstImg = null;
var secondImg = null;
var canClick = true;
var score = 0;

for (var i = 0; i < images.length; i++) {
    var image = images[i];

    image.addEventListener('click', function () {
        if (!canClick || this.classList.contains('fixed'))
            return;

        this.src = `images/${this.dataset.id}.jpg`; 

        if (firstImg === null) {
            firstImg = this;
        } else if (secondImg === null) {
            secondImg = this;
            canClick = false;

            if (firstImg.dataset.id === secondImg.dataset.id) {
                firstImg.classList.add('fixed');
                secondImg.classList.add('fixed');

                
                score++;
                counterElement.textContent = score;

                
                if (score === (images.length / 2) - 0.5) {
                    var congratsCard = document.getElementById('congrats');
                    congratsCard.style.display = 'block';

                    document.getElementById('correct-counter').textContent = score;
                    document.getElementById('total-counter').textContent = (images.length / 2) - 0.5;
                }

                firstImg = null;
                secondImg = null;
                canClick = true;
            } else {
                setTimeout(() => {
                    firstImg.src = 'images/questionMark.jpg';
                    secondImg.src = 'images/questionMark.jpg';
                    firstImg = null;
                    secondImg = null;
                    canClick = true;
                }, 1000);
            }
        }
    });
}

if (tryAgainButton) {
    tryAgainButton.addEventListener('click', function () {
        location.reload(); 

        score = 0;
        counterElement.textContent = score;
    });
}

var tryAgainButtonCongrats = document.getElementById('try-again-btn-congrats');
if (tryAgainButtonCongrats) {
    tryAgainButtonCongrats.addEventListener('click', function () {
        location.reload(); 
    });
}

var closeButton = document.getElementById('close-btn');
if (closeButton) {
    closeButton.addEventListener('click', function () {
        const congratsCard = document.getElementById('congrats');
        congratsCard.style.display = 'none';
    });
}