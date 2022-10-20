function pedirOperacion(){
    let operacion = prompt ("Introduzca el signo del tipo de operacion matematica que quiera realizar","");
    while(operacion.trim() !== "+" && operacion.trim() !== "-" && operacion.trim() !== "/" && operacion.trim() !== "*"){
         operacion = prompt ("El tipo de operacion introducido no es valido.Intentelo denuevo","");
    }
    return operacion;
}

let operandos=function(){
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
          
          let operandos=operador1+" "+operador2;
          return operandos;
};

alert("Bienvenido.Esta es la calculadora web pulse aceptar para continuar.");
let continuar;
do{
let tipo_operacion=pedirOperacion();
let numeros=operandos();
let operador1=+numeros.substring(0,numeros.indexOf(" "));
let operador2=+numeros.substring(numeros.lastIndexOf(" "));
let sumar = (operador1,operador2) => operador1 + operador2;
let restar = (operador1,operador2) => operador1 - operador2;s
let multipliclar = (operador1,operador2) => operador1 * operador2;
let dividir = (operador1,operador2) => operador1 / operador2;
switch(tipo_operacion){
     case "+":
          alert(sumar(operador1,operador2));
          break;
     case "-":
          alert(restar(operador1,operador2));
          break;
     case "*":
          alert(multipliclar(operador1,operador2));
          break;
     case "/":
          alert(dividir(operador1,operador2));
          break;
}
continuar=confirm("¿Quieres seguir haciendo operaciones?");
}while(continuar); 