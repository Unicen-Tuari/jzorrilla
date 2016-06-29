"use strict";
$(document).ready(function() {
  cargardato("../html/home.html");
  $("#articort").on("click",function() {cargardato("../html/ArcOrt.html")});
  $("#articmed").on("click",function () {cargardato("../html/ArcMed.html")});
  $("#contacto").on("click", function() {cargardato ("../html/contac.html")});
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
          if (item === "../html/ArcOrt.html") {
            CargarOrtopedia();
          }
        },
        method: "GET",
      });

  }

  function CargarOrtopedia() {
    $("#cabeza")[0].onclick=(function(){
      cargardato("../html/cabeza.html")});

  }
function guardarproducto(){
  var grupo = 69;
  var informacion = {
    nombre: null,
    descripcion: null,
    precio: null
  };
  var inputs = $(".namea");
  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].value == "") {
      alert('debe llenar todos los campos');
      return;
    }
  }
  informacion.nombre = inputs[0].value;
  informacion.descripcion = inputs[1].value;
  informacion.precio = inputs[2].value;
  var info = {
    "group": grupo,
    "thing": informacion
  };
  $.ajax({
    method: "POST",
    dataType: 'JSON',
    data: JSON.stringify(info),
    contentType: "application/json; charset=utf-8",
    url: "http://web-unicen.herokuapp.com/api/create",
    success: function(resultData){
      console.log(resultData.information);
      //getInformationByGroup();
    },
    error:function(jqxml, status, errorThrown){
      console.log(errorThrown);
    }
  }
);
}
