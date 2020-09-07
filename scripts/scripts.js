// Navigation bar will change color when user scrolls 70px down and beyond

const header = document.querySelector('.main-header');

window.addEventListener('scroll', () => {
  const scrollPos = window.scrollY;
  if(scrollPos > 70) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// When the user clicks a link from the navigation toggler, the nav will collapse again

// Change navigation active link color as the user scrolls down the page


// Close mobile menu on click - the code below might not be used


$(function() {
    var menuVisible = false;
    $('.menu-item').click(function() {
      if (menuVisible) {
        $('.links').css({'display':'none'});
        menuVisible = false;
        return;
      }
      $('.links').css({'display':'block'});
      menuVisible = true;
    });
    $('.links').click(function() {
      $(this).css({'display':'none'});
      menuVisible = false;
    });
  });