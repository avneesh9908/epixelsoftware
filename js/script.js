document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const password = document.getElementById('password').value;

    let isValid = true;

    // Email validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert('Invalid email format');
        isValid = false;
    }

    // Phone number validation
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phoneNumber)) {
        alert('Phone number must be 10 digits');
        isValid = false;
    }

    // Password validation
    if (password.length < 8) {
        alert('Password must be at least 8 characters');
        isValid = false;
    }

    if (isValid) {
        const formData = {
            first_name: firstName,
            last_name: lastName,
            email: email,
            phone_number: phoneNumber,
            password: password
        };
        console.log(formData);
    }
});
