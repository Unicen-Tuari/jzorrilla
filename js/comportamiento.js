"use strict";
$(document).ready(function() {
  cargardato("../html/home.html");
  $("#articort").on("click",function() {cargardato("../html/ArcOrt.html")});
  $("#articmed").on("click",function () {cargardato("../html/ArcMed.html")});
  $("#contacto").on("click", function() {cargardato ("../html/contac.html")});
  $("#holmes").on("click", function () {cargardato("../html/home.html")});
});
  $("dt").click(function(event){
             var desplegable = $(this).next();
             $('dd').not(desplegable).slideUp('fast');
              desplegable.slideToggle('fast');
              event.preventDefault();
              })
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
