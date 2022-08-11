/**
 * Ejercicio de TDD.
 * Pequeño ejercicio de TDD para Jasmine con Node
 * Creamos un par de funciones que permiten:
 * a) comprobar si un valor corresponde con una moneda válida en euros
 * b) Comprobar si con un conjunto de dichos valores alcanza para pagar una determinada cantidad.
 * 
 * @author Victor Rivas <vrivas@ujaen.es>
 * @date 06-may-2022
 */

/*
PROCESO DE INSTALACIÓN DE JASMINE
Fuente: https://jasmine.github.io/pages/getting_started.html

a) npm install --save-dev jasmine
b) npx jasmine init
c) , "scripts": { "test": "jasmine" } // Añadir a package.json
d)  "spec_dir": "./spec" // Modificar en spec\support\jasmine.json
 

 Para ejecutar: 
 npm test

 O bien directamente desde package.json o desde el menú de ejecución y depuración.

 */

// Creación de un módulo (una especie de espacio de nombres o clase) para poder ser probado
var reloj = module.exports = {};

/**
 * @description Esta función comprueba si un par de valores pasados como números enteros corresponden o no a una hora válida
 * @param {integer} hora Valor para la hora
 * @param {integer} minutos Valor para los minutos
 * @returns True si es el binomio hora:minutos corresponde a una hora válida; false en otro caso
 */
reloj.esHoraValida = function (hora, minutos) {
    // Escribir el código necesario para que vayan pasando las pruebas una a una.
}

/**
 * @description Dada una hora y minutos iniciales, devuelve la hora y minutos finales tras sumarle un conjunto de minutos
 * @param {integer} hora_inicial Hora de inicio
 * @param {integer} minutos_inicial Minutos de inicio
 * @param {integer} minutos_adicionales Minutos que se suman a la hora
 * @returns Un objeto compuesto por dos valores {hora_final, minutos_final} correspondientes a la hora que surge al incrementar la hora inicial con los minutos adicionales
 */
reloj.incrementaHoraEnMinutos = function (hora_inicial, minutos_inicial, minutos_adicionales ) {
       // Escribir el código necesario para que vayan pasando las pruebas una a una.
}

/*
* ----------------------------------------
* - Cödigo principal de la aplicación
* ----------------------------------------
*/

console.log("Aplicación reloj")
console.log("==================")

let hora_inicial=10;
let minuto_inicial=20;
let minutos_adicionales = 450;
let resultado = reloj.incrementaHoraEnMinutos( hora_inicial, minuto_inicial, minutos_adicionales )
console.log("Si intento añadir ", minutos_adicionales, " a la hora "
    , hora_inicial+":"+minuto_inicial
    , ", el resultado es", resultado )

