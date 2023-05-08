// Toggles the class of HTML tag 'HEADER' when user clicks the
// div#toggle_header tag

$('div#toggle_header').click(function () {
  if ($('header').hasClass('green')) {
    $('header').removeClass('green');
    $('header').addClass('red');
  } else {
    $('header').removeClass('red');
    $('header').addClass('green');
  }
});