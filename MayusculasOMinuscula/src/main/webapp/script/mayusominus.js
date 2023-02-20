function mayusomin() 
{
  let mayusOminus = prompt("Escribe una cadena mayuscula o minuscula", "ESTO ES UNA PRUEBA");
	
	if(mayusOminus==mayusOminus.toUpperCase())
	   document.getElementById("mayusomini").innerHTML = "El caracter introducido "+mayusOminus+" es mayuscula";
  
  else if(mayusOminus==mayusOminus.toLowerCase())
	   document.getElementById("mayusomini").innerHTML = "El caracter introducido "+mayusOminus+" es minuscula";
  
  else
   document.getElementById("mayusomini").innerHTML = "El caracter introducido "+mayusOminus+" es minuscula y mayuscula";
}
