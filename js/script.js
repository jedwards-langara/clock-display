


//Control TIME w/ Moment.js
var loadClock = setTimeout(setClock, 1000);
var updateClock = setInterval(setClock, 10000);
var updateTOD = setInterval(timeOfDay, 100000);

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

    if (hour >= 12 && hour < 18) {
        clockMeridiem.innerHTML = 'pm';
        greetingMsg.innerHTML = 'Good afternoon';
        backgroundIMG.style.background = 'url("/img/afternoon.jpg")';
    } if (hour >= 18 && hour < 20) {
        clockMeridiem.innerHTML = 'pm';
        greetingMsg.innerHTML = 'Good evening';
        backgroundIMG.style.background = 'url("/img/evening.jpg")';
    } if (hour >= 20 && hour < 24) {
        clockMeridiem.innerHTML = 'pm';
        greetingMsg.innerHTML = 'Goodnight';
        backgroundIMG.style.background = 'url("/img/night.jpg")';
    } else if (hour >= 24 || hour < 12){
        clockMeridiem.innerHTML = 'am';
        greetingMsg.innerHTML = 'Good morning';
        backgroundIMG.style.background = 'url("/img/morning.jpg")';
    }
    console.log(hour)
}
