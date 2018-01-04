//Control TIME
var myTimer = setInterval(setClock, 1000);

function setClock() {
    document.querySelector(".time").innerHTML = moment().format('h:mm');
    document.querySelector(".date").innerHTML = moment().format('dddd' + ' ' + 'MMM' + ' ' + 'D' + ', ' + 'YYYY');

};

$(document).ready(function() {
  $.simpleWeather({
    location: 'Vancouver, BC',
    woeid: '',
    unit: 'c',
    success: function(weather) {
      html = '<h2><i class="icon-'+weather.code+'"></i> '+weather.temp+'&deg;</h2>';

      $(".weather").html(html);
    },
    error: function(error) {
      $(".weather").html('<p>'+error+'</p>');
    }
  });
});

function timeOfDay( ) {

    var clockMeridiem = document.querySelector(".meridiem");
    var hour = new Date().getHours();

        if ( hour < 12 )  {
        clockMeridiem.innerHTML = 'am';
        }
        else {
        clockMeridiem.innerHTML = 'pm';
        console.log(hour)
        }
}
