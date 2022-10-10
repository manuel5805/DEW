"use strict";

alert("Bienvenido.Esta es la calculadora web pulse aceptar para continuar.");
let continuar;
do{
     let operacion = prompt ("Introduzca el signo del tipo de operacion matematica que quiera realizar","");

     while(operacion.trim() !== "+" && operacion.trim() !== "-" && operacion.trim() !== "/" && operacion.trim() !== "*"){
          operacion = prompt ("El tipo de operacion introducido no es valido.Intentelo denuevo","");
     }

     let operadores = prompt ("Introduzca los dos operadores.Ejemplo: 5 3","");

     operadores=operadores.trim();

     let operador1=operadores.substring(0,operadores.indexOf(" "));
     let operador2=operadores.substring(operadores.lastIndexOf(" "));

     while(isNaN(operador1) === true || isNaN(operador2) === true || operador1.trim().length == 0 ){
          operadores = prompt ("Error los operadores introducidos no son validos.Intentelo denuevo con operadores validos como: 5 3","");
          operadores=operadores.trim();
          operador1=operadores.substring(0,operadores.indexOf(" "));
          operador2=operadores.substring(operadores.lastIndexOf(" ") );
               
     }
          operador1=Number(operador1);
          operador2=Number(operador2);
          switch(operacion){
               case "+":
                    alert("La suma de los numeros es: "+ (operador1+operador2));
                    break;
               case "-":
                    alert("La resta de los numeros es: "+ (operador1-operador2));
                    break;
               case "*":
                    alert("La multiplicacion de los numeros es: "+ (operador1*operador2));
                    break;
               case "/":
                    alert("La division de los numeros es: "+ (operador1/operador2));
                    break;
          }
          continuar=confirm("¿Quieres seguir haciendo operaciones?");
}while(continuar);



