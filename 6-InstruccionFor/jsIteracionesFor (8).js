function Mostrar()
{
	var num=prompt("Ingrese un numero");
	var cont=0;
	num=parseInt(num);

	for(var i=1;i<=num;i++)
	{
		if(num%i==0)
			{
				cont++;

			}

	}
	if(cont>2)
	{
		alert("el numero no es primo");
	}
	else
	{
		alert("el numero es primo");
	}




}//FIN DE LA FUNCIÓN