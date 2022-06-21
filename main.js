// open and close menu
const toggler = document.getElementById('toggler');
const navBar = document.getElementById('nav-bar');

function togglerFunc() {
  if (toggler.checked === true) {
    document.getElementById('mobile-menu').style.visibility = 'visible';
    document.getElementById('menu-overlay').style.transform = 'scale(1)';
    document.getElementById('links-wrap').style.opacity = '1';
    navBar.style.backgroundColor = '';
    navBar.style.boxShadow = '';
  } else {
    document.getElementById('mobile-menu').style.visibility = '';
    document.getElementById('menu-overlay').style.transform = '';
    document.getElementById('links-wrap').style.opacity = '';
  }
}

// Close menu when navlinks or site-name is clicked
function closeMenu() {
  toggler.checked = false;
  document.getElementById('mobile-menu').style.visibility = '';
  document.getElementById('menu-overlay').style.transform = '';
  document.getElementById('links-wrap').style.opacity = '';
}

// Add background and shadow to navbar when user scrolls
window.onscroll = function navbarBackground() {
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    navBar.style.backgroundColor = 'rgba(136, 150, 150, .7)';
    navBar.style.boxShadow = '0 0 .5em rgba(18, 32, 8, .4)';
  } else {
    navBar.style.backgroundColor = '';
    navBar.style.boxShadow = '';
  }
};
