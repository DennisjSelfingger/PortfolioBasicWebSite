document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault(); // prevent the form from auto submitting

    const formData = new FormData(this); // get form data

    // create a new list item and add it to the comments list
    const comment = document.getElementById('comment').value;
    const newComment = document.createElement('li');
    newComment.textContent = comment;
    document.getElementById('commentsList').appendChild(newComment);

    // Send form data to the PHP script via AJAX
    fetch('contact.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        alert(data); // show the PHP response as an alert, either success or error message
    })
    .catch(error => {
        alert('There was an error sending your message. Please try again later.');
    });

    // clear the comment textarea
    document.getElementById('comment').value = '';
});
