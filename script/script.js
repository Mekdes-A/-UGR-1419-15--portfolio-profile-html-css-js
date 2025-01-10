// Select the toggle button and dropdown menu
const toggleButton = document.getElementById('menu-toggle');
const dropdownMenu = document.getElementById('dropdown-menu');

// Add click event listener to the toggle button
toggleButton.addEventListener('click', () => {
    // Toggle the "active" class on the dropdown menu
    dropdownMenu.classList.toggle('active');
});