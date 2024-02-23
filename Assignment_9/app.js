window.onload = function() {
    document.getElementById("registrationForm").onsubmit = function(event) {
        event.preventDefault(); // Prevent form submission

        // Validation functions
        function validateEmail(email) {
            // Regular expression for email validation
            var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        }

        function validateAge(age) {
            // Check if age is numeric and within the range 1 to 120
            return !isNaN(age) && parseInt(age) >= 1 && parseInt(age) <= 120;
        }

        function validatePassword(password) {
            // Password strength validation: at least 8 characters, including uppercase, lowercase, numeric, and special characters
            var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
            return passwordRegex.test(password);
        }

        function validateZipCode(zipCode) {
            // Regular expression for zip code validation (12345 or 12345-6789)
            var zipCodeRegex = /^\d{5}(?:-\d{4})?$/;
            return zipCodeRegex.test(zipCode);
        }

        function validateCheckbox(checkbox) {
            // Check if checkbox is checked
            return checkbox.checked;
        }

        function validateURL(url) {
            // Regular expression for URL validation
            var urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
            return urlRegex.test(url);
        }

        function validateDate(date) {
            // Check if the entered date is not set in the future
            var currentDate = new Date();
            var inputDate = new Date(date);
            return inputDate <= currentDate;
        }

        function validateFileSize(fileInput, maxSizeInBytes) {
            // Check if the uploaded file size is within the specified limit
            return fileInput.files[0].size <= maxSizeInBytes;
        }

        // Main validation function
        function validateForm() {
            var email = document.getElementById("email").value;
            var age = document.getElementById("age").value;
            var password = document.getElementById("password").value;
            var confirmPassword = document.getElementById("confirmPassword").value;
            var zipCode = document.getElementById("zipCode").value;
            var checkbox = document.getElementById("termsCheckbox");
            var url = document.getElementById("url").value;
            var date = document.getElementById("date").value;
            var fileInput = document.getElementById("fileInput");
            var country = document.getElementById("country").value;

            var isValid = true;

            // Perform individual validations
            if (!validateEmail(email)) {
                isValid = false;
                alert("Please enter a valid email address.");
            }
            if (!validateAge(age)) {
                isValid = false;
                alert("Please enter a valid age (between 1 and 120).");
            }
            if (password !== confirmPassword) {
                isValid = false;
                alert("Passwords do not match.");
            }
            if (!validateZipCode(zipCode)) {
                isValid = false;
                alert("Please enter a valid zip code.");
            }
            if (!validateCheckbox(checkbox)) {
                isValid = false;
                alert("Please agree to the terms and conditions.");
            }
            if (!validateURL(url)) {
                isValid = false;
                alert("Please enter a valid URL.");
            }
            if (!validateDate(date)) {
                isValid = false;
                alert("Please select a date that is not in the future.");
            }
            if (!validateFileSize(fileInput, 1048576)) { // Limiting file size to 1MB (1048576 bytes)
                isValid = false;
                alert("File size exceeds the limit (1MB).");
            }
            if (country === "Select Country") {
                isValid = false;
                alert("Please select a country.");
            }
            if (!validatePassword(password)) {
                isValid = false;
                alert("Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one numeric digit, and one special character.");
            }

            // If all validations pass, submit the form
            if (isValid) {
                document.getElementById("registrationForm").submit();
            }
        }

        // Call the main validation function on form submission
        validateForm();
    };
};