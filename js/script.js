//Control TIME
var myTimer = setInterval(setClock, 1000);

function setClock() {
    document.querySelector(".time").innerHTML = moment().format('h:mm');
    document.querySelector(".meridiem").innerHTML = moment().format('a');
    document.querySelector(".date").innerHTML = moment().format('LL');
};


$(document).ready(function() {
  $.simpleWeather({
    location: 'Vancouver, BC',
    woeid: '',
    unit: 'c',
    success: function(weather) {
      html = '<h2><i class="icon-'+weather.code+'"></i> '+weather.temp+'&deg;'+weather.units.temp+'</h2>';  

      $(".weather").html(html);
    },
    error: function(error) {
      $(".weather").html('<p>'+error+'</p>');
    }
  });
});
