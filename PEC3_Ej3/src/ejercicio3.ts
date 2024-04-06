abstract class Animal {
    static population: number = 0;
    constructor() {
        Animal.population++; // Incrementa el contador de población de animales
    }
    public abstract sound(): void;
}

class Dog extends Animal {
    color: string;

    constructor(color: string) {
        super(); // Llama al constructor de la clase padre (Animal)
        this.color = color; // Inicializa el color del perro
    }

    public sound() {
        console.log('WOW'); // Implementa el método abstracto sound para el perro
    }

    public iamadog() {
        console.log('yes, this is a dog');
    }
}

class Cat extends Animal {
    gender: string;

    constructor(gender: string) {
        super(); // Llama al constructor de la clase padre (Animal)
        this.gender = gender; // Inicializa el género del gato
    }

    public sound() {
        console.log('MEOW'); // Implementa el método abstracto sound para el gato
    }

    public iamacat() {
        console.log('yes, this is a cat');
    }
}

let animals: Animal[] = [];
animals.push(new Cat('male'));
animals.push(new Dog('white'));
animals.push(new Cat('female'));
animals.push(new Dog('black'));

for(let animal of animals){
    animal.sound(); // Llama al método sound de cada animal
    if (animal instanceof Cat) {
        animal.iamacat(); // Si es un gato, llama a la función iamacat
    } else if (animal instanceof Dog) {
        animal.iamadog(); // Si es un perro, llama a la función iamadog
    }
}

/**  loop prints these lines
MEOW
yes, this is a cat
WOW
yes, this is a dog
MEOW
yes, this is a cat
WOW
yes, this is a dog
*/

console.log(Animal.population); //4
