window.onload = function() {
    var links = document.querySelectorAll('nav ul li a');
    var currentPage = window.location.pathname.split('/').pop().toLowerCase() || 'index.html';

    links.forEach(link => {
        var linkPage = link.href.split('/').pop().toLowerCase(); 

        if (linkPage === currentPage) {
            link.parentElement.style.backgroundColor = "orangered"; 
            link.style.color = "white";
        } else {
            link.parentElement.style.backgroundColor = ''; 
            link.style.color = ''; 
        }
    });
};
