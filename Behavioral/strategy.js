function extend(derived, base) {
    derived.prototype = Object.create(base.prototype);
    derived.prototype.constructor = derived;
}

function MeowSound() { }

MeowSound.prototype.makeSound = function () {
    return 'Meow meow meow!';
}

function PurrSound() { }

PurrSound.prototype.makeSound = function () {
    return 'Purrr... Purrrrr...';
}

function Cat(name) {
    this._name = name;
    this._soundBehavior = null;
}

Cat.prototype.performSound = function () {
    console.log(this._name + ': ' + this._soundBehavior.makeSound());
}

Cat.prototype.setSoundBehavior = function (sb) {
    this._soundBehavior = sb;
}

function Siamese(name) {
    Cat.apply(this, arguments);
    this._soundBehavior = new MeowSound();
}

extend(Siamese, Cat);

function MaineCoon(name) {
    Cat.apply(this, arguments);
    this._soundBehavior = new PurrSound();
}

extend(MaineCoon, Cat);

var siamese = new Siamese('Simba'),
    maineCoon = new MaineCoon('Oscar');

siamese.performSound();
maineCoon.performSound();
siamese.setSoundBehavior(new PurrSound());
siamese.performSound();
