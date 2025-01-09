function guessThePhoto(intialWord,namesArray){
    var wordContainer = document.getElementById("word");
    var images = document.querySelectorAll('.draggable');
    var feedback = document.getElementById('feedback');
    var audioCorrect = document.getElementById('seccees_audio');
    var audioInCorrect = document.getElementById('incorrect_audio');
    var currentWord = intialWord;
    wordContainer.textContent = currentWord;

 images.forEach(function(img){
     img.addEventListener('click', function(){
         checkImage(img);
     });
 });
 var ballon = document.createElement('img');
 function checkImage(img){
     var selected_img = img.getAttribute('data-name');

     if(currentWord === selected_img){
         feedback.textContent = "Great!";
         feedback.classList.add('correct-feedback');
         feedback.style.color = "green";
         img.classList.add('correct');
         audioCorrect.play();
         
         ballon.src = "gameImages/ballon.png";
         ballon.style.marginLeft = "1050px";
         ballon.classList.add('ballon');
         document.body.appendChild(ballon);

         setTimeout(function(){
             reset();
         }, 1000);
     }
     else {
         feedback.textContent = "Oops! Try again.";
         feedback.style.color = "red";
         img.classList.add('incorrect');
         audioInCorrect.play();

         setTimeout(function(){
             img.classList.remove('incorrect');
         }, 500);
     }
 }
 function reset(){
   
    currentWord = namesArray[Math.floor(Math.random() * namesArray.length)];
    wordContainer.textContent = currentWord;
    feedback.textContent = '';
    feedback.classList.remove('correct-feedback');
    document.body.removeChild(ballon);

    images.forEach(function(img){
        img.classList.remove('correct');
    });
 
}
}