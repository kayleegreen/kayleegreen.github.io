$(document).ready(function () {

  $('#landing').scroll(function() {
    var x = $(this).scrollTop();
    $(this).css('background-position', '0% ' + parseInt(-x / 10) + 'px');
  });


  $('#landing2').scroll(function() {
    var x = $(this).scrollTop();
    $(this).css('background-position', '0% ' + parseInt(-x / 10) + 'px');
  });


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

  document.getElementById("to-top").onclick = topFunction;



  document.getElementById("page-link").onclick = linkButtonClicked;

  function setColor(color) {
    document.getElementById("page-link").style.Color = color;
  }

  function linkButtonClicked() {
    document.getElementsById("page-link").onclick = setColor('#94728e');
  }

  function linkButtonClicked() {
    setColor('#94728e');

  }

});
