function extend(derived, base) {
    derived.prototype = Object.create(base.prototype);
    derived.prototype.constructor = derived;
}

function Siamese() { }

Siamese.prototype.getBreed = function () {
    return 'Siamese';
};

function MaineCoon() { }

MaineCoon.prototype.getBreed = function () {
    return 'Maine Coon';
};

function Alabai() { }

Alabai.prototype.getBreed = function () {
    return 'Alabai';
};

function Retriever() { }

Retriever.prototype.getBreed = function () {
    return 'Retriever';
};

function Thailand() { }

Thailand.prototype.getOrigin = function () {
    return 'Thailand';
};

function Maine() { }

Maine.prototype.getOrigin = function () {
    return 'Maine, United States of America';
};

function Kazakhstan() { }

Kazakhstan.prototype.getOrigin = function () {
    return 'Kazakhstan';
};

function Canada() { }

Canada.prototype.getOrigin = function () {
    return 'Canada';
};

function AsianComponentsFactory() { }

AsianComponentsFactory.prototype.setCatBreed = function() {
    return new Siamese();
};

AsianComponentsFactory.prototype.setCatOrigin = function() {
    return new Thailand();
};

AsianComponentsFactory.prototype.setDogBreed = function() {
    return new Alabai();
};

AsianComponentsFactory.prototype.setDogOrigin = function() {
    return new Kazakhstan();
};

function AmericanComponentsFactory() { }

AmericanComponentsFactory.prototype.setCatBreed = function() {
    return new MaineCoon();
};

AmericanComponentsFactory.prototype.setCatOrigin = function() {
    return new Maine();
};

AmericanComponentsFactory.prototype.setDogBreed = function() {
    return new Retriever();
};

AmericanComponentsFactory.prototype.setDogOrigin = function() {
    return new Canada();
};

function AnimalQuery(componentsFactory) {
    this._species = null;
    this._breed = null;
    this._origin = null;
    this._componentsFactory = componentsFactory;
}

AnimalQuery.prototype.composeQuery = function() { };

AnimalQuery.prototype.showDescription = function() {
    console.log(this._breed.getBreed() + ' is a ' + this._species + ' breed from ' + this._origin.getOrigin() + '.');
}

function CatQuery(componentsFactory) {
    AnimalQuery.apply(this, arguments);
    this._species = 'cat';
}

extend(CatQuery, AnimalQuery);

CatQuery.prototype.composeQuery = function() {
    this._breed = this._componentsFactory.setCatBreed();
    this._origin = this._componentsFactory.setCatOrigin();
}

function DogQuery(componentsFactory) {
    AnimalQuery.apply(this, arguments);
    this._species = 'dog';
}

extend(DogQuery, AnimalQuery);

DogQuery.prototype.composeQuery = function() {
    this._breed = this._componentsFactory.setDogBreed();
    this._origin = this._componentsFactory.setDogOrigin();
}

var americanComponentsFactory = new AmericanComponentsFactory();
var asianComponentsFactory = new AsianComponentsFactory();

function fulfillQuery(query) {
    query.composeQuery();
    query.showDescription();
}

var siameseQuery = new CatQuery(asianComponentsFactory);
fulfillQuery(siameseQuery);

var maineCoonQuery = new CatQuery(americanComponentsFactory);
fulfillQuery(maineCoonQuery);

var alabaiQuery = new DogQuery(asianComponentsFactory);
fulfillQuery(alabaiQuery);

var retrieverQuery = new DogQuery(americanComponentsFactory);
fulfillQuery(retrieverQuery);
