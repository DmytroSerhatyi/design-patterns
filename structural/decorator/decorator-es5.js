function extend(derived, base) {
    derived.prototype = Object.create(base.prototype);
    derived.prototype.constructor = derived;
}

function Cat(name) {
    this._breed = null;
    this._name = name;
}

Cat.prototype.describe = function () {
    return 'Cat ' + this._name + '\nDescription: ' + this._breed;
};

function Siamese(name) {
    Cat.apply(this, arguments);
    this._breed = 'Siamese';
}

extend(Siamese, Cat);

function MaineCoon(name) {
    Cat.apply(this, arguments);
    this._breed = 'Maine Coon';
}

extend(MaineCoon, Cat);

function CatDecorator(cat) {
    this._cat = cat;
}

extend(CatDecorator, Cat);

CatDecorator.prototype.describe = function () { };

function Sleeping(cat) {
    CatDecorator.apply(this, arguments);
}

extend(Sleeping, CatDecorator);

Sleeping.prototype.describe = function () {
    return this._cat.describe() + ', sleeping';
};

function Purring(cat) {
    CatDecorator.apply(this, arguments);
}

extend(Purring, CatDecorator);

Purring.prototype.describe = function () {
    return this._cat.describe() + ', purring';
};

var simba = new Siamese('Simba');
var oscar = new MaineCoon('Oscar');

simba = new Purring(simba);
simba = new Sleeping(simba);

console.log(simba.describe());
console.log(oscar.describe());
