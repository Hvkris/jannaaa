document.addEventListener("DOMContentLoaded", function () {
    const loginBtn = document.getElementById('loginBtn');
    const nameInput = document.getElementById('nameInput');
    const errorMessage = document.getElementById('error-message');
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    let currentPage = 0;

    // Pages
    const pages = document.querySelectorAll('.page');

    // Function to show the correct page
    function showPage(index) {
        pages.forEach((page, i) => {
            if (i === index) {
                page.classList.add('active');
            } else {
                page.classList.remove('active');
            }
        });
    }

    // Initially show the login page
    showPage(currentPage);

    // Login Button Logic
    loginBtn.addEventListener('click', () => {
        const name = nameInput.value.trim();
        if (name.toLowerCase() === "janna marie precious") {
            errorMessage.textContent = "";  // Clear error message
            currentPage = 1; // Move to Invitation Page
            showPage(currentPage); // Show invitation page
        } else {
            errorMessage.textContent = "Invalid. Please enter the correct name.";  // Show error message
        }
    });

    // Yes Button - Go to Thank You Page (third page)
    yesBtn.addEventListener('click', () => {
        currentPage = 2; // Move to Thank You Page
        showPage(currentPage);
    });

    // No Button - Show prompt
    noBtn.addEventListener('click', () => {
        alert("Oh no! Choosing 'No' is not allowed. Dang it!");  // Show prompt
    });
});
