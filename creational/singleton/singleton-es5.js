var Simba = (function () {
    var uniqueInstance;

    function Simba() {
        if (!uniqueInstance) {
            this._name = 'Simba';

            uniqueInstance = this;
        }

        return uniqueInstance;
    }

    Simba.getInstance = function () {
        if (!uniqueInstance) new Simba();
        return uniqueInstance;
    };

    Simba.prototype.makeSound = function () {
        console.log("I'm unique " + this._name + "! Meow!");
    }

    return Simba;
})();

var simba = Simba.getInstance();
simba.makeSound();
