window.unitabc = 'f';

$(document).ready(function() {
  navigator.geolocation.getCurrentPosition(function(position) {
    loadWeather(position.coords.latitude + ',' + position.coords.longitude);
    //loadWeather('Seattle','');
    //loadWeather('Alabama','');
    //loadWeather('Seattle','');
    //loadWeather('Paris','');
  });
});
$("button").on('click', function() {
  if (window.unitabc === 'f') {
    window.unitabc = 'c';
  } else {
    window.unitabc = 'f';
  }
  navigator.geolocation.getCurrentPosition(function(position) {
    loadWeather(position.coords.latitude + ',' + position.coords.longitude);
  });
});

function loadWeather(location, woeid) {
  $.simpleWeather({
    location: location,
    woeid: woeid,
    unit: window.unitabc,
    success: function(weather) {

      $("#weather_icon").html('<i class="icon-' + weather.code + '"></i>');
      $("#temp").html(weather.temp + '&deg;' + weather.units.temp);
      $("#location").html(weather.city + ', ' + weather.region);
      $("#condition").html(weather.currently);
      $("#wind").html(weather.wind.direction + ' - ' + weather.wind.speed + weather.units.speed);

    },
    error: function(error) {
      $("#temp").html('<p>' + error + '</p>');
    }
  });
}
