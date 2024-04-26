function scrollSmoothTo(target) {
  document.querySelector(target).scrollIntoView({
    behavior: 'smooth'
  });
}

function callPhoneNumber(phoneNumber) {
  window.location.href = 'tel:' + phoneNumber;
}

document.addEventListener('DOMContentLoaded', function() {
  var links = document.querySelectorAll('header nav ul li a');
  
  links.forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      var target = this.getAttribute('href');
      scrollSmoothTo(target);
    });
  });

  var phoneNumberLinks = document.querySelectorAll('section#kontak a[href^="tel:"]');
  phoneNumberLinks.forEach(function(phoneLink) {
    phoneLink.addEventListener('click', function(e) {
      e.preventDefault();
      var phoneNumber = phoneLink.getAttribute('href').replace('tel:', '');
      callPhoneNumber(phoneNumber);
    });
  });
});