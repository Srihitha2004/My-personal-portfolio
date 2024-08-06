$(document).ready(function() {
    $('#contactForm').submit(function(e) {
        e.preventDefault(); // Prevent the default form submission
        
        // Basic validation
        var isValid = true;
        $('#contactForm input, #contactForm textarea').each(function() {
            if ($(this).val().trim() === '') {
                isValid = false;
                $(this).addClass('is-invalid');
            } else {
                $(this).removeClass('is-invalid');
            }
        });

        if (isValid) {
            // Show alert box on successful validation
            alert('Your message was sent, thank you!');
            $('#form-message-success').show();
            // Optionally, you can clear the form fields
            $('#contactForm')[0].reset();
        } else {
            // Optionally, show a warning message if validation fails
            $('#form-message-warning').text('Please fill out all required fields.');
        }
    });
});
