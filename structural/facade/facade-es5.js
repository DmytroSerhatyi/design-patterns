function Cat(name) {
    this._name = name;
}

Cat.prototype.jumpUp = function (barrier) {
    console.log(this._name + ' is on top of ' + barrier + '!');
};

Cat.prototype.jumpDown = function (barrier) {
    console.log(this._name + ' jumped down from ' + barrier + '!');
};

function CatJumpsOverBarrierFacade(cat) {
    this._cat = cat;
}

CatJumpsOverBarrierFacade.prototype.jumpOverBarrier = function (barrier) {
    this._cat.jumpUp(barrier);
    this._cat.jumpDown(barrier);
};

var cat = new Cat('Simba');
var catJumpsOverBarrierFacade = new CatJumpsOverBarrierFacade(cat);

catJumpsOverBarrierFacade.jumpOverBarrier('fence');
