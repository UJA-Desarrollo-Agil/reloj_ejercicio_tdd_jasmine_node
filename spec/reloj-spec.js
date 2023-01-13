/**
 * Fichero con la especificación de las pruebas TDD para reloj.js
 * Este fichero DEBE llamarse reloj-spec.js
 * Este fichero DEBE ubicarse en el subdirectorio spec/
 */

// Carga las funciones disponibles en reloj.js
var reloj = require("../reloj.js");

/* 
=================================================================
   Primera parte: 
=================================================================
Ir descomentando los expect 1 por 1. 
A continuación:
 - Ejecutar el test > RED
 - Solcuionar el error > GREEN
 - Refactorizar si se considera necesario > REFACTOR
 
 */


describe("Comprobación de horas correctas", function () {
    it("Valores negativos y null no deben ser legales",
        function () {
            expect(reloj.esHoraValida()).toBeFalse()
            expect(reloj.esHoraValida(1)).toBeFalse()
            expect(reloj.esHoraValida(null,2)).toBeFalse()
            expect(reloj.esHoraValida(-3,4)).toBeFalse()
            expect(reloj.esHoraValida(5,-6)).toBeFalse()
        });
    it("Valores de horas que no estén entre 0 y 23 deben dar false",
        function () {
            expect(reloj.esHoraValida(24,10)).toBeFalse()
            expect(reloj.esHoraValida(28,10)).toBeFalse()
    });
    it("Valores de minutos que no estén entre 0 y 59 deben dar false",
        function () {
            expect(reloj.esHoraValida(10,60)).toBeFalse()
            expect(reloj.esHoraValida(10,70)).toBeFalse()
    });
    it("Valores correctos de hora y minutos deben dar true",
        function () {
            expect(reloj.esHoraValida(0,0)).toBeTrue()
            expect(reloj.esHoraValida(10,0)).toBeTrue()
            expect(reloj.esHoraValida(23,0)).toBeTrue()
            expect(reloj.esHoraValida(0,30)).toBeTrue()
            expect(reloj.esHoraValida(10,30)).toBeTrue()
            expect(reloj.esHoraValida(23,30)).toBeTrue()
            expect(reloj.esHoraValida(0,59)).toBeTrue()
            expect(reloj.esHoraValida(10,59)).toBeTrue()
            expect(reloj.esHoraValida(23,59)).toBeTrue()            
        });
});



/* 
=================================================================
   Segunda parte: 
=================================================================
En los siguientes expect que debes escribir, debes llamar a la función: reloj.incrementaHoraEnMinutos
Recuerda que dicha función necesita tres parámetros: una hora inicial, un minuto inicial y un incremento en minutos.
Y recuerda que la función devuelve un objeto compuesto por dos campos: hora y minutos.
Por tanto:
 - Escribe un expect (o más, según se indica) por cada uno de los comentarios que he dejado, y vuelve a ejecutar el ciclo RED > GREEN > REFACTOR 
 - Puedes codificar para probar los "describe" completos, es decir, sin necesidad de programar expect tras expect.
 */
// 
describe("Valores no válidos devuelven el binomio null:null, es decir, reloj.HORA_INVALIDA", function () {
    it("Valores nulos en hora de inicio, minutos de inicio o minutos adicionales devuelven reloj.HORA_INVALIDA",
        function () {
            // Escribe el expect necesario
            expect(reloj.incrementaHoraEnMinutos()).toEqual(reloj.HORA_INVALIDA);
            expect(reloj.incrementaHoraEnMinutos(10)).toEqual(reloj.HORA_INVALIDA);
            expect(reloj.incrementaHoraEnMinutos(10,20)).toEqual(reloj.HORA_INVALIDA);
        }
    );
    it("Valores negativos en hora de inicio, minutos de inicio o minutos adicionales devuelven reloj.HORA_INVALIDA",
      function () {
        // Escribe el expect necesario
        }
    );
});

describe("Incrementos válidos devuelven horas correctas", function () {
    it("Valor 0 en los minutos adicionales devuelven la misma hora inicial",
        function () {
            // Escribe el expect necesario
        }
    );
    it("Múltiplos de 1440 devuelven la misma hora inicial",
      function () {
            // Escribe 2 expects que lo comprueben
        }
    );
    it("Incrementos que solo cambian los minutos sin pasar de 59 minutos (es decir, sin cambiar las horas) devuelven valores correctos",
      function () {
            // Escribe 2 expects que lo comprueben
        }
    );
    it("Incrementos que cambian las horas pero no los minutos y sin pasar de las 23 horas devuelven valores correctos",
      function () {
            // Escribe 2 expects que lo comprueben
        }
    );

    it("Incrementos que cambian las horas y los minutos pero sin pasar de las 23:59 devuelven valores correctos",
      function () {
            // Escribe 2 expects que lo comprueben
        }
    );

    
    it("Incrementos que cambian los minutos pasando de las 59 minutos, pero sin pasar de las 23 horas devuelven valores correctos",
      function () {
          // Escribe 2 expects que lo comprueben
        }
    );

    it("Incrementos que cambian las horas pasando de las 23 horas, pero sin cambiar los minutos devuelven valores correctos",
        function () {
            // Escribe 2 expects que lo comprueben
        }
    );

    it("Incrementos que cambian tanto las horas como los minutos pasando de las 23:59 devuelven valores correctos",
        function () {
            // Escribe 2 expects que lo comprueben
        }
    );
});
