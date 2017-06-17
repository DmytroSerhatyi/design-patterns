interface SoundBehavior {
    makeSound(): void;
}

class MeowSound implements SoundBehavior {
    makeSound() {
        return 'Meow meow meow!';
    }
}

class PurrSound implements SoundBehavior {
    makeSound() {
        return 'Purrr... Purrrrr...';
    }
}

abstract class Cat {
    protected _soundBehavior: SoundBehavior;
    protected _name: string;

    constructor(name: string) {
        this._name = name;
    }

    public performSound() {
        console.log(`${this._name}: ${this._soundBehavior.makeSound()}`);
    }

    public setSoundBehavior(sb: SoundBehavior) {
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

let siamese = new Siamese('Simba'),
    maineCoon = new MaineCoon('Oscar');

siamese.performSound();
maineCoon.performSound();
siamese.setSoundBehavior(new PurrSound());
siamese.performSound();
