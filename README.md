# Ejercicio - 10

*Inicio: iff21*

## Ingreso datos
- a
- b
- suma
- make10


## Proceso
- obtener a
- obtener b
- obtener suma de a + b
- si a==10 ó b==10 ó suma==10 entonces
    make10 = 1
    mostrar make10
-si no
    make10= 0
    mostrar make10

fin si

*fin*


/*
 * Complete the function below.
 */
function make10(a, b) {
    var suma = a + b;
    
    if (a == 10 || b == 10 || suma == 10 )
        {
            make10 = 1;
            return make10;
        }
    else
        {
            make10 = 0;
            return make10; 
        }
    


}