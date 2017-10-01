abstract class State {
    protected _cat: Cat;

    public abstract sleep(): void;
    public abstract eat(): void;
    public abstract walk(): void;

    constructor(cat: Cat) {
        this._cat = cat;
    }
}

class SleepingState extends State {
    public sleep(): void {
        console.log(`${this._cat.getName()} is sleeping.`);

        let newState: State = this._cat.getEatingState();
        this._cat.setState(newState);
    }

    public eat(): void {
        console.log(`${this._cat.getName()} should sleep before eating.`);
    }

    public walk(): void {
        console.log(`${this._cat.getName()} can't walk now.`);
    }
}

class EatingState extends State {
    public sleep(): void {
        console.log(`${this._cat.getName()} can't sleep now.`);
    }

    public eat(): void {
        console.log(`${this._cat.getName()} is eating.`);

        let newState: State = this._cat.getWalkingState();
        this._cat.setState(newState);
    }

    public walk(): void {
        console.log(`${this._cat.getName()} should eat before walking.`);
    }
}

class WalkingState extends State {
    public sleep(): void {
        console.log(`${this._cat.getName()} should walk before sleeping.`);
    }

    public eat(): void {
        console.log(`${this._cat.getName()} can't eat now.`);
    }

    public walk(): void {
        console.log(`${this._cat.getName()} is walking.`);

        let newState: State = this._cat.getSleepingState();
        this._cat.setState(newState);
    }
}

class Cat {
    private _name: string;
    private _sleepingState: State = new SleepingState(this);
    private _eatingState: State = new EatingState(this);
    private _walkingState: State = new WalkingState(this);
    private _state: State = this._sleepingState;

    constructor(name: string) {
        this._name = name;
    }

    public getName(): string {
        return this._name;
    }

    public sleep(): void {
        this._state.sleep();
    }

    public eat(): void {
        this._state.eat();
    }

    public walk(): void {
        this._state.walk();
    }

    public getSleepingState(): State {
        return this._sleepingState;
    }

    public getEatingState(): State {
        return this._eatingState;
    }

    public getWalkingState(): State {
        return this._walkingState;
    }

    public setState(state: State): void {
        this._state = state;
    }
}

let cat: Cat = new Cat('Simba');

cat.eat();
cat.walk();
cat.sleep();

cat.walk();
cat.sleep();
cat.eat();

cat.sleep();
cat.eat();
cat.walk();
