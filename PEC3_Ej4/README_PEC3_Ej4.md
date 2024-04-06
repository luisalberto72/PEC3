Para transpilar el código TypeScript a Javascript seguiremos los siguientes pasos:

- Instalar TypeScript.Si aún no tenemos TypeScript instalado, podemos instalarlo globalmente usando npm (Node Package Manager) con el siguiente comando:

npm install -g typescript


- Configurar nuestro proyecto TypeScript.Si aún no tenemos un archivo de configuración TypeScript (tsconfig.json), podemos generar uno ejecutando el siguiente comando en la raíz de nuestro proyecto:

   tsc --init

Este comando generará un archivo tsconfig.json con configuraciones predeterminadas. Podemos modificar este archivo según nuestras necesidades.

- Escribiremos nuestros códigos TypeScript con extensión .ts.

- Transpilaremos nuestro código TypeScript a JavaScript.Para transpilar nuestros archivos TypeScript a JavaScript, ejecutaremos el siguiente comando en la terminal en la raíz de nuestro proyecto:


tsc
Este comando buscará y transpilará todos los archivos TypeScript en nuestro proyecto según las configuraciones definidas en tsconfig.json.

- Ejecutaremos nuestra aplicación.Después de transpilar con éxito, podemos ejecutar nuestra aplicación JavaScript como lo haríamos normalmente. Por ejemplo, si nuestro archivo transpilado principal se llama app.js, podemos ejecutarlo usando el comando node app.js

Para usar Webpack y transpilar nuestra aplicación completa a un único archivo JavaScript (bundle.js), seguiremos los siguientes pasos:

-Instalación de Webpack y Babel.Nos Aseguraremos de tener instalado Webpack y Babel junto con los plugins necesarios para transpilar nuestro código TypeScript. Podemos instalar estas dependencias ejecutando los siguientes comandos en nuestra terminal:

npm install --save-dev webpack webpack-cli babel-loader @babel/core @babel/preset-env @babel/preset-typescript

-Configuración de Babel.Crearemos o actualizaremos nuestro archivo .babelrc en la raíz de nuestro proyecto con la siguiente configuración:

{
  "presets": [
    "@babel/preset-env",
    "@babel/preset-typescript"
  ]
}

- Configuración de Webpack.Crearemos un archivo de configuración de Webpack llamado webpack.config.js en la raíz de nuestro proyecto con la siguiente configuración:

const path = require('path');

module.exports = {
  entry: './app.ts', // Archivo de entrada principal de nuestra aplicación
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js', // Nombre del archivo de salida
    path: path.resolve(__dirname, 'dist'), // Carpeta de salida
  },
};

- Actualización de nuestro archivo HTML.En nuestro archivo index.html, actualizaremos la etiqueta <script> para cargar el archivo bundle.js generado por Webpack.


<script src="dist/bundle.js"></script>


-Ejecución de Webpack.Ejecutaremos el comando de Webpack en nuestra terminal para comenzar el proceso de transpilación y generación del bundle.


npx webpack --mode=production

El parámetro --mode=production le indica a Webpack que optimice el bundle para producción.

Webpack transpilará nuestra aplicación completa y generará un único archivo JavaScript llamado bundle.js en la carpeta dist. Este archivo contendrá todo nuestro código transpilado y listo para ser incluido en nuestra aplicación HTML.