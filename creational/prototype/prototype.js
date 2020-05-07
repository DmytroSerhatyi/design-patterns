class Cat {
    constructor(name, breed, sound) {
        this._name = name;
        this._breed = breed;
        this._sound = sound;
        this._everMadeSound = false;
        this._cloned = false;
    }

    makeSound() {
        this._everMadeSound = true;
        console.log(this._sound);
    }

    getInfo() {
        const title = 'Cat info:';
        const name = `name: ${this._name}`;
        const breed = `breed: ${this._breed}`;
        const sound = `sound: ${this._sound}`;
        const everMadeSound = `ever made sound: ${this._everMadeSound}`;
        const cloned = `cloned: ${this._cloned}`;

        console.log(`${title}\n${name}\n${breed}\n${sound}\n${everMadeSound}\n${cloned}\n\n`);
    }

    cloneObject() {
        const clone = new Cat(this._name, this._breed, this._sound);

        clone._everMadeSound = this._everMadeSound;
        clone._cloned = true;

        return clone;
    }
}

const simba = new Cat('Simba', 'Siamese', 'Meow-meow');
simba.getInfo();
simba.makeSound();
simba.getInfo();

const clone = simba.cloneObject();
clone.getInfo();
