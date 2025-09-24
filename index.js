// Reference to the menu toggle checkbox
const menuToggle = document.getElementById('menu-toggle');

  window.addEventListener('scroll', () => {
    if (menuToggle.checked) {
      menuToggle.checked = false; // Uncheck to close dropdown
    }
  });

  const toggle = document.getElementById('dark-toggle');
const tooltip = document.querySelector('.tool-tip');

// Apply saved theme on page load
document.addEventListener('DOMContentLoaded', () => {
  const savedMode = localStorage.getItem('theme');
  
  if (savedMode === 'dark') {
    document.body.classList.add('dark-mode');
    toggle.checked = true;
    tooltip.innerHTML = 'Change display to light mode';
  } else {
    tooltip.innerHTML = 'Change display to dark mode';
  }
});

// Toggle dark mode
toggle.addEventListener('change', () => {
  if (toggle.checked) {
    document.body.classList.add('dark-mode');
    localStorage.setItem('theme', 'dark');
    tooltip.innerHTML = 'Change display to light mode';
  } else {
    document.body.classList.remove('dark-mode');
    localStorage.setItem('theme', 'light');
    tooltip.innerHTML = 'Change display to dark mode';
  }
});
