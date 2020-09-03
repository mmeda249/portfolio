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


// Change navigation active link color as the user scrolls down the page

$(document).ready(function () {
    $(document).on("scroll", onScroll);
    
    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
      
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('#mainNavbar a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#mainNavbar ul li a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}


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