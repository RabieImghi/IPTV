
document.body.scroll = 'no';
// Add a scroll event listener to the window
 window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var header = document.querySelector('header');
    if (scrollPosition > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });