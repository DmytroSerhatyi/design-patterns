class Cat {
    constructor(name) {
        this._name = name;
    }

    jumpUp(barrier) {
        console.log(`${this._name} is on top of ${barrier}!`);
    }

    jumpDown(barrier) {
        console.log(`${this._name} jumped down from ${barrier}!`);
    }
}

class CatJumpsOverBarrierFacade {
    constructor(cat) {
        this._cat = cat;
    }

    jumpOverBarrier(barrier) {
        this._cat.jumpUp(barrier);
        this._cat.jumpDown(barrier);
    }
}

let cat = new Cat('Simba');
let catJumpsOverBarrierFacade = new CatJumpsOverBarrierFacade(cat);

catJumpsOverBarrierFacade.jumpOverBarrier('fence');
