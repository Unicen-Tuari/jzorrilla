"use strict";
$(document).ready(function() {
  Cargardato("../html/home.html");
  $("#articort").on("click",function() {Cargardato("../html/arcort.html")});
  $("#articmed").on("click",function () {Cargardato("../html/arcmed.html")});
  $("#quienessomos").on("click", function() {Cargardato ("../html/contac.html")});
  $("#holmes").on("click", function () {Cargardato("../html/home.html")});

  function MostrarDato(Dato){
    $("#ajaxContent").html(Dato);
  }
  function Cargardato(Data){
    $.ajax({
        type: "GET",
        url:Data,
        dataType:'html',
        success: MostrarDato,
        error:alert("no funka")
      });
  }



});
