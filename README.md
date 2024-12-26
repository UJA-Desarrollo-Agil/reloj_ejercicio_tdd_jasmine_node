# reloj: Ejercicio de TDD con Jasmine y Node
### Ejercicio de TDD, usando Jasmine para Node

## Realización del ejercicio
Este ejercicio está pensado para hacerlo con Visual Studio Code, pero puedes en realidad hacerlo con cualquier editor.

Necesitarás tener instalado Node.js para poder ejecutarlo. Por tanto, [descárgalo](https://nodejs.org/en/download/) e instálalo antes de hacer nada más.

* https://nodejs.org/en/download/

A continuación usando la línea de órdenes, haz lo siguiente:

1. Clona este repositorio y entra dentro del directorio que ha creado (*reloj_ejercicio_tdd_jasmine_node*).
   
2. Ejecuta:

    ```npm init```

    **ATENCIÓN:** Rellena todas las preguntas que te hace con los datos que estimes oportunos; **pero para la pregunta ```test command:``` debes escribir ```jasmine```**.

3. Ejecuta: 

    ```npm install --save-dev jasmine```

4. Ejecuta:

    ```npx jasmine init```

5. Abre Visual Code Studio (o el IDE que estés utilizando) y abre dentro de él este directorio de trabajo con el proyecto.

6. Mueve el fichero *reloj-spec.js.template* en el directorio *spec* y renómbralo para que se llame, finalmente: *reloj-spec.js*
7. Comienza a trabajar con los ejercicios que se indican en *reloj-spec.js*

Los ficheros de configuración, deberían haber quedado más o menos así:

**package.json**

```
{
  "name": "reloj_ejercicio_tdd_jasmine_node",
  "version": "1.0.0",
  "description": "Ejercicio TDD con Node.js y Jasmine",
  "main": "reloj.js",
  "scripts": {
    "test": "jasmine"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/Clases-de-Victor-Rivas/reloj_ejercicio_tdd_jasmine_node.git"
  },
  "keywords": [
    "TDD",
    "Jasmine",
    "Node.js"
  ],
  "author": "Víctor Rivas",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/Clases-de-Victor-Rivas/reloj_ejercicio_tdd_jasmine_node/issues"
  },
  "homepage": "https://github.com/Clases-de-Victor-Rivas/reloj_ejercicio_tdd_jasmine_node#readme",
  "devDependencies": {
    "jasmine": "^4.1.0"
  }
}

```

***spec/support/jasmine.json***
```
{
  "spec_dir": "spec",
  "spec_files": [
    "**/*[sS]pec.?(m)js"
  ],
  "helpers": [
    "helpers/**/*.?(m)js"
  ],
  "env": {
    "stopSpecOnExpectationFailure": false,
    "random": true
  }
}
```

Finalmente, antes de tocar ningún código, si ejecutas los test con:

```npm run test```

deberías obtener la siguiente salida:
```
> reloj_ejercicio_tdd_jasmine_node@1.0.0 test
> jasmine

Aplicación reloj
==================
Si intento añadir  450  a la hora  10:20 , el resultado es undefined
Randomized with seed 29681
Started
.........


9 specs, 0 failures
Finished in 0.01 seconds
Randomized with seed 29681 (jasmine --random=true --seed=29681)
```
