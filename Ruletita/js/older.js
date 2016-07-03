'use strict';
 +    var Apostado = -1, Saldo = 100;
 +     var Cuadradito = "";
 +function reset(borrado) { // reseta los radio buttoms
 +    document.getElementById(borrado).checked = false;
 +    Apostado = -1;
 +}
 +function Apostar() { // funcion general de apuesta
 +  var i, Salio;
 +  if (Cuadradito != "") { // despinta el cuadrado previo que salio
 +      document.getElementById([Cuadradito]).style.backgroundColor = "green"
 +  }
 +
 +  for (var i = 0; i <= 9; i++) { // recorre onebyone los radiobuttoms
 +    if (document.getElementById([i]).checked) {
 +      Apostado= i;
 +    }
 +  }
 +  if (Apostado == (-1)) { alert("No ah hecho una apuesta"); return;} // condicion de contencion
 +  if (Saldo < 10) { alert("Usted esta en banca rota, vuelva con mas dinero");return; } // condicion de contencion
 +  Salio = RmD();
 +  Casillero(Salio);
 +  if  (Apostado == Salio) { // En caso de ganar
 +      if (Apostado < 5 ){ Saldo = Saldo + 5;}
 +      else{ Saldo = Saldo + (Apostado*2);}
 +      document.getElementById('cambia').innerHTML = ("Numero de la ruleta: "+ Salio+ " GANO!" );
 +      document.getElementById('Money').innerHTML = ("Dispone de: $" +Saldo+" realize su apuesta")
 +   }else { // En caso de perder
 +     Saldo= Saldo - 10;
 +     document.getElementById('cambia').innerHTML = ("Numero de la ruleta: "+ Salio+ " Perdio" );
 +     document.getElementById('Money').innerHTML = ("Dispone de: $" +Saldo+" realize su apuesta")
 +   }
 +  reset(Apostado);
 +}
 +function Casillero(Casilla) { // Pinta el cuadrado correspondiente al numero obtenido
 +  Cuadradito = "T" + Casilla;
 +  document.getElementById([Cuadradito]).style.backgroundColor = "Red"
 +}
 +
 +function RmD(){ // Obtiene un numero RaMdoMico entre el 0 y el 9
 +  return Math.floor((Math.random() * 10) );
 +}
