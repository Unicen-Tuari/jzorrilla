  $(document).ready(function(){
      	$(".Artic").hide();
	$("dt").click(function(event){
             var desplegable = $(this).next();
             $('.Artic').not(desplegable).slideUp('fast');
              desplegable.slideToggle('fast');
              event.preventDefault();
              })
        });
