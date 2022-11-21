console.log("javascript conectado exitosamente");

const txtnum1= document.getElementById("input-numerador1");
const txtop= document.getElementById("input-operador");
const txtnum2= document.getElementById("input-numerador2");
const btncalcular= document.getElementById("calcular");
const presultado= document.getElementById("p-resultado");

btncalcular.addEventListener('click', calcular);

function calcular(){
    const operador= txtop.value;
    const num1= parseFloat(txtnum1.value);
    console.log(typeof num1);
    const num2= parseFloat(txtnum2.value);
    let resultado= 0;

    if(operador=="+" || operador=="-" || operador=="*" || operador=="/"){
        switch(operador){
            case "+":
                resultado= num1 + num2;
                presultado.innerText= "El resultado de " +num1+ " y " +num2+ " es: " +"\n"+ resultado;
                break;
            case "-":
                resultado= num1 - num2;
                presultado.innerText= "El resultado de " +num1+ " y " +num2+ " es: " +"\n"+ resultado;
                break;
            case "*":
                resultado= num1 * num2;
                presultado.innerText= "El resultado de " +num1+ " y " +num2+ " es: " +"\n"+ resultado;
                break;
            case "/":
                resultado= num1 / num2;
                presultado.innerText= "El resultado de " +num1+ " y " +num2+ " es: " +"\n"+ resultado;
        }
    }else{
        presultado.innerText="operacion imposible";
    }

}