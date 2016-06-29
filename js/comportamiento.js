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
          else if (item=== "../html/cabeza.html") {
            $("#Agregar")[0].onclick=function(){
              guardarproducto();
            }
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
function getInformationByGroup(){
  var grupo = 69;
  $.ajax({
    method: "GET",
    dataType: 'JSON',
    url: "http://web-unicen.herokuapp.com/api/group/" + grupo,
    success:function (resultData){
     var lista = "";
     lista += "<ul>";
     lista += "<li>nombre: " + resultData.information[0]["thing"].nombre + "</li>";
     lista += "<li>dep: " + resultData.information[0]["thing"].descripcion + "</li>";
     lista += "<li>precio: " + resultData.information[0]["thing"].precio + "</li>";
     lista += "</ul>";
     $("#cascopedico").html(lista);
    },
    error:function(jqxml, status, errorThrown){
      console.log(errorThrown);
    }
  });
}
function deleteInformationByItem(item) {
  var id=item;
  $.ajax({
    url:"http://web-unicen.herokuapp.com/api/delete/" + id,
    method:"DELETE",
    success: function(resultData){
      console.log(resultData);
      getInformationByGroup();
    },
    error:function(jqxml, status, errorThrown){
      alert('Error!');
      console.log(errorThrown);
    }
  });
}
