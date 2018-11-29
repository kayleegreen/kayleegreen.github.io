$(document).ready(function () {

// $(window).scroll(function() {
//     var x = $(this).scrollTop();
//     $('#landing').css('background-position', '100% ' + parseInt(-x / 1) + 'px, center');
// });

$('#landing').scroll(function() {
    var x = $(this).scrollTop();
    $(this).css('background-position', '0% ' + parseInt(-x / 10) + 'px');
});


$('#landing2').scroll(function() {
    var x = $(this).scrollTop();
    $(this).css('background-position', '0% ' + parseInt(-x / 10) + 'px');
});

// const distanceToNextImage = -450;
// let currentImageNumber = 02;
//
// $("#right").click(function(){
//   currentImageNumber += 03;
//   $("#carousel-strip").css("left", distanceToNextImage * currentImageNumber + "px");
// });
//
// $("#left").click(function(){
//   currentImageNumber -= 02;
//   $("#carousel-strip").css("left", distanceToNextImage * currentImageNumber + "px");
// });
//
// $("#overlay, #close").click(function() {
//   $("#lightbox").hide();
// });

new TypeIt('#hero', {
  speed: 75,
  startDelay: 900
});

function myFunction() {
    document.getElementsByClassName("page-link").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("to-top").style.display = "block";
    } else {
        document.getElementById("to-top").style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

});
