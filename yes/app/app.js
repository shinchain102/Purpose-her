document.getElementById('instaForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    const instagramUsername = document.getElementById('instagram').value;

    // Send the data to the serverless function
    fetch('/api/logInstagram', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ instagram: instagramUsername }),
    })
    .then(response => response.json())
    .then(data => {
        alert('Thank you! Your Instagram username has been submitted.');
        document.getElementById('instaForm').reset(); // Clear the form
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was an error submitting your username. Please try again.');
    });
});
