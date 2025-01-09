

function dragDrop(correctAnswers){
    var draggableItems = document.querySelectorAll('.answers');
var dropZones = document.querySelectorAll('.answers-place');

// Add dragstart event to the draggable items
draggableItems.forEach(item => {
    item.addEventListener('dragstart', event => {
        event.dataTransfer.setData('text', event.target.id); // Store the id of the dragged element
    });
});

// Add dragover and drop events to the drop zones
dropZones.forEach(zone => {
    zone.addEventListener('dragover', event => {
        event.preventDefault(); // Allow drop by preventing default behavior
    });

    zone.addEventListener('drop', event => {
        event.preventDefault();
        var draggedId = event.dataTransfer.getData('text'); // Get the id of the dragged element
        var draggedElement = document.getElementById(draggedId);
        event.target.appendChild(draggedElement).classList.add("answer-style"); // Append the dragged element to the drop zone
    });
});

// Finish and Try Again Buttons
var finishButton = document.querySelector('.fa-flag').parentElement;
var tryAgainButton = document.querySelector('.fa-repeat').parentElement;

// Correct answers (simple check using order)


// Finish Button Functionality
finishButton.addEventListener('click', () => {
    dropZones.forEach((zone, index) => {
        const word = zone.querySelector('.answers'); // Get the word inside the zone
        if (word && word.id === correctAnswers[index]) {
            zone.style.border = '2px solid green'; // Correct
        } else if (word) {
            zone.style.border = '2px solid red'; // Incorrect
        } else {
            zone.style.border = '2px solid orange'; // Empty
        }
    });
});

// Try Again Button Functionality
tryAgainButton.addEventListener('click', () => {
    // Select the original container where draggable items are placed initially
  window.location.reload()
});



}
