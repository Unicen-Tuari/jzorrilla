"use strict";
$(document).ready(function() {
  cargardato("../html/home.html");
  $("#articort").on("click",function() {cargardato("../html/ArcOrt.html")});
  $("#articmed").on("click",function () {cargardato("../html/ArcMed.html")});
  $("#contacto").on("click", function() {cargardato ("../html/contac.html")});
  $("#quienessomos").on("click", function() {cargardato ("../html/somos.html")});
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
      cargardato("../html/cabeza.html");
    ObtenerDato()});

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
      ObtenerDato();
    },
    error:function(jqxml, status, errorThrown){
      console.log(errorThrown);
    }
  }
);
ObtenerDato();
}
 function GenerarTabla(resultData) {
   var lista = "";
   for (var i = 0; i < resultData.information.length; i++) {
     lista += "<tr>";
     lista += "<td class ='Artic'> " + resultData.information[i]["thing"].nombre + "</td>";
     lista += "<td class= 'Artic'> " + resultData.information[i]["thing"].descripcion + "</td>";
     lista += "<td class ='Artic'> " + resultData.information[i]["thing"].precio + "</td>";
     lista += "<td class ='Artic'> <button class='btn btn-default borrar' type='button' > Borrar </button> </td>"
     lista += "</tr>";
     $("#listadoproductos").html(lista);
    }
    var botonesEliminar = $(".borrar");
    for (var i = 0; i < botonesEliminar.length; i++) {
      var boton = $(".borrar")[i];
      boton.onclick = function(){
      BorrarInfoporID((resultData.information[i]['_id']));
      }
    }
  }



function ObtenerDato(){
  var grupo = 69;
  $.ajax({
    method: "GET",
    dataType: 'JSON',
    url: "http://web-unicen.herokuapp.com/api/group/" + grupo,
    success:function (resultData){
        GenerarTabla(resultData);
      },
    error:function(jqxml,status,errorThrown){
      console.log(errorThrown);
    }
  });

}

function BorrarInfoporID(item) {
  var id=item;
  $.ajax({
    url:"http://web-unicen.herokuapp.com/api/delete/" + id,
    method:"DELETE",
    success: function(resultData){
      console.log(resultData);
      ObtenerDato();
    },
    error:function(jqxml, status, errorThrown){
      alert('Error!');
      console.log(errorThrown);
    }
  });
}
