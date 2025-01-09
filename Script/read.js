const quizzes = {
    quiz1: 
    {
        correctAnswers: 
        {
            q1: "3", 
            q2: "2", 
            q3: "1", 
            q4: "3",
            q5: "1"  
        },
        
        totalQuestions: 5
    },
    
    quiz2: {
        correctAnswers: {
            q1: "1", 
            q2: "2", 
            q3: "1", 
            q4: "3", 
            q5: "2" 
        },
        
        totalQuestions: 5
    },
    
    quiz3: {
        correctAnswers:
            {
            q1: "1", 
            q2: "1", 
            q3: "2", 
            q4: "2", 
            q5: "3"  
        },
        
        totalQuestions: 5
    },

    quiz4: 
    {
        correctAnswers:
            {
            q1: "3", 
            q2: "1", 
            q3: "1", 
            q4: "2", 
            q5: "3" 
        },
        
        totalQuestions: 5
    },
    
    quiz5: 
    {
        correctAnswers: {
            q1: "1", 
            q2: "2", 
            q3: "1",
            q4: "3",
            q5: "2"  
        },
        totalQuestions: 5
    },

};


function submitQuiz(quizID) {
    const correctAnswers = quizzes[quizID].correctAnswers;

    let score = 0;
    for (const question in correctAnswers) {
        const userAnswer = document.querySelector(`#${quizID} input[name="${question}"]:checked`);
        if (userAnswer && userAnswer.value === correctAnswers[question]) {
            score++;
        }
    }

    const totalQuestions = quizzes[quizID].totalQuestions;
    const resultMessage = `
        <h3>Quiz Result</h3>
        <p>You scored <strong>${score}</strong> out of <strong>${totalQuestions}</strong>.</p>
        <p>${score === totalQuestions ? "🎉🎉🎉🎉 Congratulations! You nailed it!" : "👍 Good effort, try again for a perfect score!"}</p>
    `;

    const popup = document.getElementById("popup");
    const resultDisplay = document.getElementById("result");
    resultDisplay.innerHTML = resultMessage;
    popup.style.display = "flex";
}


    document.getElementById("popup").style.display = "none";


document.getElementById("closePopup").addEventListener("click", () => {
    document.getElementById("popup").style.display = "none";
});



function resetQuiz() {
    location.reload();
}



/////Timer////////

var countdownInterval; 
var duration = 60; 

function startQuizTimer() {
    const countdownDiv = document.querySelector('.countdown'); 

    if (!countdownDiv) {
        console.error("Countdown element not found!"); 
        return;
    }

    if (countdownInterval) {
        return;
    }

    countdownInterval = setInterval(() => {
        var minutes = Math.floor(duration / 60);   
        var seconds = duration % 60;   

        countdownDiv.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;      
        duration--;    

        if (duration < 0) {
            clearInterval(countdownInterval);
            submitQuiz( 'quiz1','quiz2','quiz3','quiz4','quiz5'); 
            return;  
        }
    }, 1000);  
}

function startTimerWhenInputChanges() {
  var radioInputs = document.querySelectorAll('input[type="radio"]');  
  for (let i = 0; i < radioInputs.length; i++) {
      radioInputs[i].addEventListener('change', () => {
          startQuizTimer(60, 'quiz1','quiz2','quiz3','quiz4','quiz5');  

      });
  }
}
startTimerWhenInputChanges()

document.querySelector('.finish-btn').addEventListener('click', function() {
  if (countdownInterval) {
      clearInterval(countdownInterval);
      countdownInterval = null;
  }
});

/////////////preperation quiz/////////////

var exams = {
    exam1: {
        correctAnswers: {
            "the number 1,000,000": "a million",
            "learning in a school": "education",
            "something that every person should have, like the right to be safe or treated fairly": "a human right",
            "existing or happening in all parts of the world": "worldwide",
            "able to wait a long time without feeling angry": "patient",
            "using your ideas to do something new and interesting": "creative",
            "something you must do or take care of": "responsibilities",
            "to respect and like someone": "to admire someone"
        },
        totalQuestions: 8
    },
    exam2: {
        correctAnswers: {
            "a polite word for 'old'": "elderly",
            "unhappy because you are not with other people": "lonely",
            "to give help to someone if they need it": "support",
            "the number 1,000,000,000": "a billion",
            "the hospitals, doctors, nurses, medicine, etc. available to you": "healthcare",
            "the things people have to make their lives comfortable and safe, for example a home or food": "living conditions",
            "knowledge and skills you get from doing and seeing things": "experience",
            "an activity where you make something with your hands": "crafts"
        },
        totalQuestions: 8
    },
    exam3: {
        correctAnswers: {
            "not able to hear, either completely or partly": "deaf",
            "able to hear": "hearing",
            "to share information with other people": "communicate",
            "a look on someone's face that shows what they feel or think": "facial expression",
            "a line of short hairs above your eye": "eyebrow",
            "the type of person that you are, that makes you different from other people": "identity",
            "to feel part of something": "included",
            "a language that you speak (where you don't write or use signs)": "spoken language"
        },
        totalQuestions: 8
    },
    exam4: {
        correctAnswers: {
            "to expect to be treated fairly, or to have the things that are necessary for life": "a right",
            "to experience physical or mental pain": "to suffer",
            "behaviour that is intended to hurt or kill somebody": "violence",
            "to damage something so badly that it no longer exists": "to destroy",
            "one of the 24 areas that the world is divided into, each with its own time": "a time zone",
            "a white or grey bird": "a dove",
            "a sign, shape or object that we use to represent something else": "a symbol",
            "a situation when someone hurts you or makes you feel bad again and again": "bullying"
        },
        totalQuestions: 8
    },
    exam5: {
        correctAnswers: {
            "connected with the Muslim religion, or with people or countries who follow it": "Islamic",
            "the act of speaking to God, especially to give thanks or ask for help": "prayer",
            "connected with God or a particular religion": "spiritual",
            "having luck and good things": "blessed",
            "being able to wait for a long time without feeling angry": "patient",
            "an organisation that gives food, money or help to people in need": "charity",
            "the ability to do things that need a lot of physical or mental effort": "strength",
            "a building where Muslims go to pray and do other religious activities": "mosque"
        },
        totalQuestions: 8
    }

};


function setupExam(examID) {
    const exam = exams[examID];
    const examContainer = document.getElementById(examID);

var buttons = document.querySelectorAll('.btn-answer input');
var inputs = document.querySelectorAll('.preparation-form input');
let selectedButton = null;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (selectedButton) {
            selectedButton.classList.remove('selected');
        }
        selectedButton = button;
        button.classList.add('selected');
    });
});

for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('focus', () => {
        for (let j = 0; j < inputs.length; j++) {
            inputs[j].classList.remove('active');
        }

        inputs[i].classList.add('active');

        if (selectedButton) {
            let previousButton = null;
            for (let k = 0; k < buttons.length; k++) {
                if (buttons[k].value === inputs[i].value) {
                    previousButton = buttons[k];
                    break;
                }
            }

            if (previousButton) {
                previousButton.style.visibility = 'visible';
            }

            inputs[i].value = selectedButton.value;
            inputs[i].style.background='orangered'
            inputs[i].style.color='white'
            inputs[i].style.fontSize='19px'
            selectedButton.classList.remove('selected');
            selectedButton.style.visibility = 'hidden';
            selectedButton = null;
        }
    });

    inputs[i].addEventListener('input', () => {
        let previousButton = null;
        for (let j = 0; j < buttons.length; j++) {
            if (buttons[j].value === inputs[i].value) {
                previousButton = buttons[j];
                break;
            }
        }

        if (previousButton) {
            previousButton.style.visibility = 'visible';
        }

        inputs[i].value = '';
    });

    
}

document.querySelector('.finish-btn').addEventListener('click', () => {
    let score = 0;

    for (let input of inputs) {
        if (!input.value.trim()) {
            alert('Please answer all questions before finishing!');
            return;
        }
    }

    for (let input of inputs) {
        const question = input.previousElementSibling.textContent.trim();
        const answer = input.value.trim();

        if (exams.exam1.correctAnswers[question] === answer) {
            score++;
        }
    }
    alert(`Test completed! Your score: ${score}/8`);
});

document.querySelector('.try-btn').addEventListener('click', () => {
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = '';
        inputs[i].classList.remove('active');
        
    }

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].style.visibility = 'visible';
        buttons[i].classList.remove('selected');
        
    }

    selectedButton = null;
});
}
setupExam('exam-one');
setupExam('exam-two');
setupExam('exam-three');
setupExam('exam-four');
setupExam('exam-five');






////////////////teacher/////////////
var teacher = document.getElementsByClassName('Teacher')[0];

console.log(teacher)



//////////////Teacher Text////////////////////
var text=document.getElementById('text')
console.log(text);
var TextParagraph=text.innerHTML="<p> Go To Exam</p>"
text.style.background="orangered"
text.style.color="white"
text.style.width="100px"
text.style.height="100px"
text.style.fontSize="20px"
text.style.textAlign="center"
text.style.borderRadius="50%"
text.style.display="none"
text.style.justifyContent="center"
text.style.alignItems="center"
text.style.position="fixed"
text.style.border=" 2px dashed white"
text.style.top="375px"
text.style.left="800px"
text.style.paddingTop="22px"


window.onscroll=function(){
    if(scrollY>600&&scrollY<4100){
        teacher.style.display='block';
        text.style.display='block';
        teacher.style.animation='imageDisplay 1s'

    }else{
          teacher.style.display='none'
        text.style.display='none';
        teacher.style.animation='imageHidden 1s'


    }

}








var images = document.querySelectorAll('img'); 
var counterElement = document.getElementById('counter');
var tryAgainButton = document.getElementById('try-again-btn')
var firstImg = null; 
var secondImg = null; 
var canClick = true; 
var score = 0;


for (var i = 0; i < images.length; i++) {
    var image = images[i]; 

    image.addEventListener('click', function () {
        if (!canClick || this.classList.contains('fixed')) 
            return;


        this.src = `images/${this.dataset.id}.jpg`; // <img src="images/1.jpg">


        if (firstImg === null) {
        
            firstImg = this;
        } 
        else if (secondImg === null) {
            
            secondImg = this;

            canClick = false;

            if (firstImg.dataset.id === secondImg.dataset.id) {

                firstImg.classList.add('fixed');
                secondImg.classList.add('fixed');

                // score increment
                score++;
                counterElement.textContent = score;


                if (score === images.length / 2) {
                    var congratsCard = document.getElementById('congrats');
                    var popupCard = document.getElementById('popupGame');

                    congratsCard.style.display = 'block';
                    popupCard.style.display = 'block';

                    document.getElementById('correct-counter').textContent = score;
                    document.getElementById('total-counter').textContent = images.length / 2;

                    
                }

                firstImg = null;
                secondImg = null;
                canClick = true;
            } 
            else {

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


console.log(images)
tryAgainButton.addEventListener('click' , function() {

    var allImages = document.querySelectorAll('img');

    for(var j = 0; j < allImages.length; j++)
    {
        var img = allImages[j];
        img.src = 'images/questionMark.jpg';
        img.classList.remove('fixed');

    }

    // rest score
    score = 0;
    counterElement.textContent = score;

});




