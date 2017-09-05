class CatSchedule {
    constructor(name) {
        this._forName = name;
    }

    _sleeping() { }

    makeSchedule() {
        this._walking();
        this._eating();
        this._sleeping();
    }

    _walking() {
        console.log(`${this._forName} is walking.`);
    }

    _eating() {
        console.log(`${this._forName} is eating.`);
    }
}

class SiameseSchedule extends CatSchedule {
    _sleeping() {
        console.log(`${this._forName} is sleeping on the bed.`);
    }
}

class MaineCoonSchedule extends CatSchedule {
    _sleeping() {
        console.log(`${this._forName} is sleeping on the armchair.`);
    }
}

let simbaSchedule = new SiameseSchedule('Simba');
let oscarSchedule = new MaineCoonSchedule('Oscar');

simbaSchedule.makeSchedule();
oscarSchedule.makeSchedule();
