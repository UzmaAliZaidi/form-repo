document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');
    const fullName = document.getElementById('fullName');
    const mobileNumber = document.getElementById('mobileNumber');
    const email = document.getElementById('email');
    const username = document.getElementById('username');
    const password = document.getElementById('password');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Reset errors
        clearErrors();

        // Validate fields
        let isValid = true;

        if (!isValidFullName(fullName.value)) {
            showError('fullNameError', 'Full name should contain only alphabets');
            isValid = false;
        }

        if (!isValidMobileNumber(mobileNumber.value)) {
            showError('mobileNumberError', 'Mobile number should start with 7, 8, or 9');
            isValid = false;
        }

        if (!isValidEmail(email.value)) {
            showError('emailError', 'Please enter a valid email address');
            isValid = false;
        }

        if (username.value.trim().length < 3) {
            showError('usernameError', 'Username must be at least 3 characters long');
            isValid = false;
        }

        if (!isValidPassword(password.value)) {
            showError('passwordError', 'Password must contain at least 1 capital letter, 1 small letter, and 1 special character');
            isValid = false;
        }

        if (isValid) {
            alert('Registration successful!');
            form.reset();
        }
    });

    function showError(id, message) {
        document.getElementById(id).textContent = message;
    }

    function clearErrors() {
        const errorElements = document.querySelectorAll('.error');
        errorElements.forEach(element => element.textContent = '');
    }

    function isValidFullName(name) {
        return /^[A-Za-z\s]+$/.test(name);
    }

    function isValidMobileNumber(number) {
        return /^[789]\d{9}$/.test(number);
    }

    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function isValidPassword(password) {
        return /^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).*$/.test(password);
    }
});
