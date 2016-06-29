"use stric";
$(document).ready(function(){
  partialrender("../html/home.html");
});

function partialrender(item){
  $.ajax({
    method: "get";
    dataType: "html";
    url:item;
    success: function (ReceivedData) {
      var partial = "";
      partial += ReceivedData;
      $("#ajaxContent").html(partial);
    }
  })

}
//   $("dt").click(function(){
  //    var desplegable = $(this).next();
    //  $('.Artic').not(desplegable).slideUp('fast');
      //desplegable.slideToggle('fast');
      //event.preventDefault();
      //});
