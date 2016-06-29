"use strict";
$(document).ready(function() {
  Cargardato("../html/home.html");
  $("#articort").on("click",function() {Cargardato("../html/arcort.html")});
  $("#articmed").on("click",function () {Cargardato("../html/arcmed.html")});
  $("#quienessomos").on("click", function() {Cargardato ("../html/contac.html")});
  $("#holmes").on("click", function () {Cargardato("../html/home.html")});


  function Cargardato(Data){
    $.ajax({
        error:function () {
          alert("no funka");
        },

        url:Data,
        dataType:"HTML",
        success: function(data) {
            $("#ajaxContent").html(data);
        },
        method: "GET",
      });
  }



});
