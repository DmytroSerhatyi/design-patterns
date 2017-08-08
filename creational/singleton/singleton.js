let Simba = (() => {
    let uniqueInstance;

    return class Simba {
        constructor() {
            this._name = 'Simba';
        }

        static getInstance() {
            if (!uniqueInstance) uniqueInstance = new Simba();
            return uniqueInstance;
        }

        makeSound() {
            console.log(`I'm unique ${this._name}!`);
        }
    };
})();

let simba = Simba.getInstance()
simba.makeSound();
