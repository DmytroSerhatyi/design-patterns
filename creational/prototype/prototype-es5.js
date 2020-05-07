function Cat(name, breed, sound) {
    this._name = name;
    this._breed = breed;
    this._sound = sound;
    this._everMadeSound = false;
    this._cloned = false;
}

Cat.prototype.makeSound = function () {
    this._everMadeSound = true;
    console.log(this._sound);
};

Cat.prototype.getInfo = function () {
    var title = 'Cat info:';
    var name = 'name: ' + this._name;
    var breed = 'breed: ' + this._breed;
    var sound = 'sound: ' + this._sound;
    var everMadeSound = 'ever made sound: ' + this._everMadeSound;
    var cloned = 'cloned: ' + this._cloned;

    console.log(
        title + '\n' + name + '\n' + breed + '\n'
            + sound + '\n' + everMadeSound + '\n' + cloned + '\n\n'
    );
};

Cat.prototype.cloneObject = function () {
    var clone = new Cat(this._name, this._breed, this._sound);

    clone._everMadeSound = this._everMadeSound;
    clone._cloned = true;

    return clone;
};

var simba = new Cat('Simba', 'Siamese', 'Meow-meow');
simba.getInfo();
simba.makeSound();
simba.getInfo();

var clone = simba.cloneObject();
clone.getInfo();
