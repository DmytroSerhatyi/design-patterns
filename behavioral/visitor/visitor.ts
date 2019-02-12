class Cat {
    private _name: string;
    private _breed: string;
    private _sound: string;

    constructor(name: string, breed: string, sound: string) {
        this._name = name;
        this._breed = breed;
        this._sound = sound;
    }

    public accept(visitor: Visitor): void {
        visitor.visit(this);
    }

    public get name(): string {
        return this._name;
    }

    public get breed(): string {
        return this._breed;
    }

    public get sound(): string {
        return this._sound;
    }
}

interface Visitor {
    visit(cat: Cat): void;
}

class InfoVisitor implements Visitor {
    public visit(cat: Cat): void {
        console.log(`${cat.breed} cat ${cat.name}.`);
    }
}

class SoundVisitor implements Visitor {
    public visit(cat: Cat): void {
        console.log(`${cat.name}: "${cat.sound}"`);
    }
}

let cats: Cat[] = [
    new Cat('Simba', 'Siamese', 'Meow-meow'),
    new Cat('Oscar', 'Maine Coon', 'Meoow')
];

let infoVisitor: Visitor = new InfoVisitor();
let soundVisitor: Visitor = new SoundVisitor();

for (let cat of cats) {
    cat.accept(infoVisitor);
    cat.accept(soundVisitor);
}
