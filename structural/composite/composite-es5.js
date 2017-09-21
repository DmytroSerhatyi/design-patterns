function extend(derived, base) {
    derived.prototype = Object.create(base.prototype);
    derived.prototype.constructor = derived;
}

function AnimalGangComponent() { }

AnimalGangComponent.prototype.add = function (component) { };

AnimalGangComponent.prototype.getDescription = function () { };

function Animal(name, species, breed) {
    this._name = name;
    this._species = species;
    this._breed = breed;
}

extend(Animal, AnimalGangComponent);

Animal.prototype.getDescription = function () {
    console.log(this._breed + ' ' + this._species + ' ' + this._name + '.');
};

function AnimalGang(name) {
    this._name = name;
    this._animals = [];
}

extend(AnimalGang, AnimalGangComponent);

AnimalGang.prototype.add = function (component) {
    this._animals.push(component);
};

AnimalGang.prototype.getDescription = function () {
    console.log('Animal gang "' + this._name + '".');

    this._animals.forEach(function (animal) {
        animal.getDescription();
    });
};

var simba = new Animal('Simba', 'cat', 'Siamese');
var oscar = new Animal('Oscar', 'cat', 'Maine Coon');
var oliver = new Animal('Oliver', 'cat', 'British Shorthair');
var elvis = new Animal('Elvis', 'dog', 'Siberian Husky');
var buddy = new Animal('Buddy', 'dog', 'Retriever');
var bruno = new Animal('Bruno', 'dog', 'Alabai');

var mainGang = new AnimalGang('Animals');
var catGang = new AnimalGang('Cats');
var dogGang = new AnimalGang('Dogs');

mainGang.add(simba);
mainGang.add(elvis);
catGang.add(oscar);
catGang.add(oliver);
mainGang.add(catGang);
dogGang.add(buddy);
dogGang.add(bruno);
mainGang.add(dogGang);

mainGang.getDescription();
