// reset password

const resetPasswordForm = document.getElementById('resetPasswordForm');
const resetPasswordInput = document.getElementById('resetPassword');

// Save the password to local storage on successful validation
resetPasswordForm.addEventListener('submit', function(event) {
    const password = resetPasswordInput.value;

    // Perform client-side validation
    const regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
    if (!regex.test(password)) {
        alert('Password does not meet the required criteria.');
        event.preventDefault(); // Prevent form submission if invalid
    } else {
        localStorage.setItem('resetPassword', password);
        alert('Your password has been reset and saved successfully!');
    }
});

