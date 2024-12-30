document.getElementById('reservation-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Collecting the form input values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const guests = document.getElementById('guests').value;

    // Check if all fields are filled
    if (name && email && date && time && guests) {
        // Display confirmation message
        document.getElementById('reservation-message').innerText = `Thank you, ${name}! Your reservation for ${guests} guests on ${date} at ${time} is confirmed.`;
        document.getElementById('reservation-message').style.color = 'green'; // Adding a color change to confirmation message
    } else {
        // Display an error message if fields are missing
        document.getElementById('reservation-message').innerText = 'Please fill in all fields.';
        document.getElementById('reservation-message').style.color = 'red'; // Adding a color change to error message
    }
});
