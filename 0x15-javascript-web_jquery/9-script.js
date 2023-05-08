// Queries an API for wind speed in SF and replaces the text of the
// div#sf_wind_speed tag with the speed

let url = 'https://fourtonfish.com/hellosalut/?lang=fr';

$.get(url, function (data, textStatus) {
  $('div#hello').text(data.hello);
});