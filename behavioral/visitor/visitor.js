class Cat {
    constructor(name, breed, sound) {
        this._name = name;
        this._breed = breed;
        this._sound = sound;
    }

    accept(visitor) {
        visitor.visit(this);
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

class InfoVisitor {
    visit(cat) {
        console.log(`${cat.breed} cat ${cat.name}.`);
    }
}

class SoundVisitor {
    visit(cat) {
        console.log(`${cat.name}: "${cat.sound}"`);
    }
}

let cats = [
    new Cat('Simba', 'Siamese', 'Meow-meow'),
    new Cat('Oscar', 'Maine Coon', 'Meoow')
];

let infoVisitor = new InfoVisitor();
let soundVisitor = new SoundVisitor();

for (let cat of cats) {
    cat.accept(infoVisitor);
    cat.accept(soundVisitor);
}
