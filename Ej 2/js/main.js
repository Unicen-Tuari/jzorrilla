var personas = [];
var today=new Date();
document.getElementById("guardar").onclick = guardar;
document.getElementById("listar").onclick = listar;

function guardar(){
  var nombre = document.getElementById("nombre").value;
  var dia = document.getElementById("dia").value;
  var mes = document.getElementById("mes").value;
  var anio = document.getElementById("anio").value;
  var persona = {
    "nombre": nombre,
    "dia": dia,
    "mes": mes,
    "anio": anio
  }
  personas.push(persona);
  console.log(personas);
}

function mayorDeEdad(persona){
  var anios = today.getFullYear()-persona.anio;
  var mes = today.getMonth()+1-persona.mes;
  var dia = today.getDate()-persona.dia;
  if (anios > 18)
    return true;
  else
    if(anios==18 && mes>0)
      return true;
    else
      if(anios==18 && mes==0 && dia>=0)
        return true;
  return false;

}

function listar(){
  var resultados = document.getElementById("resultados");
  var output = "<ul>";
  for (var i=0; i < personas.length; i++){
    var clase = mayorDeEdad(personas[i]) ? 'mayor' : 'menor';
    output+="<li class='"+clase+"'>"+ personas[i].nombre + "</li>";
  }
  output+="</ul>";
  resultados.innerHTML=output;
}
