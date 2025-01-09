document.getElementById("logOut").addEventListener('click', function () {
    if (sessionStorage.getItem("isLoggedIn")) {
        // If the user is logged in, log them out
        sessionStorage.setItem("isLoggedIn","false")
        
       
       
        window.location.href='index.html'
    }})