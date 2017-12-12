class Cat {
    constructor(name, breed, sound) {
        this._name = name;
        this._breed = breed;
        this._sound = sound;
    }

    get name() {
        return this._name;
    }

    get breed() {
        return this._breed;
    }

    get sound() {
        return this._sound;
    }
}

class Visitor {
    makeSound(cat) {
        console.log(`${cat.name}: "${cat.sound}"`);
    }

    getInfo(cat) {
        console.log(`${cat.breed} cat ${cat.name}.`);
    }
}

let cats = [
    new Cat('Simba', 'Siamese', 'Meow-meow'),
    new Cat('Oscar', 'Maine Coon', 'Meoow')
];

let visitor = new Visitor();

for (let cat of cats) {
    visitor.makeSound(cat);
    visitor.getInfo(cat);
}
