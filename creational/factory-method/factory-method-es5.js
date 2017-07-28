function extend(derived, base) {
    derived.prototype = Object.create(base.prototype);
    derived.prototype.constructor = derived;
}

var ANIMAL_BREEDS = {
    siamese: 0,
    maineCoon: 1,
    siberianHusky: 2
};

function AnimalData() {
    this._breed = null;
    this._origin = null;
}

AnimalData.prototype.composeBreedData = function () {
    return 'Breed: ' + this._breed;
};

AnimalData.prototype.composeOriginData = function () {
    return 'From: ' + this._origin;
};

function SiameseData() {
    AnimalData.apply(this, arguments);
    this._breed = 'Siamese';
    this._origin = 'Thailand';
}

extend(SiameseData, AnimalData);

function MaineCoonData() {
    AnimalData.apply(this, arguments);
    this._breed = 'Maine Coon';
    this._origin = 'Maine, United States of America';
}

extend(MaineCoonData, AnimalData);

function SiberianHuskyData() {
    AnimalData.apply(this, arguments);
    this._breed = 'Siberian Husky';
    this._origin = 'Siberia';
}

extend(SiberianHuskyData, AnimalData);

function AnimalDatabase() { }

AnimalDatabase.prototype._makeQuery = function (breed) { };

AnimalDatabase.prototype.searchByBreed = function (breed) {
    var animal = this._makeQuery(breed);

    return animal.composeBreedData() + '\n' + animal.composeOriginData();
};

function CatDatabase() {
    AnimalDatabase.apply(this, arguments);
}

extend(CatDatabase, AnimalDatabase);

CatDatabase.prototype._makeQuery = function (breed) {
    if (breed === ANIMAL_BREEDS.siamese) {
        return new SiameseData();
    } else if (breed === ANIMAL_BREEDS.maineCoon) {
        return new MaineCoonData();
    } else {
        return null;
    }
};

function DogDatabase() {
    AnimalDatabase.apply(this, arguments);
}

extend(DogDatabase, AnimalDatabase);

DogDatabase.prototype._makeQuery = function (breed) {
    if (breed === ANIMAL_BREEDS.siberianHusky) {
        return new SiberianHuskyData();
    } else {
        return null;
    }
};

var catDatabase = new CatDatabase();
var dogDatabase = new DogDatabase();

console.log(catDatabase.searchByBreed(ANIMAL_BREEDS.siamese));
console.log(catDatabase.searchByBreed(ANIMAL_BREEDS.maineCoon));
console.log(dogDatabase.searchByBreed(ANIMAL_BREEDS.siberianHusky));
