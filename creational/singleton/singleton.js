let Simba = (() => {
    let uniqueInstance;

    return class Simba {
        constructor() {
            if (!uniqueInstance) {
                this._name = 'Simba';

                uniqueInstance = this;
            }

            return uniqueInstance;
        }

        static getInstance() {
            if (!uniqueInstance) new Simba();
            return uniqueInstance;
        }

        makeSound() {
            console.log(`I'm unique ${this._name}! Meow!`);
        }
    };
})();

let simba = Simba.getInstance();
simba.makeSound();
