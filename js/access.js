$(function() {
  $('.item,.border').hide()

  $('.span').on('click',function(){
    $(this).children().toggleClass('active')
  
    $(this).parent().children('.item,.border').slideToggle()

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
