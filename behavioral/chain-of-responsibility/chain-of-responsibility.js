const DISHES = {
    breakfast: 0,
    dinner: 1,
    supper: 2
};

class Cat {
    constructor(name, successor) {
        this._name = name;
        this._successor = successor;
        this._dish = null;
    }

    _prepareDish() { }

    handleRequest(dish) {
        if (this._dish === dish) {
            console.log(`${this._name}: ${this._prepareDish()}`);
        } else if (this._successor) {
            this._successor.handleRequest(dish);
        }
    }
}

class Siamese extends Cat {
    constructor(name, successor) {
        super(name, successor);

        this._dish = DISHES.breakfast;
    }

    _prepareDish() {
        return "Breakfast is ready! Bon Appetit!";
    }
}

class MaineCoon extends Cat {
    constructor(name, successor) {
        super(name, successor);

        this._dish = DISHES.dinner;
    }

    _prepareDish() {
        return "There is a dinner! Let's begin!";
    }
}

class BritishShorthair extends Cat {
    constructor(name, successor) {
        super(name, successor);

        this._dish = DISHES.supper;
    }

    _prepareDish() {
        return "Time for supper! Yeah!";
    }
}

let britishShorthair = new BritishShorthair("Oliver");
let maineCoon = new MaineCoon("Oscar", britishShorthair);
let siamese = new Siamese("Simba", maineCoon);

siamese.handleRequest(DISHES.breakfast);
siamese.handleRequest(DISHES.dinner);
siamese.handleRequest(DISHES.supper);
