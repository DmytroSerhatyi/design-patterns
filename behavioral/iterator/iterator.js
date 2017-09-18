class Cat {
    constructor(name, breed) {
        this._name = name;
        this._breed = breed;
    }

    getDescripion() {
        return `${this._breed} cat ${this._name}.`;
    }
}

class CatGangIterator {
    constructor(cats) {
        this._cats = cats;
        this._position = 0;
    }

    hasNext() {
        if (this._position >= this._cats.length) {
            return false;
        } else {
            return true;
        }
    }

    next() {
        return this._cats[this._position++];
    }
}

class CatGang {
    constructor() {
        this._cats = [];
    }

    addCat(cat) {
        this._cats.push(cat);
    }

    createIterator() {
        return new CatGangIterator(this._cats);
    }
}

let simba = new Cat('Simba', 'Siamese');
let oscar = new Cat('Oscar', 'Maine Coon');
let oliver = new Cat('Oliver', 'British Shorthair');

let catGang = new CatGang();
catGang.addCat(simba);
catGang.addCat(oscar);
catGang.addCat(oliver);

let catGangIterator = catGang.createIterator();

while (catGangIterator.hasNext()) {
    let cat = catGangIterator.next();
    console.log(cat.getDescripion());
}
