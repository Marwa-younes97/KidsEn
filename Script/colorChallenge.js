var colors = ["Red", "Blue", "Green", "Yellow", "Purple", "Orange"];
var targetColor = "";
var score = 0;
var timeLeft = 30;

const targetColorElement = document.getElementById("target-color-name");
const gameContainer = document.getElementById("colors");
const scoreElement = document.getElementById("score");
const timerElement = document.getElementById("time-left");

// Function to start the game
function startGame() {
    setNewTargetColor();
    createColorBoxes();
    const timerInterval = setInterval(() => {
        timeLeft--;
        timerElement.textContent = `Time Left: ${timeLeft}s`;

        if (timeLeft === 0) {
            clearInterval(timerInterval);
            alert(`Game Over! Your final score is ${score}.`);
            resetGame();
        }
    }, 1000);
}

// Function to set a new target color
function setNewTargetColor() {
    targetColor = colors[Math.floor(Math.random() * colors.length)];
    targetColorElement.textContent = targetColor;
}

// Function to create color boxes
function createColorBoxes() {
    gameContainer.innerHTML = ""; 
    const correctBoxIndex = Math.floor(Math.random() * 6);

    for (let i = 0; i < 6; i++) {
        const box = document.createElement("div");
        const color = i === correctBoxIndex ? targetColor : getRandomColor();
        box.className = "color-palette";
        box.style.backgroundColor = color.toLowerCase();

        box.addEventListener("click", () => {
            if (color === targetColor) {
                score++;
                scoreElement.textContent = `Score: ${score}`;
                setNewTargetColor();
                createColorBoxes();
            } else {
                alert("Wrong choice! Game over.");
                resetGame();
            }
        });

        gameContainer.appendChild(box);
    }
}

// Function to get a random color
function getRandomColor() {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    return randomColor === targetColor ? getRandomColor() : randomColor;
}

// Function to reset the game
function resetGame() {
    score = 0;
    timeLeft = 30;
    scoreElement.textContent = `Score: ${score}`;
    timerElement.textContent = `Time Left: ${timeLeft}s`;
    setNewTargetColor();
    createColorBoxes();
}

// Start the game
startGame();
