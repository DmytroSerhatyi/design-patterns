class Cat {
    private _name: string;
    private _breed: string;
    private _sound: string;
    private _everMadeSound: boolean = false;
    private _cloned: boolean = false;

    constructor(name: string, breed: string, sound: string) {
        this._name = name;
        this._breed = breed;
        this._sound = sound;
    }

    public makeSound(): void {
        this._everMadeSound = true;
        console.log(this._sound);
    }

    public getInfo(): void {
        const title: string = 'Cat info:';
        const name: string = `name: ${this._name}`;
        const breed: string = `breed: ${this._breed}`;
        const sound: string = `sound: ${this._sound}`;
        const everMadeSound: string = `ever made sound: ${this._everMadeSound}`;
        const cloned: string = `cloned: ${this._cloned}`;

        console.log(`${title}\n${name}\n${breed}\n${sound}\n${everMadeSound}\n${cloned}\n\n`);
    }

    public cloneObject(): Cat {
        const clone: Cat = new Cat(this._name, this._breed, this._sound);

        clone._everMadeSound = this._everMadeSound;
        clone._cloned = true;

        return clone;
    }
}

const simba: Cat = new Cat('Simba', 'Siamese', 'Meow-meow');
simba.getInfo();
simba.makeSound();
simba.getInfo();

const clone: Cat = simba.cloneObject();
clone.getInfo();
