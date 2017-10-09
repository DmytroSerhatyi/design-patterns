class Cat {
    constructor(name) {
        this._name = name;
    }

    getName() {
        return this._name;
    }

    greet(cat) {
        console.log(`Meow-meow, ${cat.getName()}!`);
    }

    makeSound() {
        console.log("Meow-meow-meow!");
    }
}

class CatProxy {
    constructor(cat) {
        this._cat = cat;
    }

    greet(cat) {
        if (this._cat !== cat) {
            this._cat.greet(cat);
        } else {
            console.log("Cat can't greet itself.");
        }
    }

    makeSound() {
        this._cat.makeSound();
    }
}

let simba = new Cat("Simba");
let oscar = new Cat("Oscar");

let simbaProxy = new CatProxy(simba);
let oscarProxy = new CatProxy(oscar);

oscarProxy.greet(simba);
simbaProxy.greet(oscar);

simbaProxy.greet(simba);
simbaProxy.makeSound();
