$(function () {




  let count = $("#slide li").length;

  let current = 1;

  let next = 2;

  let interval = 8000;

  let duration = 500;

  let timer;

  $("#slide li:not(:first-child)").hide();

  timer = setInterval(slideTimer, interval);

  function slideTimer(){

    $("#slide li:nth-child(" + current + ")").fadeOut(duration);

    $("#slide li:nth-child(" + next + ")").fadeIn(duration);

    current = next;

    next = ++next;

    if(next > count){
      next = 1;
    }

    $("#button li a").removeClass("target");

    $("#button li:nth-child(" + current + ") a").addClass("target");
  }

  $("#button li a").click(function(){

    next = $(this).html();

    clearInterval(timer);
    timer = setInterval(slideTimer, interval);

    slideTimer();

    return false;
  });
  

  
  $('.content img').hide()
  
  $(window).scroll(function(){
    if($(window).scrollTop() > $('#room').offset().top - 500){
      $('.room-item').addClass('active')
    }
    if($(window).scrollTop() > $('#spa').offset().top - 500){
      $('.spa-item').addClass('active')
    }
    if($(window).scrollTop() > $('#dinner').offset().top - 500){
      $('.dinner-item').addClass('active')
    }
  
  })

  let pagetop = $('#to-top');

  $(pagetop).hide();

  $(window).scroll(function() {

    if ($(this).scrollTop() > 700) {

      $(pagetop).fadeIn();

    } else {

      $(pagetop).fadeOut();
    }
  });


  $(pagetop).click(function() {

    $('body,html').animate({scrollTop: 0}, 500);


    return false;
  });

 

  $('.toggle_btn').on('click', function() {
    if ($('#header').hasClass('open')) {
      $('#header').removeClass('open');
      $('#reserve-btn').addClass('reserve-btn')
      
    } else {
      $('#header').addClass('open');

      $('.reserve-btn').removeClass()

    }
  });

  $('#mask').on('click', function() {
    $('#header').removeClass('open');
  });


  $('#navi a').on('click', function() {
    $('#header').removeClass('open');
  });
 

});
