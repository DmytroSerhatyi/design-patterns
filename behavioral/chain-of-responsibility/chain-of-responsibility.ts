enum Dishes {
    breakfast,
    dinner,
    supper
}

abstract class Cat {
    protected _name: string;
    protected _successor: Cat;
    protected abstract _dish: Dishes;

    constructor(name: string, successor?: Cat) {
        this._name = name;
        this._successor = successor;
    }

    protected abstract _prepareDish(): string;

    public handleRequest(dish: Dishes): void {
        if (this._dish === dish) {
            console.log(`${this._name}: ${this._prepareDish()}`);
        } else if (this._successor) {
            this._successor.handleRequest(dish);
        }
    }
}

class Siamese extends Cat {
    protected _dish: Dishes = Dishes.breakfast;

    protected _prepareDish(): string {
        return "Breakfast is ready! Bon Appetit!";
    }
}

class MaineCoon extends Cat {
    protected _dish: Dishes = Dishes.dinner;

    protected _prepareDish(): string {
        return "There is a dinner! Let's begin!";
    }
}

class BritishShorthair extends Cat {
    protected _dish: Dishes = Dishes.supper;

    protected _prepareDish(): string {
        return "Time for supper! Yeah!";
    }
}

let britishShorthair: Cat = new BritishShorthair("Oliver");
let maineCoon: Cat = new MaineCoon("Oscar", britishShorthair);
let siamese: Cat = new Siamese("Simba", maineCoon);

siamese.handleRequest(Dishes.breakfast);
siamese.handleRequest(Dishes.dinner);
siamese.handleRequest(Dishes.supper);
