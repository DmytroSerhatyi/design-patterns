class Cat {
    private _name: string;
    private _breed: string;
    private _sound: string;

    constructor(name: string, breed: string, sound: string) {
        this._name = name;
        this._breed = breed;
        this._sound = sound;
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

class Visitor {
    public makeSound(cat: Cat): void {
        console.log(`${cat.name}: "${cat.sound}"`);
    }

    public getInfo(cat: Cat): void {
        console.log(`${cat.breed} cat ${cat.name}.`);
    }
}

let cats: Cat[] = [
    new Cat('Simba', 'Siamese', 'Meow-meow'),
    new Cat('Oscar', 'Maine Coon', 'Meoow')
];

let visitor: Visitor = new Visitor();

for (let cat of cats) {
    visitor.makeSound(cat);
    visitor.getInfo(cat);
}
