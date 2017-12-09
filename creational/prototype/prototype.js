let Cat = (() => {
    let cloning = false;

    return class Cat {
        constructor(name, breed, sound, options) {
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

        makeSound() {
            this._everMadeSound = true;
            console.log(this._sound);
        }

        getInfo() {
            let title = 'Cat info:';
            let name = `name: ${this._name}`;
            let breed = `breed: ${this._breed}`;
            let sound = `sound: ${this._sound}`;
            let everMadeSound = `ever made sound: ${this._everMadeSound}`;
            let cloned = `cloned: ${this._cloned}`;

            console.log(`${title}\n${name}\n${breed}\n${sound}\n${everMadeSound}\n${cloned}\n\n`);
        }

        clone() {
            cloning = true;

            let options = {
                name: this._name,
                breed: this._breed,
                sound: this._sound,
                everMadeSound: this._everMadeSound
            };

            let clone = new Cat(null, null, null, options);
            cloning = false;

            return clone;
        }
    }
})();

let simba = new Cat('Simba', 'Siamese', 'Meow-meow');
simba.getInfo();
simba.makeSound();
simba.getInfo();

let clone = simba.clone();
clone.getInfo();
