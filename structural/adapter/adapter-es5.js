function PetCaretaker() { }

PetCaretaker.prototype.sayPetName = function (pet) {
    console.log(pet.getName() + '!');
    pet.makeSound();
};

function Cat(name) {
    this._name = name;
}

Cat.prototype.makeMeow = function () {
    console.log(this._name + ': Meow-meow!');
};

Cat.prototype.getName = function () {
    return this._name;
};

function CatAdapter(cat) {
    this._cat = cat;
}

CatAdapter.prototype.makeSound = function () {
    this._cat.makeMeow();
};

CatAdapter.prototype.getName = function () {
    return this._cat.getName();
};

var cat = new Cat('Simba');
var petCaretaker = new PetCaretaker();
var catAdapter = new CatAdapter(cat);

petCaretaker.sayPetName(catAdapter);
