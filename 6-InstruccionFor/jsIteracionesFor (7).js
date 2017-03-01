function Mostrar()
{
	var num=prompt("ingrese un numero");
	var cont=0;
	for(var i=1;i<=num;i++)
	{
		if(num%i==0)
		{
	    cont++;
	    console.log(i);
		console.log("hay"+cont+"numeros divisores");
        }
	}	




}//FIN DE LA FUNCIÓN