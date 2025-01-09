var choices=[
    "rock",
    "paper",
    "scissors"
]
var result=document.getElementById("result")
var userChoice=document.getElementById("user-choice")
var comChoice=document.getElementById("computer-choice")

    

document.getElementById("rock").addEventListener("click",function(){
    
    
       userChoice.innerText="rock";
    var ComputerChoice=+(Math.floor(Math.random()*3))
    console.log(ComputerChoice)

    switch(ComputerChoice){
        case 0:
            comChoice.innerText="rock"
            result.innerText="It's a Draw"

            break;
        case 1:
            comChoice.innerText="paper"
            result.innerText="Computer Wins!"
            break;
        case 2:
             comChoice.innerText="scissors"
            result.innerText="You Win !"
            break;

    }

})
document.getElementById("paper").addEventListener("click",function(){

   
       userChoice.innerText="paper";
    var ComputerChoice=+(Math.floor(Math.random()*3))
    console.log(ComputerChoice)

    
    switch(ComputerChoice){
        case 0:
            comChoice.innerText="rock"
            result.innerText="You Wins !"

            break;
        case 1:
            comChoice.innerText="paper"
            result.innerText="It's a Draw"
            break;
        case 2:
             comChoice.innerText="scissors"
            result.innerText="Computer Wins!"
            break;

    }

})
document.getElementById("scissor").addEventListener("click",function(){

   
    userChoice.innerText="scissors";
 var ComputerChoice=+(Math.floor(Math.random()*3))
 console.log(ComputerChoice)

 
 switch(ComputerChoice){
     case 0:
         comChoice.innerText="rock"
         result.innerText="Computer Wins!"

         break;
     case 1:
         comChoice.innerText="paper"
         result.innerText="You Wins !"
         break;
     case 2:
          comChoice.innerText="scissors"
         result.innerText="It's a Draw"
         break;

 }

})
document.getElementById("restart-btn").addEventListener("click", function(){
    location.reload()
})