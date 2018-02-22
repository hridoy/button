button = $('button');

button.click(function(e) {
  e.preventDefault();
  $(this).toggleClass('active');
});

$(window).resize(function(e) {
  button.removeClass('active');
});


