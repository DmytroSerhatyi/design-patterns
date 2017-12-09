var Cat = (function () {
    var cloning = false;

    function Cat(name, breed, sound, options) {
        if (cloning) {
            this._name = options.name;
            this._breed = options.breed;
            this._sound = options.sound;
            this._everMadeSound = options.everMadeSound;
            this._cloned = true;
        } else {
            this._name = name;
            this._breed = breed;
            this._sound = sound;
            this._everMadeSound = false;
            this._cloned = false;
        }
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

    Cat.prototype.clone = function () {
        cloning = true;

        var options = {
            name: this._name,
            breed: this._breed,
            sound: this._sound,
            everMadeSound: this._everMadeSound
        };

        var clone = new Cat(null, null, null, options);
        cloning = false;

        return clone;
    };

    return Cat;
})();

var simba = new Cat('Simba', 'Siamese', 'Meow-meow');
simba.getInfo();
simba.makeSound();
simba.getInfo();

var clone = simba.clone();
clone.getInfo();
