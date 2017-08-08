var Simba = (function () {
    var uniqueInstance;

    function Simba() {
        this._name = 'Simba';
    }

    Simba.getInstance = function () {
        if (!uniqueInstance) uniqueInstance = new Simba();
        return uniqueInstance;
    };

    Simba.prototype.makeSound = function () {
        console.log("I'm unique " + this._name + "!");
    }

    return Simba;
})();

var simba = Simba.getInstance()
simba.makeSound();
