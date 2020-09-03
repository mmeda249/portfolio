// Change navigation color on scroll

window.addEventListener('DOMContentLoaded', (event) => {
    jQuery('#mainNavbar').css("background-color", "transparent");
    jQuery(window).scroll(function() {
        if (jQuery(window).scrollTop() > 50) {
            jQuery('#mainNavbar').css("background-color", "rgba(214, 171, 195, 0.95)");              
        } else {
            jQuery('mainNavbar').css("background-color", "rgba(255, 255, 255, 0.2)");
        }
    });
});



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