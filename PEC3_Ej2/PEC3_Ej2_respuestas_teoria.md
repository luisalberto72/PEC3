![Captura de pantalla](Captura_Pec3_2.png)

Con esta modificación, la línea const d = c.apple * 4; generará un TypeError en tiempo de compilación debido a que c.apple ya no es un número. Esto debería hacer que aparezca una línea roja de error en el IDE (Visual Studio Code), indicando que se está intentando realizar una operación no válida (multiplicación) en un tipo que no es numérico.

La ventaja de esto es que permite detectar errores en tiempo de compilación en lugar de en tiempo de ejecución, lo que conduce a un código más confiable y seguro.

- Para cada uno de los valores del fichero code2.ts, ¿Qué tipo de datos inferirá TypeScript? Explica por qué se ha inferido este tipo de datos

const a = 1042; - TypeScript inferirá el tipo number. Esto se debe a que el valor proporcionado es un número entero, por lo que TypeScript lo infiere como un tipo numérico.

const b = 'apples and oranges'; - TypeScript inferirá el tipo string. El valor proporcionado es una cadena de texto, por lo que TypeScript lo infiere como un tipo de cadena.

const c = 'pineapples'; - TypeScript inferirá también el tipo string. Al igual que en el caso anterior, el valor proporcionado es una cadena de texto.

const d = [true, true, false]; - TypeScript inferirá el tipo boolean[] (array de booleanos). Esto se debe a que todos los elementos dentro de la matriz son booleanos, por lo que TypeScript infiere el tipo de la matriz en consecuencia.

const e = { type: 'ficus' }; - TypeScript inferirá el tipo { type: string }. Aquí TypeScript infiere un objeto con una propiedad type que es una cadena de texto, basándose en el valor proporcionado.

const f = [1, false]; - TypeScript inferirá el tipo (number | boolean) [] . La matriz contiene elementos de diferentes tipos (número y booleano), por lo que TypeScript infiere un tipo de unión de número o booleano para la matriz.

const g = [3]; - TypeScript inferirá el tipo number[]. Aunque la matriz contiene un solo elemento, es un número, por lo que TypeScript infiere el tipo de la matriz como una matriz de números.

const h = null; - TypeScript inferirá el tipo null. El valor proporcionado es nulo, por lo que TypeScript infiere el tipo de la variable como nulo.

TypeScript infiere los tipos de datos en base a los valores proporcionados en las declaraciones de variables, utilizando la información disponible para determinar el tipo más adecuado para cada variable.

- ¿Por qué se dispara cada uno de los errores del fichero code3.ts?

const i: 3 = 3; y i = 4;:

Error TS2588: No se puede asignar a 'i' porque es una constante.
i se declara como una constante con el valor 3. Por lo tanto, no se puede asignar un nuevo valor a i después de su inicialización, lo que provoca este error.


const j = [1, 2, 3]; y j.push(4); y j.push('5');:

Error TS2345: El argumento de tipo '"5"' no es asignable al parámetro de tipo 'number'.
j se declara como un array de números, pero en la tercera línea se intenta agregar el string '5' al array, lo cual es incompatible con el tipo de array definido.


let k: never = 4;:

Error TS2322: El tipo '4' no es asignable al tipo 'never'.
k se declara como una variable de tipo never, pero se le asigna el valor 4, lo cual es incompatible con el tipo never, que debería representar un tipo de valor que nunca se puede obtener.

let l: unknown = 4; y let m = l * 2;:

Error TS2571: El objeto es de tipo 'unknown'.
l se declara como una variable de tipo unknown, que representa un tipo que no se sabe en tiempo de compilación. Luego, en la segunda línea, se intenta realizar una operación de multiplicación con l, lo cual es inválido porque TypeScript no puede garantizar que l sea de un tipo numérico en tiempo de compilación.

- ¿Cuál es la diferencia entre una clase y una interface en TypeScript?

En TypeScript, tenemos dos formas principales de definir la estructura y comportamiento de nuestros objetos: interfaces y clases. Ambas tienen sus propias ventajas y situaciones en las que son más apropiadas. 

Las interfaces en TypeScript son una forma de definir la estructura de un objeto. Nos permiten describir las propiedades y métodos que un objeto debe tener sin proporcionar una implementación concreta. En otras palabras, las interfaces definen un contrato que los objetos deben cumplir.

Ejemplo:

interface Persona {
  nombre: string;
  edad: number;
  saludar(): void;
}

class Estudiante implements Persona {
  nombre: string;
  edad: number;

  constructor(nombre: string, edad: number) {
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar() {
    console.log(`Hola, mi nombre es ${this.nombre}`);
  }
}


Las clases en TypeScript son una forma de definir objetos con propiedades y métodos. A diferencia de las interfaces, las clases pueden proporcionar una implementación concreta de los métodos y propiedades que definen.

Ejemplo:

class Coche {
  marca: string;
  modelo: string;
  año: number;

  constructor(marca: string, modelo: string, año: number) {
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
  }

  acelerar() {
    console.log('El coche está acelerando');
  }
}

En resumen, las clases se utilizan para definir la estructura y el comportamiento de los objetos, mientras que las interfaces se utilizan para definir la forma que deben tener los objetos y cómo deben interactuar con otros objetos.