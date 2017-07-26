const petBreeds = {
    siamese: 0,
    maineCoon: 1,
    siberianHusky: 2
};

class Pet {
    constructor() {
        this._breed = null;
        this._sound = null;
    }

    feedPet() {
        console.log(`${this._breed} is fed and happy!`);
    }

    patPet() {
        console.log(`"${this._sound}" by ${this._breed}.`);
    }
}

class Siamese extends Pet {
    constructor() {
        super();
        this._breed = 'Siamese';
        this._sound = 'Meow-meow!';
    }
}

class MaineCoon extends Pet {
    constructor() {
        super();
        this._breed = 'Maine Coon';
        this._sound = 'Purr...';
    }
}

class Dog extends Pet {    
    constructor() {
        super();
        this._breed = 'Siberian Husky';
        this._sound = 'Woof!';
    }
}

class PetCaretaker {
    choosePet(breed) { }

    carePet(breed) {
        let pet = this.choosePet(breed);

        if (!pet) return;

        pet.feedPet();
        pet.patPet();
    }
}

class CatCaretaker extends PetCaretaker {
    choosePet(breed) {
        if (breed === petBreeds.siamese) {
            return new Siamese();
        } else if (breed === petBreeds.maineCoon) {
            return new MaineCoon();
        } else {
            return null;
        }
    }
}

class DogCaretaker extends PetCaretaker {
    choosePet(breed) {
        if (breed === petBreeds.siberianHusky) {
            return new Dog();
        } else {
            return null;
        }
    }
}

let catCaretaker = new CatCaretaker();
let dogCaretaker = new DogCaretaker();

catCaretaker.carePet(petBreeds.siamese);
catCaretaker.carePet(petBreeds.maineCoon);
dogCaretaker.carePet(petBreeds.siberianHusky);
