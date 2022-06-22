// Add background and shadow to gallery-navbar when user scrolls
const galleryNavBar = document.getElementById('gallery-nav-bar');

window.onscroll = () => {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    galleryNavBar.style.backgroundColor = 'rgba(136, 150, 150, .7)';
    galleryNavBar.style.boxShadow = '0 0 .5em rgba(18, 32, 8, .4)';
  } else {
    galleryNavBar.style.backgroundColor = '';
    galleryNavBar.style.boxShadow = '';
  }
};
