class Cat {
    private _name: string;

    constructor(name: string) {
        this._name = name;
    }

    public walk(): void {
        console.log(`${this._name} is walking.`);
    }

    public sleep(): void {
        console.log(`${this._name} is sleeping.`);
    }
}

class Period {
    private _day: boolean = false;
    private _mediator: Mediator;

    constructor(mediator: Mediator) {
        this._mediator = mediator;
    }

    public getDay(): boolean {
        return this._day;
    }

    public changeDay(): void {
        this._day = !this._day;
        let period = this._day ? 'Day' : 'Night';

        console.log(`${period} has come.`);

        this._mediator.dayChanged(this._day);
    }
}

class Weather {
    private _isRaining: boolean = false;
    private _mediator: Mediator;

    constructor(mediator: Mediator) {
        this._mediator = mediator;
    }

    public getWeather(): boolean {
        return this._isRaining;
    }

    public changeWeather(): void {
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
    private _cat: Cat;
    private _period: Period;
    private _weather: Weather;

    public setCat(cat: Cat): void {
        this._cat = cat;
    }

    public setPeriod(period: Period): void {
        this._period = period;
    }

    public setWeather(weather: Weather): void {
        this._weather = weather;
    }

    public dayChanged(day: boolean): void {
        let raining = this._weather.getWeather();
        this._operateCat(day, raining);
    }

    public weatherChanged(raining: boolean): void {
        let day = this._period.getDay();
        this._operateCat(day, raining);
    }

    private _operateCat(day: boolean, raining: boolean): void {
        if (day && !raining) {
            this._cat.walk();
        } else {
            this._cat.sleep();
        }
    }
}

let simba: Cat = new Cat('Simba');
let mediator: Mediator = new Mediator();
let period: Period = new Period(mediator);
let weather: Weather = new Weather(mediator);

mediator.setCat(simba);
mediator.setPeriod(period);
mediator.setWeather(weather);

let iterations: number = 3;

for (let i = 0; i < iterations; i++) {
    period.changeDay();

    let lastIteration: number = iterations - 1;
    if (i !== lastIteration) {
        weather.changeWeather();
    }
}
