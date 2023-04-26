// Crear una aplicacion web donde se ingrese un numero entero entre 1 a 100 y determinar si es primo o no.

function esPrimo(numero) {
    // Estructura repetitiva para....
    for (let i = 2; i < numero; i++) {
        if (numero % i == 0) {
            //    Si hay division exacta, NO ES PRIMO
            return false;
        }
    }
    // En caso no se encontrara division exacta, ES PRIMO
    return true;
}

for (let c=1; c <= 100; c++) {
    // (esPrimo(C) ? "ES PRIMO" : "NO ES PRIMO") ESTO ES UNA OPERACION TERNARIA, VENDRIA SER UN IF PERO EN UNA SOLA LINEA 
    document.write("<p>Numero" + c + " " + (esPrimo(c) ? "ES PRIMO" : "NO ES PRIMO") + " </p>");
}

