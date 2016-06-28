  $(document).ready(function(){
      	$(".Artic").hide();
	$("dt").click(function(event){
             var desplegable = $(this).next();
             $('.Artic').not(desplegable).slideUp('fast');
              desplegable.slideToggle('fast');
              event.preventDefault();
              })
        });
        $("#ArticOrt").on("click", function(){
          getInformationByItem("../html/ArcOrt.html");
          $(".activado").toggleClass("activado");
          $("#ArticOrt").toggleClass("activado");
        });

        function getInformationByItem(item){
          $.ajax({
            method: "GET",
            dataType: 'html',
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
