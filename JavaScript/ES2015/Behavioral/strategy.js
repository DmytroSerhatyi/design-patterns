class MeowSound {
    makeSound() {
        return 'Meow meow meow!';
    }
}

class PurrSound {
    makeSound() {
        return 'Purrr... Purrrrr...';
    }
}

class Cat {
    constructor(name) {
        this._name = name;
        this._soundBehavior = null;
    }

    performSound() {
        console.log(`${this._name}: ${this._soundBehavior.makeSound()}`);
    }

    setSoundBehavior(sb) {
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
