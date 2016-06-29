"Use Strict";
$(document).ready(function(){
  alert("ingresa");
  generarAjax("../html/home.html");

function Cargar(Dato){
  $("#ajaxContent").html(Dato)
}
function generarAjax(item){
  alert("entra");
  $.ajax({
    method: "GET",
    url:item,
    success: Cargar(item);
    dataType: 'html',
    error: function(){
      alert("File don't found error 404");
    }

  });
}
$("#ArticOrt").on("click", function () {
  alert("artic ingresa");
  generarAjax("../html/ArcOrt.html");
  $("#ArticOrt").toggleClass("activado");
})
 });
//   $("dt").click(function(){
  //    var desplegable = $(this).next();
    //  $('.Artic').not(desplegable).slideUp('fast');
      //desplegable.slideToggle('fast');
      //event.preventDefault();
      //});
