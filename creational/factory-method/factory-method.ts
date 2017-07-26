enum PetBreeds {
    siamese,
    maineCoon,
    siberianHusky
}

abstract class Pet {
    protected abstract _breed: string;
    protected abstract _sound: string;

    public feedPet(): void {
        console.log(`${this._breed} is fed and happy!`);
    }

    public patPet(): void {
        console.log(`"${this._sound}" by ${this._breed}.`);
    }
}

class Siamese extends Pet {
    protected _breed: string = 'Siamese';
    protected _sound: string = 'Meow-meow!';
    
}

class MaineCoon extends Pet {
    protected _breed: string = 'Maine Coon';
    protected _sound: string = 'Purr...';
}

class Dog extends Pet {
    protected _breed: string = 'Siberian Husky';
    protected _sound: string = 'Woof!';
}

abstract class PetCaretaker {
    protected abstract choosePet(breed: PetBreeds): Pet;

    public carePet(breed: PetBreeds): void {
        let pet: Pet = this.choosePet(breed);

        if (!pet) return;

        pet.feedPet();
        pet.patPet();
    }
}

class CatCaretaker extends PetCaretaker {
    protected choosePet(breed: PetBreeds): Pet {
        if (breed === PetBreeds.siamese) {
            return new Siamese();
        } else if (breed === PetBreeds.maineCoon) {
            return new MaineCoon();
        } else {
            return null;
        }
    }
}

class DogCaretaker extends PetCaretaker {
    protected choosePet(breed: PetBreeds): Pet {
        if (breed === PetBreeds.siberianHusky) {
            return new Dog();
        } else {
            return null;
        }
    }
}

let catCaretaker: PetCaretaker = new CatCaretaker();
let dogCaretaker: PetCaretaker = new DogCaretaker();

catCaretaker.carePet(PetBreeds.siamese);
catCaretaker.carePet(PetBreeds.maineCoon);
dogCaretaker.carePet(PetBreeds.siberianHusky);
