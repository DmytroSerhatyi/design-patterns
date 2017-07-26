function extend(derived, base) {
    derived.prototype = Object.create(base.prototype);
    derived.prototype.constructor = derived;
}

var PET_BREEDS = {
    siamese: 0,
    maineCoon: 1,
    siberianHusky: 2
};

function Pet() {
    this._breed = null;
    this._sound = null;
}

Pet.prototype.feedPet = function () {
    console.log(this._breed + ' is fed and happy!');
};

Pet.prototype.patPet = function () {
    console.log('"' + this._sound + '" by ' + this._breed + '.');
};

function Siamese() {
    Pet.apply(this, arguments);
    this._breed = 'Siamese';
    this._sound = 'Meow-meow!';
}

extend(Siamese, Pet);

function MaineCoon() {
    Pet.apply(this, arguments);
    this._breed = 'Maine Coon';
    this._sound = 'Purr...';
}

extend(MaineCoon, Pet);

function Dog() {
    Pet.apply(this, arguments);
    this._breed = 'Siberian Husky';
    this._sound = 'Woof!';
}

extend(Dog, Pet);

function PetCaretaker() { }

PetCaretaker.prototype.choosePet = function (breed) { };

PetCaretaker.prototype.carePet = function (breed) {
    var pet = this.choosePet(breed);

    if (!pet) return;

    pet.feedPet();
    pet.patPet();
};

function CatCaretaker() {
    PetCaretaker.apply(this, arguments);
}

extend(CatCaretaker, PetCaretaker);

CatCaretaker.prototype.choosePet = function (breed) {
    if (breed === PET_BREEDS.siamese) {
        return new Siamese();
    } else if (breed === PET_BREEDS.maineCoon) {
        return new MaineCoon();
    } else {
        return null;
    }
};

function DogCaretaker() {
    PetCaretaker.apply(this, arguments);
}

extend(DogCaretaker, PetCaretaker);

DogCaretaker.prototype.choosePet = function (breed) {
    if (breed === PET_BREEDS.siberianHusky) {
        return new Dog();
    } else {
        return null;
    }
};

var catCaretaker = new CatCaretaker();
var dogCaretaker = new DogCaretaker();

catCaretaker.carePet(PET_BREEDS.siamese);
catCaretaker.carePet(PET_BREEDS.maineCoon);
dogCaretaker.carePet(PET_BREEDS.siberianHusky);
