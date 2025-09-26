
const menuToggle = document.getElementById('menu-toggle');
const menuTooltip = document.querySelector('.js-menu-tooltip');

menuToggle.addEventListener('click', () => {
  if (menuTooltip.innerHTML === 'Open Menu') {
    menuTooltip.innerHTML = 'Close Menu';
  } else {
    menuTooltip.innerHTML = 'Open Menu';
  }
})

window.addEventListener('scroll', () => {
  if (menuToggle.checked) {
    menuToggle.checked = false; // Uncheck to close dropdown
  }
});

const toggle = document.getElementById('dark-toggle');
const themeTooltip = document.querySelector('.js-theme-tooltip');

// Toggle dark mode
toggle.addEventListener('change', () => {
  if (toggle.checked) {
    document.body.classList.add('dark-mode');
    localStorage.setItem('theme', 'dark');
    themeTooltip.innerHTML = 'Change display to light mode';
  } else {
    document.body.classList.remove('dark-mode');
    localStorage.setItem('theme', 'light');
    themeTooltip.innerHTML = 'Change display to dark mode';
  }
});

// Apply saved theme on page load
document.addEventListener('DOMContentLoaded', () => {
  const savedMode = localStorage.getItem('theme');
  
  if (savedMode === 'dark') {
    document.body.classList.add('dark-mode');
    toggle.checked = true;
    themeTooltip.innerHTML = 'Change display to light mode';
  } else {
    themeTooltip.innerHTML = 'Change display to dark mode';
  }
});

