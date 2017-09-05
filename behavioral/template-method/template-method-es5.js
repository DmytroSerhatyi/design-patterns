function extend(derived, base) {
    derived.prototype = Object.create(base.prototype);
    derived.prototype.constructor = derived;
}

function CatSchedule(name) {
    this._forName = name;
}

CatSchedule.prototype._sleeping = function () { };

CatSchedule.prototype.makeSchedule = function () {
    this._walking();
    this._eating();
    this._sleeping();
};

CatSchedule.prototype._walking = function () {
    console.log(this._forName + ' is walking.');
};

CatSchedule.prototype._eating = function () {
    console.log(this._forName + ' is eating.');
};

function SiameseSchedule(name) {
    CatSchedule.apply(this, arguments);
}

extend(SiameseSchedule, CatSchedule);

SiameseSchedule.prototype._sleeping = function () {
    console.log(this._forName + ' is sleeping on the bed.');
};

function MaineCoonSchedule(name) {
    CatSchedule.apply(this, arguments);
}

extend(MaineCoonSchedule, CatSchedule);

MaineCoonSchedule.prototype._sleeping = function () {
    console.log(this._forName + ' is sleeping on the armchair.');
};

var simbaSchedule = new SiameseSchedule('Simba');
var oscarSchedule = new MaineCoonSchedule('Oscar');

simbaSchedule.makeSchedule();
oscarSchedule.makeSchedule();
