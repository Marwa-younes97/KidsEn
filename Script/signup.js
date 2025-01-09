const form = document.getElementById('signForm');
const firstName = document.getElementById('fristName');
const lastName = document.getElementById('lastName');
const residence = document.getElementById('residence');
const email = document.getElementById('emailAddress');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');

// On form submit, store values in localStorage
form.addEventListener('submit', function (event) {
    event.preventDefault();
    // Check if passwords match
    if (password.value !== confirmPassword.value) {
        alert('Passwords do not match!');
        event.preventDefault();
        return;
    }

    // Validate email format
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    if (!emailPattern.test(email.value)) {
        alert('Invalid email format.');
        event.preventDefault();
        return;
    }

    // Validate password format

    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if (!passwordPattern.test(password.value)) {
        alert(
            'Password must be at least 8 characters long, and include at least one uppercase letter, one lowercase letter, and one number.'
        );
        event.preventDefault();
        return;
    }

    // Save all input fields to localStorage
    localStorage.setItem('fristName', firstName.value);
    localStorage.setItem('lastName', lastName.value);
    localStorage.setItem('residence', residence.value);
    localStorage.setItem('email', email.value);
    localStorage.setItem('password', password.value);
    localStorage.setItem('confirmPassword', confirmPassword.value);

    alert('Account created successfully!');

    // Set session storage to indicate the user is logged in
    sessionStorage.setItem('isLoggedIn', true);

    // Redirect to home page
    window.location.href = 'index.html'; // Replace "home.html" with the actual home page URL
});