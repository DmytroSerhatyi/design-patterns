function Cat(name, breed, sound) {
    this._name = name;
    this._breed = breed;
    this._sound = sound;

    Object.defineProperties(this, {
        name: {
            get: function () {
                return this._name;
            }
        },
        breed: {
            get: function () {
                return this._breed;
            }
        },
        sound: {
            get: function () {
                return this._sound;
            }
        }
    });
}

function Visitor() { }

Visitor.prototype.makeSound = function (cat) {
    console.log(cat.name + ': "' + cat.sound + '"');
};

Visitor.prototype.getInfo = function (cat) {
    console.log(cat.breed + ' cat ' + cat.name + '.');
};

var cats = [
    new Cat('Simba', 'Siamese', 'Meow-meow'),
    new Cat('Oscar', 'Maine Coon', 'Meoow')
];

var visitor = new Visitor();

for (var i = 0; i < cats.length; i++) {
    var cat = cats[i];

    visitor.makeSound(cat);
    visitor.getInfo(cat);
}
