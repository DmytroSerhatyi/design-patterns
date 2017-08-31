class Cat {
    private _name: string;

    constructor(name: string) {
        this._name = name;
    }

    public jumpUp(barrier: string): void {
        console.log(`${this._name} is on top of ${barrier}!`);
    }

    public jumpDown(barrier: string): void {
        console.log(`${this._name} jumped down from ${barrier}!`);
    }
}

class CatJumpsOverBarrierFacade {
    private _cat: Cat;

    constructor(cat: Cat) {
        this._cat = cat;
    }

    public jumpOverBarrier(barrier: string): void {
        this._cat.jumpUp(barrier);
        this._cat.jumpDown(barrier);
    }
}

let cat: Cat = new Cat('Simba');
let catJumpsOverBarrierFacade: CatJumpsOverBarrierFacade = new CatJumpsOverBarrierFacade(cat);

catJumpsOverBarrierFacade.jumpOverBarrier('fence');
