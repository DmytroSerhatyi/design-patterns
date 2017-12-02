function Cat(name) {
    this._name = name;
}

Cat.prototype.walk = function () {
    console.log(this._name + ' is walking.');
};

Cat.prototype.sleep = function () {
    console.log(this._name + ' is sleeping.');
};

function Period(mediator) {
    this._day = false;
    this._mediator = mediator;
}

Period.prototype.getDay = function () {
    return this._day;
};

Period.prototype.changeDay = function () {
    this._day = !this._day;
    var period = this._day ? 'Day' : 'Night';

    console.log(period + ' has come.');

    this._mediator.dayChanged(this._day);
};

function Weather(mediator) {
    this._isRaining = false;
    this._mediator = mediator;
}

Weather.prototype.getWeather = function () {
    return this._isRaining;
};

Weather.prototype.changeWeather = function () {
    this._isRaining = !this._isRaining;
    var verb = 'is';

    if (!this._isRaining) {
        verb += ' not';
    }

    console.log('It ' + verb + ' raining.');

    this._mediator.weatherChanged(this._isRaining);
};

function Mediator() {
    this._cat = null;
    this._period = null;
    this._weather = null;
}

Mediator.prototype.setCat = function (cat) {
    this._cat = cat;
};

Mediator.prototype.setPeriod = function (period) {
    this._period = period;
};

Mediator.prototype.setWeather = function (weather) {
    this._weather = weather;
};

Mediator.prototype.dayChanged = function (day) {
    var raining = this._weather.getWeather();
    this._operateCat(day, raining);
};

Mediator.prototype.weatherChanged = function (raining) {
    var day = this._period.getDay();
    this._operateCat(day, raining);
};

Mediator.prototype._operateCat = function (day, raining) {
    if (day && !raining) {
        this._cat.walk();
    } else {
        this._cat.sleep();
    }
};

var simba = new Cat('Simba');
var mediator = new Mediator();
var period = new Period(mediator);
var weather = new Weather(mediator);

mediator.setCat(simba);
mediator.setPeriod(period);
mediator.setWeather(weather);

var iterations = 3;

for (var i = 0; i < iterations; i++) {
    period.changeDay();

    var lastIteration = iterations - 1;
    if (i !== lastIteration) {
        weather.changeWeather();
    }
}
