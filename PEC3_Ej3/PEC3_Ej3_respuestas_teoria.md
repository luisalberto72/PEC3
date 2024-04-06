- Analiza el fichero tsconfig indica con comentarios sobre este fichero que significan y para qué sirven cada una de las opciones del fichero tsconfig.json.

{
  "compilerOptions": {
    /* Basic Options */

    /* "target": "es2015": Esta opción especifica la versión de ECMAScript a la que se va a compilar el código TypeScript. En este caso, se está compilando a ECMAScript 2015 (también conocido como ES6). Esto significa que el código resultante será compatible con las características de ES2015 y posteriores.*/
    "target": "es2015",

    /*"module": "commonjs": Esta opción especifica el sistema de módulos que se utilizará en el código compilado. En este caso, se está utilizando CommonJS, que es el sistema de módulos utilizado por Node.js.*/ 
    "module": "commonjs", 

     /* "outDir": "./dist": Esta opción especifica el directorio de salida para los archivos JavaScript generados por la compilación. En este caso, los archivos JavaScript compilados se colocarán en el directorio ./dist.*/ 
    "outDir": "./dist",  

     /* "rootDir": "./src": Esta opción especifica el directorio raíz de entrada para el compilador. El compilador buscará archivos TypeScript en este directorio y sus subdirectorios. En este caso, el directorio raíz de entrada es ./src.*/ 
    "rootDir": "./src", 

     /* "strict": true: Esta opción habilita todas las opciones estrictas de TypeScript, lo que significa que el compilador aplicará un conjunto más riguroso de reglas y comprobaciones estáticas al código TypeScript. Esto incluye opciones como noImplicitAny, strictNullChecks, strictFunctionTypes, entre otras.*/ 
    "strict": true,

    /* "incremental": true: Esta opción habilita el soporte de compilación incremental. Con la compilación incremental habilitada, TypeScript solo volverá a compilar los archivos que han cambiado desde la última compilación, lo que puede mejorar significativamente los tiempos de compilación en proyectos grandes.*/
    "incremental": true,
    
     /* "tsBuildInfoFile": "./buildcache": Esta opción especifica la ubicación del archivo de información de compilación (*.tsbuildinfo). Este archivo almacena información sobre la compilación, como dependencias y resultados de la compilación, lo que permite que la compilación incremental funcione correctamente. En este caso, el archivo se guardará en el directorio ./buildcache.*/ 
    "tsBuildInfoFile": "./buildcache",
  }
}












