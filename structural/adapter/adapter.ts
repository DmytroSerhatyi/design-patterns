interface Pet {
    makeSound(): void;
    getName(): string;
}

class PetCaretaker {
    public sayPetName(pet: Pet): void {
        console.log(`${pet.getName()}!`);
        pet.makeSound();
    }
}

class Cat {
    private _name: string;

    constructor(name: string) {
        this._name = name;
    }

    public makeMeow(): void {
        console.log(`${this._name}: Meow-meow!`);
    }

    public getName(): string {
        return this._name;
    }
}

class CatAdapter implements Pet {
    private _cat: Cat;

    constructor(cat: Cat) {
        this._cat = cat;
    }

    public makeSound(): void {
        this._cat.makeMeow();
    }

    public getName(): string {
        return this._cat.getName();
    }
}

let cat: Cat = new Cat('Simba');
let petCaretaker: PetCaretaker = new PetCaretaker();
let catAdapter: CatAdapter = new CatAdapter(cat);

petCaretaker.sayPetName(catAdapter);
