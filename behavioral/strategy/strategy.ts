interface SoundBehavior {
    makeSound(): string;
}

class MeowSound implements SoundBehavior {
    makeSound(): string {
        return 'Meow meow meow!';
    }
}

class PurrSound implements SoundBehavior {
    makeSound(): string {
        return 'Purrr... Purrrrr...';
    }
}

abstract class Cat {
    protected _soundBehavior: SoundBehavior;
    protected _name: string;

    constructor(name: string) {
        this._name = name;
    }

    public performSound(): void {
        console.log(`${this._name}: ${this._soundBehavior.makeSound()}`);
    }

    public setSoundBehavior(sb: SoundBehavior): void {
        this._soundBehavior = sb;
    }
}

class Siamese extends Cat {
    constructor(name) {
        super(name);
        this._soundBehavior = new MeowSound();
    }
}

class MaineCoon extends Cat {
    constructor(name) {
        super(name);
        this._soundBehavior = new PurrSound();
    }
}

let simba: Cat = new Siamese('Simba');
let oscar: Cat = new MaineCoon('Oscar');

simba.performSound();
oscar.performSound();
simba.setSoundBehavior(new PurrSound());
simba.performSound();
