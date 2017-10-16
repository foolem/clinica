$(document).ready(function(){
  
  setTimeout(function(){
    $('#loader').addClass('animated fadeOut d-none');
  }, 3500);
  $(window).scroll(function() {
    var div = $(this);
    if(div.scrollTop() !== 0) {
      $("#nav").css("margin-top", -30);
    }
    else {
      $("#top-bar").css("opacity", 1);
      $("#nav").css("margin-top", 0);
    }
  });

});
