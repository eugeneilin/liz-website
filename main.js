const toggler = document.getElementById('toggler');
const navBar = document.getElementById('nav-bar');
const galleryNavBar = document.getElementById('gallery-nav-bar');
const mobileMenu = document.getElementById('mobile-menu');
const mbMenuOverlay = document.getElementById('mb-menu-overlay');
const mbMenuLinksWrap = document.getElementById('mb-menu-links-wrap');

// open and close menu
function togglerFunc() {
  if (toggler.checked === true) {
    mobileMenu.style.visibility = 'visible';
    mbMenuOverlay.style.transform = 'scale(1)';
    mbMenuLinksWrap.style.opacity = '1';
    navBar.style.backgroundColor = '';
    navBar.style.boxShadow = '';
  } else {
    mobileMenu.style.visibility = '';
    mbMenuOverlay.style.transform = '';
    mbMenuLinksWrap.style.opacity = '';
  }
}

// Close menu when navlinks or site-name is clicked
function closeMenu() {
  toggler.checked = false;
  mobileMenu.style.visibility = '';
  mbMenuOverlay.style.transform = '';
  mbMenuLinksWrap.style.opacity = '';
}

// Add background and shadow to navbar when user scrolls
function navBgAndShad() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    navBar.style.backgroundColor = 'rgba(136, 150, 150, .8)';
    navBar.style.boxShadow = '0 0 .5em rgba(18, 32, 8, .4)';
  } else {
    navBar.style.backgroundColor = '';
    navBar.style.boxShadow = '';
  }
}

// hide and show nav-bar based on scrolling
function hideAndShowNav() {
  if (document.body.scrollTop > 550 || document.documentElement.scrollTop > 550) {
    window.onscroll = function () {
      if (this.oldScroll < this.scrollY) {
        navBar.style.top = '-15%';
      } else {
        navBar.style.top = '0';
      }
      this.oldScroll = this.scrollY;
      if (this.oldScroll <= 200) {
        navBar.style.backgroundColor = '';
        navBar.style.boxShadow = '';
      } else {
        navBar.style.backgroundColor = 'rgba(136, 150, 150, .8)';
        navBar.style.boxShadow = '0 0 .5em rgba(18, 32, 8, .4)';
      }
      if (this.oldScroll <= 550) {
        navBar.style.top = '0';
      }
    };
  }
}

// window onscroll functions
window.onscroll = () => {
  navBgAndShad();
  hideAndShowNav();
};

// Listen for form submit
document.getElementById('form').addEventListener('submit', submitForm);

// Submit form
function submitForm() {
  // Show Thank You
  document.getElementById('form').style.display = 'none';
  document.getElementById('thank-you').style.display = 'block';

  // Show form after 7 seconds
  setTimeout(function () {
    document.getElementById('thank-you').style.display = 'none';
    document.getElementById('form').reset();
    document.getElementById('form').style.display = 'block';
  }, 7000);
}
