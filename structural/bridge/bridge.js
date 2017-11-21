class AnimalCaretaker {
    constructor(animal) {
        this._implementor = animal;
    }

    sayAnimalName() {
        console.log(`${this._implementor.getName()}!`);

        this._implementor.makeSound();
    }
}

class Cat {
    constructor(name) {
        this._name = name;
    }

    getName() {
        return this._name;
    }

    makeSound() {
        console.log('Meow-meow!');
    }
}

class CatCaretaker extends AnimalCaretaker {
    sayCatName() {
        console.log('Hey, cat!');

        this.sayAnimalName();
    }
}

let cat = new Cat('Simba');
let animalCaretaker = new AnimalCaretaker(cat);
let catCaretaker = new CatCaretaker(cat);

animalCaretaker.sayAnimalName();
catCaretaker.sayCatName();
