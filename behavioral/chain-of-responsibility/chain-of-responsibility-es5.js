function extend(derived, base) {
    derived.prototype = Object.create(base.prototype);
    derived.prototype.constructor = derived;
}

var DISHES = {
    breakfast: 0,
    dinner: 1,
    supper: 2
};

function Cat(name, successor) {
    this._name = name;
    this._successor = successor;
    this._dish = null;
}

Cat.prototype._prepareDish = function () { };

Cat.prototype.handleRequest = function (dish) {
    if (this._dish === dish) {
        console.log(this._name + ": " + this._prepareDish());
    } else if (this._successor) {
        this._successor.handleRequest(dish);
    }
};

function Siamese(name, successor) {
    Cat.apply(this, arguments);

    this._dish = DISHES.breakfast;
}

extend(Siamese, Cat);

Siamese.prototype._prepareDish = function () {
    return "Breakfast is ready! Bon Appetit!";
};

function MaineCoon(name, successor) {
    Cat.apply(this, arguments);

    this._dish = DISHES.dinner;
}

extend(MaineCoon, Cat);

MaineCoon.prototype._prepareDish = function () {
    return "There is a dinner! Let's begin!";
};

function BritishShorthair(name, successor) {
    Cat.apply(this, arguments);

    this._dish = DISHES.supper;
}

extend(BritishShorthair, Cat);

BritishShorthair.prototype._prepareDish = function () {
    return "Time for supper! Yeah!";
};

var britishShorthair = new BritishShorthair("Oliver");
var maineCoon = new MaineCoon("Oscar", britishShorthair);
var siamese = new Siamese("Simba", maineCoon);

siamese.handleRequest(DISHES.breakfast);
siamese.handleRequest(DISHES.dinner);
siamese.handleRequest(DISHES.supper);
