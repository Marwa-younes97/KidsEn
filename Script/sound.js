// Sounds buttons navigation

var soundBtn = document.querySelectorAll(".btn");
console.log(soundBtn);

var soundUrl = [
    'Seasons.html',
    
    "What Color Is it.html",
    'Shapes.html',
    'Days of the Week.html'
   
];

for (var i = 0; i <soundBtn.length; i++) {
    addNavigation(soundBtn[i], soundUrl[i]);
}