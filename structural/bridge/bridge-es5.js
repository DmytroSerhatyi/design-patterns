function extend(derived, base) {
    derived.prototype = Object.create(base.prototype);
    derived.prototype.constructor = derived;
}

function AnimalCaretaker(animal) {
    this._implementor = animal;
}

AnimalCaretaker.prototype.sayAnimalName = function () {
    console.log(this._implementor.getName() + '!');

    this._implementor.makeSound();
};

function Cat(name) {
    this._name = name;
}

Cat.prototype.getName = function () {
    return this._name;
};

Cat.prototype.makeSound = function () {
    console.log('Meow-meow!');
};

function CatCaretaker() {
    AnimalCaretaker.apply(this, arguments);
}

extend(CatCaretaker, AnimalCaretaker);

CatCaretaker.prototype.sayCatName = function () {
    console.log('Hey, cat!');

    this.sayAnimalName();
};

var cat = new Cat('Simba');
var animalCaretaker = new AnimalCaretaker(cat);
var catCaretaker = new CatCaretaker(cat);

animalCaretaker.sayAnimalName();
catCaretaker.sayCatName();
