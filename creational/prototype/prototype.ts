interface CatCloningOptions {
    name: string;
    breed: string;
    sound: string;
    everMadeSound: boolean;
}

class Cat {
    private static _cloning: boolean = false;

    private _name: string;
    private _breed: string;
    private _sound: string;
    private _everMadeSound: boolean = false;
    private _cloned: boolean;

    constructor(name: string, breed: string, sound: string, options?: CatCloningOptions) {
        if (Cat._cloning) {
            this._name = options.name;
            this._breed = options.breed;
            this._sound = options.sound;
            this._everMadeSound = options.everMadeSound;
            this._cloned = true;
        } else {
            this._name = name;
            this._breed = breed;
            this._sound = sound;
            this._cloned = false;
        }
    }

    public makeSound(): void {
        this._everMadeSound = true;
        console.log(this._sound);
    }

    public getInfo(): void {
        let title: string = 'Cat info:';
        let name: string = `name: ${this._name}`;
        let breed: string = `breed: ${this._breed}`;
        let sound: string = `sound: ${this._sound}`;
        let everMadeSound: string = `ever made sound: ${this._everMadeSound}`;
        let cloned: string = `cloned: ${this._cloned}`;

        console.log(`${title}\n${name}\n${breed}\n${sound}\n${everMadeSound}\n${cloned}\n\n`);
    }

    public cloneObject(): Cat {
        Cat._cloning = true;

        let options: CatCloningOptions = {
            name: this._name,
            breed: this._breed,
            sound: this._sound,
            everMadeSound: this._everMadeSound
        };

        let clone: Cat = new Cat(null, null, null, options);
        Cat._cloning = false;

        return clone;
    }
}

let simba: Cat = new Cat('Simba', 'Siamese', 'Meow-meow');
simba.getInfo();
simba.makeSound();
simba.getInfo();

let clone: Cat = simba.cloneObject();
clone.getInfo();
