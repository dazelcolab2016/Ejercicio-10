function evaluar()
{
	var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
	var suma = document.getElementById("suma");
    var make10  = 0;
    suma = parseInt(a) + parseInt(b);
    
        diez.innerHTML = suma;

	if(a ==10 || b == 10 || suma == 10 )
	{
		make10 = 1;
		salida.innerHTML = make10;
	}else{
		make10 = 0;
        salida.innerHTML = make10;
	}
}









