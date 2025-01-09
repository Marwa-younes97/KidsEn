document.addEventListener('DOMContentLoaded', function() {
    // Get all the buttons and cards
    const buttons = document.querySelectorAll('.letter-button');
    const cards = document.querySelectorAll('.card-content');
  
    // Add event listeners to the buttons
    buttons.forEach(button => {
      button.addEventListener('click', function() {
        const letter = button.getAttribute('data-letter');
  
        // Highlight the active button
        buttons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
  
        // Show or hide cards based on the selected letter
        cards.forEach(card => {
          const cardText = card.querySelector('span').textContent.trim();
          
          if (letter === "ALL" || cardText.startsWith(letter)) {
            card.style.display = 'block';  // Show the card
          } else {
            card.style.display = 'none';  // Hide the card
          }
        });
      });
    });
  });
  
///////////////////////////////////////////
function navigationCards(elementId, targetUrl) {
  document.getElementById(elementId).addEventListener("click", function() {
      window.location.href = targetUrl;
  });
}
 //Songs  navigation cards

navigationCards("A", "letterA.html");
navigationCards("Ant", "Ant.html");
navigationCards("Apple", "Apple Song.html");
navigationCards("B", "letterB.html");
navigationCards("Bee", "Bee.html");
navigationCards("Banana", "Banana.html");
navigationCards("C", "letterC.html");
navigationCards("Car", "Car.html");
navigationCards("Camel", "Camel.html");
navigationCards("D", "letterD.html");
navigationCards("Dog", "Dog.html");
navigationCards("E", "letterE.html");
navigationCards("Elephant", "Elephant.html");
navigationCards("Egg", "Egg.html");







