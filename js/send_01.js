$(document).ready(function() {
  $('#form_01').on('submit', function (event) {
    event.preventDefault();      
     
        var rn01 = $('#rn_01').val();
        var rn02 = $('#rn_02').val();
        var rn03 = $('#rn_03').val();

        var data = $('#form_01').serialize();
        if (rn01*rn02 == rn03){ 
          $('#rn_03').val('');
          function getRandomInt(max) {
          return Math.floor(Math.random() * max); }                  
          $('#rn_01').val(getRandomInt(10));
          $('#rn_02').val(getRandomInt(10)); 

          $.ajax({
              url: '../send/send_01.php',
              type: 'POST',
              dataType: "html",            
              data: data,                   
              success: function (msg) { 
                $('.popup, .overlay').css('display', 'block');
                $('.popup .close, .overlay').click(function() {
                $('.overlay, .popup').css('display','none');
              });                 
              },
              error: function(msg){				 
                $('.popup_error, .close, .overlay').css('display', 'block');
                $('.popup_error, .close, .overlay').click(function() {
                $('.overlay, .popup_error').css('display','none');
              });                 
            },  
          }); 
        }    
        else {              
          $('.popup_no, .overlay').css('display', 'block');
          $('.popup_no, .close, .overlay').click(function() {
            $('.overlay, .popup_no').css('display','none');
        }); 
        }  
    });
}); 
