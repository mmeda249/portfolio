
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