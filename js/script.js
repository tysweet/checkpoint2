'use strict';

window.onscroll = function() {myFunction()};

var header = document.getElementById('myHeader');
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    header.classList.add('sticky');
    $("h1").css({"font-size": "10em", "transition": "0.5s","transition-timing-function": "ease-in-out"});
    $("h2").css({"font-size": "2em", "transition": "0.5s","transition-timing-function": "ease-in-out"});
    $("h6").css({"font-size": "1em", "transition": "0.5s","transition-timing-function": "ease-in-out"});
  } else {
    header.classList.remove('sticky');
    $("h1").css({"font-size": "18em", "transition": "1s","transition-timing-function": "ease-in-out"});
    $("h2").css({"font-size": "3em", "transition": "1s","transition-timing-function": "ease-in-out"});
    $("h6").css({"font-size": "2em", "transition": "1s","transition-timing-function": "ease-in-out"});
  }
}
