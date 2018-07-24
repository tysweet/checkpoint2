'use strict';

window.onscroll = function() {myFunction()};

var header = document.getElementById('myHeader');
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
}

// $(document).scroll(function () {
//   var x = $(this).scrollTop();
//   if (x > 550) {
//       $('#headerText').stop().fadeIn('2000');
//       // console.log($('#headerText'))
//   }
//   // else{
//   //     $('#headerText').stop().fadeOut('slow');
//   // }
// });
