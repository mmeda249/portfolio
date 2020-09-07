// Mobile nav

const header = document.querySelector('.main-header');

window.addEventListener('scroll', () => {
  const scrollPos = window.scrollY;
  if(scrollPos > 70) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});


// Open mobile menu when user clicks


// Change navigation active link color as the user scrolls down the page


// Close mobile menu on click - the code below might not be used

$(function() {
    var menuVisible = false;
    $('#menuBtn').click(function() {
      if (menuVisible) {
        $('#myMenu').css({'display':'none'});
        menuVisible = false;
        return;
      }
      $('#myMenu').css({'display':'block'});
      menuVisible = true;
    });
    $('#myMenu').click(function() {
      $(this).css({'display':'none'});
      menuVisible = false;
    });
  });