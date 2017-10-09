function Cat(name) {
    this._name = name;
}

Cat.prototype.getName = function () {
    return this._name;
};

Cat.prototype.greet = function (cat) {
    console.log("Meow-meow, " + cat.getName() + "!");
};

Cat.prototype.makeSound = function () {
    console.log("Meow-meow-meow!");
};

function CatProxy(cat) {
    this._cat = cat;
}

CatProxy.prototype.greet = function (cat) {
    if (this._cat !== cat) {
        this._cat.greet(cat);
    } else {
        console.log("Cat can't greet itself.");
    }
};

CatProxy.prototype.makeSound = function () {
    this._cat.makeSound();
};

var simba = new Cat("Simba");
var oscar = new Cat("Oscar");

var simbaProxy = new CatProxy(simba);
var oscarProxy = new CatProxy(oscar);

oscarProxy.greet(simba);
simbaProxy.greet(oscar);

simbaProxy.greet(simba);
simbaProxy.makeSound();
