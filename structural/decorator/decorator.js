class Cat {
    constructor(name) {
        this._breed = null;
        this._name = name;
    }

    describe() {
        return `Cat ${this._name}\nDescription: ${this._breed}`;
    }
}

class Siamese extends Cat {
    constructor(name) {
        super(name);
        this._breed = 'Siamese';
    }
}

class MaineCoon extends Cat {
    constructor(name) {
        super(name);
        this._breed = 'Maine Coon';
    }
}

class CatDecorator extends Cat {
    constructor(cat) {
        super(null);
        this._cat = cat;
    }
}

class Sleeping extends CatDecorator {
    describe() {
        return `${this._cat.describe()}, sleeping`;
    }
}

class Purring extends CatDecorator {
    describe() {
        return `${this._cat.describe()}, purring`;
    }
}

let simba = new Siamese('Simba');
let oscar = new MaineCoon('Oscar');

simba = new Purring(simba);
simba = new Sleeping(simba);

console.log(simba.describe());
console.log(oscar.describe());
