document.getElementById('subscribe-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const emailInput = document.getElementById('email-input');
    const formMessage = document.getElementById('form-message');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(emailInput.value)) {
        formMessage.innerHTML = 'Thank you for subscribing!';
        formMessage.className = 'success-message';

        sendEmail(emailInput.value);

        emailInput.value = '';
    } else {

        formMessage.innerHTML = 'Please enter a valid email address.';
        formMessage.className = 'error-message';
    }
});

function sendEmail(email) {
    emailjs.send("your_service_id", "your_template_id", {
        email: email
    })
    .then(function(response) {
        console.log('Success:', response);
    }, function(error) {
        console.log('Failed:', error);
    });
}
