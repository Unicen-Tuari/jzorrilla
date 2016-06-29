"use strict";
  $(document).ready(function(){
  getInformationByItem("../html/home.html");

    $("#holmes").on("click", function(){
      getInformationByItem("../html/home.html");
      $("#holmes").toggleClass("activado");
      });

    $("#ArticOrt").on("click", function(){
      getInformationByItem("../html/ArcOrt.html");
      $("#ArticOrt").toggleClass("activado");
      });

      $("#ArticMed").on("click", function(){
        getInformationByItem("../html/ArcMed.html");
        $("#ArticMed").toggleClass("activado");
        });

        $("#Contacto").on("click", function(){
          getInformationByItem("../html/contac.html");
          $("#Contacto").toggleClass("activado");
          });
});

 //              $(".Artic").hide();
//            $("dt").click(function(event){
//                 var desplegable = $(this).next();
//                   $('.Artic').not(desplegable).slideUp('fast');
//                    desplegable.slideToggle('fast');
//                    event.preventDefault();
//                    })

        function getInformationByItem(item){
            $.ajax({
            dataType: "HTML",
            url: item,
            success: function(receivedData){
              var html = "";
              html += receivedData;
              $("#ajaxContent").html(html);
              alert("cargo");
              },
                method: "GET"
          });
  }
