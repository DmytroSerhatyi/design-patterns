abstract class AnimalGangComponent {
    public add(component: AnimalGangComponent): void { }

    public getDescription(): void { }
}

class Animal extends AnimalGangComponent {
    private _name: string;
    private _species: string;
    private _breed: string;

    constructor(name: string, species: string, breed: string) {
        super();
        this._name = name;
        this._species = species;
        this._breed = breed;
    }

    public getDescription(): void {
        console.log(`${this._breed} ${this._species} ${this._name}.`);
    }
}

class AnimalGang extends AnimalGangComponent {
    private _name: string;
    private _animals: AnimalGangComponent[] = [];

    constructor(name: string) {
        super();
        this._name = name;
    }

    public add(component: AnimalGangComponent): void {
        this._animals.push(component);
    }

    public getDescription(): void {
        console.log(`Animal gang "${this._name}".`);

        this._animals.forEach(animal => {
            animal.getDescription();
        });
    }
}

let simba: Animal = new Animal('Simba', 'cat', 'Siamese');
let oscar: Animal = new Animal('Oscar', 'cat', 'Maine Coon');
let oliver: Animal = new Animal('Oliver', 'cat', 'British Shorthair');
let elvis: Animal = new Animal('Elvis', 'dog', 'Siberian Husky');
let buddy: Animal = new Animal('Buddy', 'dog', 'Retriever');
let bruno: Animal = new Animal('Bruno', 'dog', 'Alabai');

let mainGang: AnimalGang = new AnimalGang('Animals');
let catGang: AnimalGang = new AnimalGang('Cats');
let dogGang: AnimalGang = new AnimalGang('Dogs');

mainGang.add(simba);
mainGang.add(elvis);
catGang.add(oscar);
catGang.add(oliver);
mainGang.add(catGang);
dogGang.add(buddy);
dogGang.add(bruno);
mainGang.add(dogGang);

mainGang.getDescription();
