abstract class Cat {
    protected abstract _breed: string;
    protected _name: string;

    constructor(name: string) {
        this._name = name;
    }

    public describe(): string {
        return `Cat ${this._name}\nDescription: ${this._breed}`;
    }
}

class Siamese extends Cat {
    protected _breed: string = 'Siamese';
}

class MaineCoon extends Cat {
    protected _breed: string = 'Maine Coon';
}

abstract class CatDecorator extends Cat {
    protected _breed: string = null;
    protected _cat: Cat;

    constructor(cat: Cat) {
        super(null);
        this._cat = cat;
    }

    public abstract describe(): string;
}

class Sleeping extends CatDecorator {
    public describe(): string {
        return `${this._cat.describe()}, sleeping`;
    }
}

class Purring extends CatDecorator {
    public describe(): string {
        return `${this._cat.describe()}, purring`;
    }
}

let simba: Cat = new Siamese('Simba');
let oscar: Cat = new MaineCoon('Oscar');

simba = new Purring(simba);
simba = new Sleeping(simba);

console.log(simba.describe());
console.log(oscar.describe());
