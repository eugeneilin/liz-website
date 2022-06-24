const toggler = document.getElementById('toggler');
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
    galleryNavBar.style.backgroundColor = '';
    galleryNavBar.style.boxShadow = '';
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
    galleryNavBar.style.backgroundColor = 'rgba(136, 150, 150, .7)';
    galleryNavBar.style.boxShadow = '0 0 .5em rgba(18, 32, 8, .4)';
  } else {
    galleryNavBar.style.backgroundColor = '';
    galleryNavBar.style.boxShadow = '';
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
        galleryNavBar.style.top = '-15%';
      } else {
        galleryNavBar.style.top = '0';
      }
      this.oldScroll = this.scrollY;
      if (this.oldScroll <= 200) {
        galleryNavBar.style.backgroundColor = '';
        galleryNavBar.style.boxShadow = '';
      } else {
        galleryNavBar.style.backgroundColor = 'rgba(136, 150, 150, .7)';
        galleryNavBar.style.boxShadow = '0 0 .5em rgba(18, 32, 8, .4)';
      }
      if (this.oldScroll <= 550) {
        galleryNavBar.style.top = '0';
      }
    };
  }
}

// window onscroll functions
window.onscroll = () => {
  navBgAndShad();
  hideAndShowNav();
};
