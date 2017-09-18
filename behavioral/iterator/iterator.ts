class Cat {
    private _name: string;
    private _breed: string;

    constructor(name: string, breed: string) {
        this._name = name;
        this._breed = breed;
    }

    public getDescripion(): string {
        return `${this._breed} cat ${this._name}.`;
    }
}

interface IIterator {
    hasNext(): boolean;
    next(): Object;
}

class CatGangIterator implements IIterator {
    private _cats: Cat[];
    private _position: number = 0;

    constructor(cats: Cat[]) {
        this._cats = cats;
    }

    public hasNext(): boolean {
        if (this._position >= this._cats.length) {
            return false;
        } else {
            return true;
        }
    }

    public next(): Object {
        return this._cats[this._position++];
    }
}

class CatGang {
    private _cats: Cat[] = [];

    public addCat(cat: Cat): void {
        this._cats.push(cat);
    }

    public createIterator(): IIterator {
        return new CatGangIterator(this._cats);
    }
}

let simba: Cat = new Cat('Simba', 'Siamese');
let oscar: Cat = new Cat('Oscar', 'Maine Coon');
let oliver: Cat = new Cat('Oliver', 'British Shorthair');

let catGang: CatGang = new CatGang();
catGang.addCat(simba);
catGang.addCat(oscar);
catGang.addCat(oliver);

let catGangIterator: IIterator = catGang.createIterator();

while (catGangIterator.hasNext()) {
    let cat: Cat = <Cat>catGangIterator.next();
    console.log(cat.getDescripion());
}
