var cantnegros= 3;
var negros=[];
$( document ).ready(function() {
 generarnegros();
 alert("Las apuestas al Pleno, recuperan lo apostado y el doble del mismo, el resto de las apuesta ganan sola mente lo apostado") 
 function jugador(){
   var apuesta=[];
  return{
    Credito: 100,
    Apuestas:apuesta,
    obtenercredit: function(){
      return this.Credito;
    },
    modcredito: function(monto){
      this.Credito +=  monto;
    },
    obtenerapuesta:function() {
    return this.Apuestas;
    },
    pushapuesta:function(num){
      this.Apuestas.push(num);
    },
    vaciarapuestas:function() {
      this.Apuestas=[];
    },
  }
};
 function ramdom(){
  return Math.floor((Math.random() * 11));
}
function existenegro(num) {
  var existe="";
  for (var j = 0; j <= negros.length; j++) {
    if (num === negros[j]){return true;}
  }
}
function generarnegros() { // asigna los colores negros.
  for (var i = 1; i <= cantnegros; i++) {
    var cambiarne = 0;
    cambiarne = ramdom();
    if ((cambiarne !=0) && !(existenegro(cambiarne))) {
            negros.push(cambiarne);
            cambiarne= 'T'+ cambiarne;
            $('#'+[cambiarne]).css("background-color", "black");
          }
    else{
        while ((cambiarne === 0) || (existenegro(cambiarne))){
            cambiarne = ramdom();
            if ((cambiarne !=0) && !(existenegro(cambiarne))) {
                  negros.push(cambiarne);
                  cambiarne= 'T'+ cambiarne;
                  $('#'+[cambiarne]).css("background-color", "black");
                }

        }
      }
  }
}
//______________________________
function mostrar(jugador,valor) {
  var html1 = "";
  var html2 = "";
   if (jugador.Apuestas.length > 0){
     if (jugador == player1 ){
       $("#Saldo1").html("Credito = $ "+ jugador.Credito);
       for (var i = 0; i < jugador.Apuestas.length; i++) {
         html1 += "<li> Usted aposto: " + jugador.Apuestas[i] +" </li>";
       }
       $(".apuesta1").html(html1);
     }
     else if ( jugador == player2) {
       $("#Saldo2").html("Credito = $ " + jugador.Credito);
       for (var i = 0; i < jugador.Apuestas.length; i++) {
         html2 += "<li> Usted aposto: " + jugador.Apuestas[i] +" </li>";
       }
       $(".apuesta2").html(html2);
     }
   }
}
function asignarvalor(valor) {
  if (actual.obtenercredit() > 0) {
    actual.pushapuesta(valor);
    actual.modcredito(-1);
    mostrar(actual,valor);
  }
  else {
    alert ("usted no cuenta con fondos")
  }
};

function generarplenos(num) {
      $('#T'+[num]).on("click",function() { asignarvalor(num); });
  };
 function espar(num) {
   if (num % 2 === 0){return true;}
   else {return false};
 }
 function esnegro(num) {
   for (var i = 0; i < negros.length; i++) {
     if (num == (negros[i])) {
       return true;
     }
     else {
       return false;
     }
   }
 };
function ganadores(ganador,jugador) {
  if (jugador.Apuestas.length > 0) {
    for (var i = 0; i < jugador.Apuestas.length; i++) {
          if (jugador.Apuestas[i] == ganador) {
            jugador.modcredito(+3);
          }
          if ((jugador.Apuestas[i]=="pares") && espar(ganador)){
            jugador.modcredito(+2);
          }
          else if ((jugador.Apuestas[i]== "impares") || espar(ganador)) {
            if (jugador.Apuestas[i]=="impares") {
              if (!espar(ganador)) {
                jugador.modcredito(+2);
              }
            }
          }
          if ((jugador.Apuestas[i] == "menores") && (ganador <= 5)) {
            jugador.modcredito(+2);
          }
          if ((jugador.Apuestas[i] == "mayores") && (ganador > 5)) {
            jugador.modcredito(+2);
          }
          if ((jugador.Apuestas[i]=="negros") && esnegro(ganador)) {
            jugador.modcredito(+2);
          }
          else if ((jugador.Apuestas[i]=="rojos") || esnegro(ganador)) {
            if ((jugador.Apuestas[i]=="rojos")) {
              if (!esnegro(ganador)) {
                  jugador.modcredito(+2);
              }
            }
          }
      }

  }
};
function lanzarapuesta() {
  var ganador = 0;
  ganador=ramdom();
  $("#cambia").html("El número ganador es : " + ganador);
  if (actual= player1) {
    ganadores(ganador,player1);
     $("#Saldo1").html("Credito = $ "+ actual.Credito);
     actual.vaciarapuestas();
     $(".apuesta1").html("");
     $(".P2").css("box-shadow", "0px 0px 40px white");
     actual=player2;
     $(".P1").css("box-shadow", "0px 0px 0px white");
  }
  if (actual = player2) {
    ganadores(ganador,player2);
    $("#Saldo2").html("Credito = $ " + actual.Credito);
    actual.vaciarapuestas();
    $(".apuesta2").html("");
    $(".P1").css("box-shadow", "0px 0px 40px white");
    actual=player1;
    $(".P2").css("box-shadow", "0px 0px 0px white");

  }
};
$(".P1").on("click",function() {
  $(".P1").css("box-shadow", "0px 0px 40px white");
  actual=player1;
  $(".P2").css("box-shadow", "0px 0px 0px white");
});
$(".P2").on("click",function() {
  $(".P2").css("box-shadow", "0px 0px 40px white");
  actual=player2;
  $(".P1").css("box-shadow", "0px 0px 0px white");
});
$("#pares").on("click",function() {
  asignarvalor("pares");
})
$("#impares").on("click", function() {
  asignarvalor("impares");
});
$("#rojos").on("click",function () {
  asignarvalor("rojos");
});
$("#nigga").on("click",function () {
  asignarvalor("negros")
});
$("#mayores").on("click",function () {
  asignarvalor("mayores")
});
$("#menores").on("click",function () {
  asignarvalor("menores")
});
$("#Apostar").on("click", function() {
  lanzarapuesta()
});
var player1 = new jugador;
var player2 = new jugador;
var actual = player1;
$(".P1").css("box-shadow", "0px 0px 40px white");
for (var i = 0; i < 11; i++) {
  j= i;
  generarplenos(j);
}
});
