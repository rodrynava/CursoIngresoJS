/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var numeroSecreto; 
var contadorIntentos;

function comenzar()
{
  numeroSecreto=Math.floor(Math.random()*(101-1))+1;
  console.log(numeroSecreto)

	 
	

}

function verificar()
{
	
	var numero = document.getElementById("numero").value;
	contadorIntentos++;
	switch(contadorIntentos)
	{
		case 1:
		        alert("usted es un Psíquico");
		        break;

		case 2:
		        alert("exelente percepcion");
		        break;
		case 3:
	            alert("esto es suerte");
	            break;
	    case 4:
	            alert("exelente tecnica");
	            break;
	    case 5:
	            alert("usted esta en la media");
	            break;

	    case 6: 




	}


}