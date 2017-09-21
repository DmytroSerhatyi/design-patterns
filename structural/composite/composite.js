class AnimalGangComponent {
    add(component) { }

    getDescription() { }
}

class Animal extends AnimalGangComponent {
    constructor(name, species, breed) {
        super();
        this._name = name;
        this._species = species;
        this._breed = breed;
    }

    getDescription() {
        console.log(`${this._breed} ${this._species} ${this._name}.`);
    }
}

class AnimalGang extends AnimalGangComponent {
    constructor(name) {
        super();
        this._name = name;
        this._animals = [];
    }

    add(component) {
        this._animals.push(component);
    }

    getDescription() {
        console.log(`Animal gang "${this._name}".`);

        this._animals.forEach(animal => {
            animal.getDescription();
        });
    }
}

let simba = new Animal('Simba', 'cat', 'Siamese');
let oscar = new Animal('Oscar', 'cat', 'Maine Coon');
let oliver = new Animal('Oliver', 'cat', 'British Shorthair');
let elvis = new Animal('Elvis', 'dog', 'Siberian Husky');
let buddy = new Animal('Buddy', 'dog', 'Retriever');
let bruno = new Animal('Bruno', 'dog', 'Alabai');

let mainGang = new AnimalGang('Animals');
let catGang = new AnimalGang('Cats');
let dogGang = new AnimalGang('Dogs');

mainGang.add(simba);
mainGang.add(elvis);
catGang.add(oscar);
catGang.add(oliver);
mainGang.add(catGang);
dogGang.add(buddy);
dogGang.add(bruno);
mainGang.add(dogGang);

mainGang.getDescription();
