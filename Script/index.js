


// Function to add event listeners for navigation
function addNavigation(element, url) {
    element.addEventListener('click', function() {
        window.location.href = url;
    });
}

// Add navigation for buttons with the class "button-one"
var learnBtns = document.getElementsByClassName("button-one");

var learnUrls = [
    'index.html',
    'Read and write.html',
    'listen.html',
    'speak.html',
    'fun.html'
];

// Loop through the buttons and add event listeners
for (var i = 0; i < learnBtns.length; i++) {
    addNavigation(learnBtns[i], learnUrls[i]);
}

// Add navigation for login and register buttons
addNavigation(document.getElementById("login"), 'logIn.html');
addNavigation(document.getElementById("register"), 'sinUp.html');





// var signLanguageButton = document.getElementById('sign-language-btn');

// function setupButton(buttonId, targetPage) {
//     var button = document.getElementById(buttonId);
//     if (button) {
//         button.onclick = function() {
//             window.location.href = targetPage;
//         };
//     }
// }

// // إعداد الأزرار باستخدام الدالة
// setupButton('world-teachers-btn', "World Teachers' Day.html");
// setupButton('older-persons-btn', "older persons.html");
// setupButton('sign-language-btn', "sign language.html");




    // عندما يتم تحميل الصفحة نقوم بتغيير الخلفية للرابط النشط
  

