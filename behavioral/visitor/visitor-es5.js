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

Cat.prototype.accept = function (visitor) {
    visitor.visit(this);
};

function InfoVisitor() { }

InfoVisitor.prototype.visit = function (cat) {
    console.log(cat.breed + ' cat ' + cat.name + '.');
};

function SoundVisitor() { }

SoundVisitor.prototype.visit = function (cat) {
    console.log(cat.name + ': "' + cat.sound + '"');
};

var cats = [
    new Cat('Simba', 'Siamese', 'Meow-meow'),
    new Cat('Oscar', 'Maine Coon', 'Meoow')
];

var infoVisitor = new InfoVisitor();
var soundVisitor = new SoundVisitor();

for (var i = 0; i < cats.length; i++) {
    var cat = cats[i];

    cat.accept(infoVisitor);
    cat.accept(soundVisitor)
}
