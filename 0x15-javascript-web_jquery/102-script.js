// JavaScript script that fetches and prints how to say “Hello” depending on the language

const $ = window.$;
window.onload = function () {
  $('input#btn_translate').click(function () {
    const lan = $('input#language_code').val();
    $.get('https://fourtonfish.com/hellosalut/?lang=' + lan, function (data, textStatus) {
      $('div#hello').text(data.hello);
    });
  });
};