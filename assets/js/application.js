$(document).ready(function(){

  $(window).scroll(function() {
    var div = $(this);
    if(div.scrollTop() !== 0) {

      
      $("#nav").css("margin-top", -30);

      //$("#nav").addClass('fixed-top');
    }
    else {
      //$("#nav").removeClass('fixed-top');
      //$("#top-nav").addClass('fixed-top');
      $("#top-bar").css("opacity", 1);
      $("#nav").css("margin-top", 0);
    }
  });
})
