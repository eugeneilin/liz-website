const toggler = document.getElementById('toggler');
const navBar = document.getElementById('nav-bar');
const galleryNavBar = document.getElementById('gallery-nav-bar');
const mobileMenu = document.getElementById('mobile-menu');
const menuOverlay = document.getElementById('menu-overlay');
const linksWrap = document.getElementById('links-wrap');

// open and close menu
function togglerFunc() {
  if (toggler.checked === true) {
    mobileMenu.style.visibility = 'visible';
    menuOverlay.style.transform = 'scale(1)';
    linksWrap.style.opacity = '1';
    navBar.style.backgroundColor = '';
    navBar.style.boxShadow = '';
  } else {
    mobileMenu.style.visibility = '';
    menuOverlay.style.transform = '';
    linksWrap.style.opacity = '';
  }
}

// Close menu when navlinks or site-name is clicked
function closeMenu() {
  toggler.checked = false;
  mobileMenu.style.visibility = '';
  menuOverlay.style.transform = '';
  linksWrap.style.opacity = '';
}

// Add background and shadow to navbar when user scrolls
function navBgAndShad() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    navBar.style.backgroundColor = 'rgba(136, 150, 150, .7)';
    navBar.style.boxShadow = '0 0 .5em rgba(18, 32, 8, .4)';
  } else {
    navBar.style.backgroundColor = '';
    navBar.style.boxShadow = '';
  }
}

// hide and show nav-bar based on scrolling
function hideAndShowNav() {
  if (
    document.body.scrollTop > 550 ||
    document.documentElement.scrollTop > 550
  ) {
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
        navBar.style.backgroundColor = 'rgba(136, 150, 150, .7)';
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
