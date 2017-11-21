interface Animal {
    getName(): string;
    makeSound(): void;
}

class AnimalCaretaker {
    protected _implementor: Animal

    constructor(animal: Animal) {
        this._implementor = animal;
    }

    public sayAnimalName(): void {
        console.log(`${this._implementor.getName()}!`);

        this._implementor.makeSound();
    }
}

class Cat implements Animal {
    private _name: string;

    constructor(name: string) {
        this._name = name;
    }

    public getName(): string {
        return this._name;
    }

    public makeSound(): void {
        console.log('Meow-meow!');
    }
}

class CatCaretaker extends AnimalCaretaker {
    public sayCatName(): void {
        console.log('Hey, cat!');

        this.sayAnimalName();
    }
}

let cat: Animal = new Cat('Simba');
let animalCaretaker: AnimalCaretaker = new AnimalCaretaker(cat);
let catCaretaker: CatCaretaker = new CatCaretaker(cat);

animalCaretaker.sayAnimalName();
catCaretaker.sayCatName();
