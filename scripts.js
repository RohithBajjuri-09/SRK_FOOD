document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the default way

    // Capture form data
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();

    // Validate the data
    if (name === "" || email === "" || phone === "" || message === "") {
        alert('Please fill in all fields.');
        return;
    }

    // Basic email validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Send data to Firebase
    SRKRestaurantDB.push({
        name: name,
        email: email,
        phone: phone,
        message: message
    }).then(() => {
        alert('Form submitted successfully!');
        // Clear the form fields
        document.getElementById('contactForm').reset();
    }).catch((error) => {
        console.error('Error writing new message to Firebase Database', error);
    });
});