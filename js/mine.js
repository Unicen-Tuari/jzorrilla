
$( document ).ready(function() {
  getInformationByItem("../html/home.html");
  $("#holmes").on("click", function(){
    getInformationByItem("../html/home.html");
    $("#holmes").toggleClass("activado");
  });

  $("#ArticMed").on("click", function(){
    getInformationByItem("../html/ArcMed.html");
    $("#ArticMed").toggleClass("activado");
  });

  $("#ArticOrt").on("click", function(){
    getInformationByItem("../html/ArcOrt.html");
    $("#ArticOrt").toggleClass("activado");
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
    method: "GET",
    dataType: "HTML",
    url: item,
    success: function(resultData){
      //al decir que dataType es JSON, ya resultData es un objeto
      var html = "";
      html += resultData;
      $("#ajaxContent").html(html);
    },
    error:function(jqxml, status, errorThrown){
      console.log(errorThrown);
    }
  });
}
