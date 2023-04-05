$(document).ready(function() {

    for (let i = 0; i < 16; i++) {
      $('#grid-container').append('<div class="grid-box"></div>');
    }
  
    $('.grid-box').click(function() {
      $(this).toggleClass('active');
    });
  });
  