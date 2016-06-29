"use strict";
$(document).ready(function() {
  cargardato("../html/home.html");
  $("#articort").on("click",function() {cargardato("../html/arcort.html")});
  $("#articmed").on("click",function () {cargardato("../html/arcmed.html")});
  $("#quienessomos").on("click", function() {cargardato ("../html/contac.html")});
  $("#holmes").on("click", function () {cargardato("../html/home.html")});
});

  function cargardato(item){
    $.ajax({
        error:function () {
          alert("no funka");
        },
        url:item,
        dataType:"HTML",
        success: function(data) {
          var html="";
          html +=data;
            $("#ajaxContent").html(html);
        },
        method: "GET",
      });
  }
