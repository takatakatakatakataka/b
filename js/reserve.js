$(function() {

  $(".alert").hide();

  $("#submitBtn").click(function(){

    let sendFlag = true;

    if(!$("#text").val()){

      $("#textSection .alert").show();
      sendFlag = false; 
    }else{
     
      $("#textSection .alert").hide();
    }

    let radioChk = $('input[name = "radio"]:checked').length;

    if($("#l-selectSection select").val() == "none"){

      $("#l-selectSection .alert").show();
      sendFlag = false; 
    }else{
     
      $("#l-selectSection .alert").hide();
    }

    if($("#s-selectSection select").val() == "none"){

      $("#s-selectSection .alert").show();
      sendFlag = false; 
    }else{
  
      $("#s-selectSection .alert").hide();
    }
   
    if(
      ($('input[name="your-tel1"]').val() == "") ||
      ($('input[name="your-tel2"]').val() == "") ||
      ($('input[name="your-tel3"]').val() == "")
    ) {
     
      $("#telSection .alert").show();
      sendFlag = false; 

    }else{
 
      $("#telSection .alert").hide();
    }

    if(sendFlag == false){
      return false; 
    }
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
