"use strict";
$(document).ready(function(){
alert("ingresa");
partialrender("../html/home.html");

function partialrender(item){
  alert("entra");
  $.ajax({
    method: "GET",
    dataType: 'html',
    url:item,
    success: function (ReceivedData) {
      var partial = "";
      partial += ReceivedData;
      $("#ajaxContent").html(partial);
    }
  });
}
$("#ArticOrt").on("click", function () {
  alert("artic ingresa");
  partialrender("../html/ArcOrt.html");
  $("#ArticOrt").toggleClass("activado");
})
});


//   $("dt").click(function(){
  //    var desplegable = $(this).next();
    //  $('.Artic').not(desplegable).slideUp('fast');
      //desplegable.slideToggle('fast');
      //event.preventDefault();
      //});
