function Cat(name, breed) {
    this._name = name;
    this._breed = breed;
}

Cat.prototype.getDescripion = function () {
    return this._breed + ' cat ' + this._name + '.';
};

function CatGangIterator(cats) {
    this._cats = cats;
    this._position = 0;
}

CatGangIterator.prototype.hasNext = function () {
    if (this._position >= this._cats.length) {
        return false;
    } else {
        return true;
    }
};

CatGangIterator.prototype.next = function () {
    return this._cats[this._position++];
};

function CatGang() {
    this._cats = [];
}

CatGang.prototype.addCat = function (cat) {
    this._cats.push(cat);
};

CatGang.prototype.createIterator = function () {
    return new CatGangIterator(this._cats);
};

var simba = new Cat('Simba', 'Siamese');
var oscar = new Cat('Oscar', 'Maine Coon');
var oliver = new Cat('Oliver', 'British Shorthair');

var catGang = new CatGang();
catGang.addCat(simba);
catGang.addCat(oscar);
catGang.addCat(oliver);

var catGangIterator = catGang.createIterator();

while (catGangIterator.hasNext()) {
    var cat = catGangIterator.next();
    console.log(cat.getDescripion());
}
