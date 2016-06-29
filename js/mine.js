"use strict";
//  $(document).ready(function(){
//    getInformationByItem("../html/home.html");

    $("#holmes").on("click", function(){
      getInformationByItem("../html/home.html");
    //  $(".activado").toggleClass("activado");
  //    $("#holmes").toggleClass("activado");
    alert("sale de la funcion con el elemento");
      });

    $("#ArticOrt").on("click", function(){
      getInformationByItem("../html/ArcOrt.html");
      $(".activado").toggleClass("activado");
      $("#ArticOrt").toggleClass("activado");
      });

      $("#ArticMed").on("click", function(){
        getInformationByItem("../html/ArcMed.html");
        $(".activado").toggleClass("activado");
        $("#ArticMed").toggleClass("activado");
        });

        $("#Contacto").on("click", function(){
          getInformationByItem("../html/contac.html");
          $(".activado").toggleClass("activado");
          $("#Contacto").toggleClass("activado");
          });
//});

 //              $(".Artic").hide();
//            $("dt").click(function(event){
//                 var desplegable = $(this).next();
//                   $('.Artic').not(desplegable).slideUp('fast');
//                    desplegable.slideToggle('fast');
//                    event.preventDefault();
//                    })

        function getInformationByItem(item){
            $.ajax({
            method: "GET",
            dataType: "HTML",
            url: item,
            success: function(resultData){
              //al decir que dataType es JSON, ya resultData es un objeto
              var html = "";
              html += resultData;
              $("#ajaxContent").html(html);
              alert("cargo");
              $("#test").html(resultData);
            },
          });
  }
