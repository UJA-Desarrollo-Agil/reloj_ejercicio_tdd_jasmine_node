/**
 * Ejercicio de TDD.
 * Pequeño ejercicio de TDD para Jasmine con Node
 * Creamos un par de funciones que permiten:
 * a) Comprobar si un par de valores corresponden con un binomino horas:minutos válidos
 * b) Devolver una nueva hora a partir de una inicial a la que se le suman un número positivo de minutos.
 * 
 * @author Victor Rivas <vrivas@ujaen.es>
 * @date 06-may-2022
 */

/*
PROCESO DE INSTALACIÓN DE JASMINE
 Mirar instrucciones en fichero README.md
 

EJECUCIÓN DE LAS PRUEBAS
 npm test
 
 O bien directamente desde package.json o desde el menú de ejecución y depuración.

 */

// Creación de un módulo (una especie de espacio de nombres o clase) para poder ser probado
const reloj = module.exports = {};

reloj.HORA_INVALIDA={hora: null, minutos: null }
/**
 * @description Esta función comprueba si un par de valores pasados como números enteros corresponden o no a una hora válida
 * @param {integer} hora Valor para la hora
 * @param {integer} minutos Valor para los minutos
 * @returns True si es el binomio hora:minutos corresponde a una hora válida; false en otro caso
 */
reloj.esHoraValida = function (hora, minutos) {
    // Escribir el código necesario para que vayan pasando las pruebas una a una.
    if( typeof hora=="undefined" || typeof minutos=="undefined" ) return false;
    if( hora==null || minutos==null ) return false;
    if( hora<0 || minutos <0 ) return false;
    if ( hora>23 || minutos>59) return false;
    return true;
}

/**
 * @description Dada una hora y minutos iniciales, devuelve la hora y minutos finales tras sumarle un conjunto de minutos
 * @param {integer} hora_inicial Hora de inicio
 * @param {integer} minutos_inicial Minutos de inicio
 * @param {integer} minutos_adicionales Minutos que se suman a la hora
 * @returns Un objeto compuesto por dos valores {hora: HH, minutos: MM} correspondientes a la hora que surge al incrementar la hora inicial con los minutos adicionales
 */
reloj.incrementaHoraEnMinutos = function (hora_inicial, minutos_inicial, minutos_adicionales ) {
       // Escribir el código necesario para que vayan pasando los apartados "describe" de reloj-spec.js uno a uno.
       // Ejemplos de return:
       // return {hora:10, minutos: 30}
       // return this.HORA_INVALIDA

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

