"use strict";
$(document).ready(function() {
  Cargardato("../html/home.html");

  function MostrarDato(Dato){
    $("#ajaxContent").html(Dato);
  }
  function Cargardato(Data){
    $.ajax(
      {
        type: "GET",
        url:Data,
        success: MostrarDato,
        dataType:"html",
      }
    );
  }
$("#ArcticOrt").on("click",function(){
  Cargardato("../html/ArcOrt.html");
  $("#ArcticOrt").toggleClass("activado");
})


});
