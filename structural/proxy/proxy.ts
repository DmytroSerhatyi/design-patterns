interface ICat {
    greet(cat: Cat): void;
    makeSound(): void;
}

class Cat implements ICat {
    private _name: string;

    constructor(name: string) {
        this._name = name;
    }

    public getName(): string {
        return this._name;
    }

    public greet(cat: Cat): void {
        console.log(`Meow-meow, ${cat.getName()}!`);
    }

    public makeSound(): void {
        console.log("Meow-meow-meow!");
    }
}

class CatProxy implements ICat {
    private _cat: Cat;

    constructor(cat: Cat) {
        this._cat = cat;
    }

    public greet(cat: Cat): void {
        if (this._cat !== cat) {
            this._cat.greet(cat);
        } else {
            console.log("Cat can't greet itself.");
        }
    }

    public makeSound(): void {
        this._cat.makeSound();
    }
}

let simba: Cat = new Cat("Simba");
let oscar: Cat = new Cat("Oscar");

let simbaProxy: CatProxy = new CatProxy(simba);
let oscarProxy: CatProxy = new CatProxy(oscar);

oscarProxy.greet(simba);
simbaProxy.greet(oscar);

simbaProxy.greet(simba);
simbaProxy.makeSound();
