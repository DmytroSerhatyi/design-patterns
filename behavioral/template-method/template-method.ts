abstract class CatSchedule {
    protected _forName: string;

    protected abstract _sleeping(): void;

    constructor(name: string) {
        this._forName = name;
    }

    public makeSchedule(): void {
        this._walking();
        this._eating();
        this._sleeping();
    }

    protected _walking(): void {
        console.log(`${this._forName} is walking.`);
    }

    protected _eating(): void {
        console.log(`${this._forName} is eating.`);
    }
}

class SiameseSchedule extends CatSchedule {
    protected _sleeping(): void {
        console.log(`${this._forName} is sleeping on the bed.`);
    }
}

class MaineCoonSchedule extends CatSchedule {
    protected _sleeping(): void {
        console.log(`${this._forName} is sleeping on the armchair.`);
    }
}

let simbaSchedule: SiameseSchedule = new SiameseSchedule('Simba');
let oscarSchedule: MaineCoonSchedule = new MaineCoonSchedule('Oscar');

simbaSchedule.makeSchedule();
oscarSchedule.makeSchedule();
