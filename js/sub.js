$(function () {



  
  $('.content img').hide()
  
  $(window).scroll(function(){
   
  if($(window).scrollTop() > $('.paragraph1 .content').offset().top - 900){
        $('.paragraph1 .content img:nth-child(1)').fadeIn(1000)
      }
  if($(window).scrollTop() > $('.paragraph1 .content').offset().top-700){
        $('.paragraph1 .content img:nth-child(2)').fadeIn(1000)
      }
  if($(window).scrollTop() > $('.paragraph2 .content').offset().top -900){
        $('.paragraph2 .content img:nth-child(1)').fadeIn(1000)
      }
  if($(window).scrollTop() > $('.paragraph2 .content').offset().top-700){
        $('.paragraph2 .content img:nth-child(2)').fadeIn(1000)
      }
  if($(window).scrollTop() > $('.paragraph3 .content').offset().top -900){
        $('.paragraph3 .content img:nth-child(1)').fadeIn(1000)
      }
  if($(window).scrollTop() > $('.paragraph3 .content').offset().top -800){
        $('.paragraph3 .content img:nth-child(2)').fadeIn(1000)
      }
    

      if($(window).scrollTop() > $('.paragraph1').offset().top -500){
        $('#mainvisual').fadeOut()
      }else{
        $('#mainvisual').fadeIn()

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
