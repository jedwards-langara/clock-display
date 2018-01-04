//Control TIME w/ Moment.js
var myTimer = setInterval(setClock, 1000);

function setClock() {
    document.querySelector(".time").innerHTML = moment().format('h:mm');
    document.querySelector(".date").innerHTML = moment().format('dddd' + ' ' + 'MMM' + ' ' + 'D' + ', ' + 'YYYY');

};

//Simple Weather JQUERY Module to display current local temperature
$(document).ready(function() {
  $.simpleWeather({
    location: 'Vancouver, BC',
    woeid: '',
    unit: 'c',
    success: function(weather) {
      html = '<h2><i class="icon-'+weather.code+'"></i> '+weather.temp+'&deg;</h2>';

      $('.weather').html(html);
    },
    error: function(error) {
      $('.weather').html('<p>'+error+'</p>');
    }
  });
});

//Change Meridiem, greeting and background image based on time of day.
function timeOfDay( ) {

    var clockMeridiem = document.querySelector('.meridiem');
    var hour = new Date().getHours();
    var greetingMsg = document.querySelector('.greeting')
    var backgroundIMG = document.getElementById('container')

    if (hour < 12)  {
        clockMeridiem.innerHTML = 'am';
        greetingMsg.innerHTML = 'Good morning';
        backgroundIMG.style.background = "url('/img/clouds.jpg')"
    } if (hour < 18 && hour > 12 ) {
        clockMeridiem.innerHTML = 'pm';
        greetingMsg.innerHTML = 'Good afternoon';
        backgroundIMG.style.background = "url('/img/clear.jpg')"
    } else {
        clockMeridiem.innerHTML = 'pm';
        greetingMsg.innerHTML = 'Goodnight';
        backgroundIMG.style.background = "url('/img/night.jpg')"

    }
}
