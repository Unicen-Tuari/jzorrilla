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
  $("#arcticort").on("click",function() {Cargardato("../html/ArcOrt.html")});
  $("#articmed").on("click",function () {Cargardato("../html/ArcMed.html")});
  $("#quienessomos").on("click", function() {Cargardato ("../html/contac.html")});
  $("#holmes").on("click", function () {Cargardato("../html/home.html")});


});
