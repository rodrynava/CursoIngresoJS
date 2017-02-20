function Mostrar()
{

	var contador=0;
	var num;
	var maximo;
	var minimo;
	var primera;


	while(confirm("Ingrese un numero"))
	{
		num= prompt("");
		num= parseInt("");
		}
		if (primera)
		{   
			primera= false;
			maximo=num;
			minimo=num;
        }
        else 
        {
	        
	        if (num>maximo)
	        {
	         	maximo=num
            }             
		    if  (num<minimo)
		    {
		    	minimo=num
		    }
		}

    alert(maximo);
    alert(minimo);




	
}//FIN DE LA FUNCIÓN