document.addEventListener("DOMContentLoaded", function () {
    // Set a timeout to show the form after the logo animation
    setTimeout(function () {
        const logo = document.querySelector('.logo'); // Select the logo
        logo.style.display = 'none'; // Hide the logo after the animation
        const formContainer = document.getElementById('formContainer');
        const formContainerS = document.getElementById('formContainerS');

        formContainer.style.display = 'block'; // Show the form container
        formContainer.classList.add('show');

        formContainerS.style.display = 'block'; // Show the form container
        formContainerS.classList.add('show');
    }, 3100); // Match this with the total duration of the logo animation
});

document.getElementById('loadingButton').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the default anchor behavior

    // Change button text and add loading class
    this.textContent = 'Loading...';
    this.classList.add('loading');

    // Simulate loading time (e.g., 2 seconds)
    setTimeout(() => {
        // Redirect to the desired URL
        window.location.href = '/result.html';
    }, 2000); // Change 2000 to the desired loading time in milliseconds
});

function collectFormData() {
    const username = document.getElementById('usernameValue').value;
    localStorage.setItem('username', username);
    const AccountName = document.getElementById('AccountNameValue').value;
    localStorage.setItem('AccountName', AccountName);
    const MTASerial = document.getElementById('MTASerialValue').value;
    localStorage.setItem('MTASerial', MTASerial);
    const JoinValue = document.getElementById('JoinValue').value;
    localStorage.setItem('JoinValue', JoinValue);
    const AcceptValue = document.getElementById('AcceptValue').value;
    localStorage.setItem('AcceptValue', AcceptValue);

    const statsValue = document.getElementById('statsValue').value;
    localStorage.setItem('statsValue', statsValue);
    const punishlogValue = document.getElementById('punishlogValue').value;
    localStorage.setItem('punishlogValue', punishlogValue);
    const historyValue = document.getElementById('historyValue').value;
    localStorage.setItem('historyValue', historyValue);
}
