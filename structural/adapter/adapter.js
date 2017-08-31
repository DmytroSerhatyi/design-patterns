class PetCaretaker {
    sayPetName(pet) {
        console.log(`${pet.getName()}!`);
        pet.makeSound();
    }
}

class Cat {
    constructor(name) {
        this._name = name;
    }

    makeMeow() {
        console.log(`${this._name}: Meow-meow!`);
    }

    getName() {
        return this._name;
    }
}

class CatAdapter {
    constructor(cat) {
        this._cat = cat;
    }

    makeSound() {
        this._cat.makeMeow();
    }

    getName() {
        return this._cat.getName();
    }
}

let cat = new Cat('Simba');
let petCaretaker = new PetCaretaker();
let catAdapter = new CatAdapter(cat);

petCaretaker.sayPetName(catAdapter);
