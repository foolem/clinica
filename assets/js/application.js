$(document).ready(function () {

  $('#initial-anchor').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top - 40
    }, 500);
    return false;
  });
  $('#where-anchor').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top - 70
    }, 500);
    return false;
  });
  $('#about-anchor').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top - 60
    }, 500);
    return false;
  });
  $('#contact-anchor').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top - 60
    }, 500);
    return false;
  });

  $('#do-flip').mouseover(function(){
    $('#flip').addClass('hvr-flips');
    $('#flip').removeClass('hvr-flips-back');
  }).mouseleave(function(){
    $('#flip').addClass('hvr-flips-back');
    $('#flip').removeClass('hvr-flips');
  });
  $('#do-flip2').mouseover(function(){
    $('#flip2').addClass('hvr-flips');
    $('#flip2').removeClass('hvr-flips-back');
  }).mouseleave(function(){
    $('#flip2').addClass('hvr-flips-back');
    $('#flip2').removeClass('hvr-flips');
  });
  $('#do-flip3').mouseover(function(){
    $('#flip3').addClass('hvr-flips');
    $('#flip3').removeClass('hvr-flips-back');
  }).mouseleave(function(){
    $('#flip3').addClass('hvr-flips-back');
    $('#flip3').removeClass('hvr-flips');
  });
  $('#do-flip4').mouseover(function(){
    $('#flip4').addClass('hvr-flips');
    $('#flip4').removeClass('hvr-flips-back');
  }).mouseleave(function(){
    $('#flip4').addClass('hvr-flips-back');
    $('#flip4').removeClass('hvr-flips');
  });

  $(window).scroll(function() {
    if ($(this).scrollTop()) {
        $('#toTop').fadeIn();
    } else {
        $('#toTop').fadeOut();
    }
});

$("#toTop").click(function () {
   //1 second of animation time
   //html works for FFX but not Chrome
   //body works for Chrome but not FFX
   //This strange selector seems to work universally
   $("html, body").animate({scrollTop: 0}, 1000);
});




  $(function () {
    $(".rslides").responsiveSlides();
  });
  setTimeout(function(){
    $('#loader').addClass('animated fadeOut d-none');
  }, 3000);
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
