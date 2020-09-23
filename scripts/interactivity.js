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


// Back-to-Top button
mybutton = document.getElementById("myBtn");

// When the user scrolls 600px down from the top of the page, the button will appear
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// Scrolls back to top of page when user clicks the button
function topFunction() {
  document.documentElement.scrollTop = 0; // For Chrome, Internet Explorer & Firefox
  document.body.scrollTop = 0; // For Safari
}

// Fade on scroll efffect

AOS.init();


// AJAX for contact form submissions

window.addEventListener("DOMContentLoaded", function() {

  // get the form elements defined in your form HTML above
  
  var form = document.getElementById("my-form");
  var button = document.getElementById("my-form-button");
var status = document.getElementById("my-form-status");

  // Success and Error functions for after the form is submitted
  
  function success() {
    form.reset();
    button.style = "display: none ";
    status.innerHTML = " &#10003 Thanks! We'll be in touch soon!";
  }

  function error() {
    status.innerHTML = " &#10005 Oops! There was a problem.";
  }

  // handle the form submission event

  form.addEventListener("submit", function(ev) {
    ev.preventDefault();
    var data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
  });
});

//helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function() {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
};