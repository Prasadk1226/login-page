// Function to handle form submission
document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent page reload on form submission

    // Get the user input values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Store name in localStorage and email in sessionStorage
    localStorage.setItem('userName', name);
    sessionStorage.setItem('userEmail', email);

    // Display stored information
    displayStoredInfo();
});

// Function to display stored information
function displayStoredInfo() {
    const storedName = localStorage.getItem('userName') || 'Not stored yet';
    const storedEmail = sessionStorage.getItem('userEmail') || 'Not stored yet';

    document.getElementById('storedName').innerText = `Name: ${storedName}`;
    document.getElementById('storedEmail').innerText = `Email: ${storedEmail}`;
}

// Display stored information on page load
window.onload = function() {
    displayStoredInfo();
};
