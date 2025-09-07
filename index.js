// Get reference to the menu toggle checkbox
const menuToggle = document.getElementById('menu-toggle');

// Listen for scroll event
  window.addEventListener('scroll', () => {
    if (menuToggle.checked) {
      menuToggle.checked = false; // Uncheck to close dropdown
    }
  });