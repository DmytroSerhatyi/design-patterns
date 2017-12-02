class Cat {
    constructor(name) {
        this._name = name;
    }

    walk() {
        console.log(`${this._name} is walking.`);
    }

    sleep() {
        console.log(`${this._name} is sleeping.`);
    }
}

class Period {
    constructor(mediator) {
        this._day = false;
        this._mediator = mediator;
    }

    getDay() {
        return this._day;
    }

    changeDay() {
        this._day = !this._day;
        let period = this._day ? 'Day' : 'Night';

        console.log(`${period} has come.`);

        this._mediator.dayChanged(this._day);
    }
}

class Weather {
    constructor(mediator) {
        this._isRaining = false;
        this._mediator = mediator;
    }

    getWeather() {
        return this._isRaining;
    }

    changeWeather() {
        this._isRaining = !this._isRaining;
        let verb = 'is';

        if (!this._isRaining) {
            verb += ' not';
        }

        console.log(`It ${verb} raining.`);

        this._mediator.weatherChanged(this._isRaining);
    }
}

class Mediator {
    constructor() {
        this._cat = null;
        this._period = null;
        this._weather = null;
    }

    setCat(cat) {
        this._cat = cat;
    }

    setPeriod(period) {
        this._period = period;
    }

    setWeather(weather) {
        this._weather = weather;
    }

    dayChanged(day) {
        let raining = this._weather.getWeather();
        this._operateCat(day, raining);
    }

    weatherChanged(raining) {
        let day = this._period.getDay();
        this._operateCat(day, raining);
    }

    _operateCat(day, raining) {
        if (day && !raining) {
            this._cat.walk();
        } else {
            this._cat.sleep();
        }
    }
}

let simba = new Cat('Simba');
let mediator = new Mediator();
let period = new Period(mediator);
let weather = new Weather(mediator);

mediator.setCat(simba);
mediator.setPeriod(period);
mediator.setWeather(weather);

let iterations = 3;

for (let i = 0; i < iterations; i++) {
    period.changeDay();

    let lastIteration = iterations - 1;
    if (i !== lastIteration) {
        weather.changeWeather();
    }
}
