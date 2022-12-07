"use strict";

let suma = (a, b) => a + b;
let resta = (a, b) => a - b;
let producto = (a, b) => a * b;
let division = (a, b) => a / b;

// Inicializacion de variables
let numero1 = '';
let numero2 = '';
let malNumero;
let operandos;

let operar = function () {
    numero1 = '';
    numero2 = '';
    do {
        operandos = prompt('Introduce los operandos:');
        console.log(operandos);

        if (operandos != null && operandos != undefined ) { 
            operandos = operandos.trim();
            // Eliminar espacios para que solo haya uno en cada numero
            let i = 0;
            for (; i < operandos.length; i++) {
                if (operandos[i] !== ' ') {
                    numero1 += operandos[i]
                } else {
                    break;
                }
            }

            operandos = operandos.substring(i).trim();
            for (i = 0; i < operandos.length; i++) {
                if (operandos[i] !== ' ') {
                    numero2 += operandos[i]
                } else {
                    break;
                }
            }

            numero1 = Number(numero1);
            numero2 = Number(numero2);

            // Si no es un numero, se vovlera a pedir de nuevo un numero
            malNumero = !isFinite(numero1) || !isFinite(numero2);
            if (malNumero) {
                alert('Introduce dos números separados por espacio, por favor');
                numero1 = '';
                numero2 = '';
            }
            // Devolvemos los valores finales de cada operador
        };
        
        if (operandos == '') {
            return operandos = null;
        } 
        return numero1 = Number(numero1), numero2 = Number(numero2);
    }
    while (malNumero);
};

let operacion;
let nuevaOperacion;

// Guardar operador de la opeacion a realizar
function operandor() {
    do {
        operacion = prompt('Indica la operació que desea realizar, + , - , * , /');

        if (operacion != null && operacion != undefined) {
            operacion = operacion.trim();
        };

        switch (operacion) {
            case '+':
            case '-':
            case '*':
            case '/':
                return operacion;
            case undefined:
            case null:
                return operacion;
            default:
                alert('Has introducido un mal operador, pruebe de nuevo');
        }
    } while (true);
}

// ============= Pagina =============

alert('Bienvenido usuario');

do {
    // Llamada a la clase calculadora para ralizar la operacion correspondiente
    operandor();

    if (operacion != null && operacion != undefined) {
        operar();
    };

    if (operandos != null && operandos != undefined) {
        switch (operacion) {
            case '+':
                alert(suma(numero1, numero2));
                break;
            case '-':
                alert(resta(numero1, numero2));
                break;
            case '*':
                alert(producto(numero1, numero2));
                break;
            case '/':
                alert(division(numero1, numero2));
                break;
            case undefined:
            case null:
                nuevaOperacion == 'no';
        };
    } else {
        nuevaOperacion == 'no';
        // break;
    }

    // Realizar otra operacion o salir del programa
    if (operacion != null && operacion != undefined && operandos != null && operandos != undefined) {
        nuevaOperacion = prompt('Desea realizar una nueva operacion: "si" para seguir, "no" para salir');
    };

} while (nuevaOperacion === 'si');


