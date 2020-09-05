// Open mobile menu when user clicks

var open = document.getElementById('hamburger');
var changeIcon = true;

open.addEventListener("click", function(){

    var overlay = document.querySelector('.overlay');
    var nav = document.querySelector('nav');
    var icon = document.querySelector('.menu-toggle i');

    overlay.classList.toggle("menu-open");
    nav.classList.toggle("menu-open");

    if (changeIcon) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");

        changeIcon = false;
    }
    else {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
        changeIcon = true;
    }
});


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