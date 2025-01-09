// Save login details in localStorage on form submission
document.getElementById('submit').addEventListener('click', function() {
    var usernameOrEmail = document.getElementById('logIn').value;
    var password = document.getElementById('password').value;

    if (usernameOrEmail && password) {
      var user=localStorage.getItem('email')
      var passW=localStorage.getItem('password')
        if(usernameOrEmail==user&&password==passW){
            localStorage.setItem('usernameOrEmail', usernameOrEmail);
            sessionStorage.setItem("isLoggedIn", true);
        // alert('Your login details have been saved.');
        window.location.href='index.html'
        }
        if (usernameOrEmail!=user&&password==passW) {
            alert("please check your email");
        }
        if(usernameOrEmail==user&&password!=passW){
            alert("password isn't correct");
        }
        if(usernameOrEmail!=user&&password!=passW) {
            alert(" You have no account, Sign up please");
            window.location.href = 'sinUp.html';
        }

        
    } else {
        alert('Please fill in both fields.');
    }
});

// Pre-fill the form with saved username or email
window.onload = function() {
    var savedUsername = localStorage.getItem('usernameOrEmail');
    if (savedUsername) {
        document.getElementById('logIn').value = savedUsername;
    }
};

