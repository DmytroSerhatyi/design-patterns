enum States {
    eating,
    walking
}

interface Subject {
    notifyObservers(): void;
    registerObserver(observer: Observer): void;
    removeObserver(observer: Observer): void;
}

interface Observer {
    update(): void;
}

class Cat implements Subject {
    private _name: string;
    private _observers: Observer[] = [];
    private _state: States;

    constructor(name: string) {
        this._name = name;
    }

    public notifyObservers(): void {
        this._observers.forEach(observer => {
            observer.update();
        });
    }

    public registerObserver(o: Observer): void {
        this._observers.push(o);
    }

    public removeObserver(o: Observer): void {
        this._observers = this._observers.filter(observer => {
            if (observer !== o) return observer;
        });
    }

    public get name(): string {
        return this._name;
    }

    public get state(): States {
        return this._state;
    }

    public set state(state: States) {
        this._state = state;
        this.notifyObservers();
    }
}

abstract class CatCaretaker implements Observer {
    protected abstract _action: string;
    protected abstract _stateToReact: States;
    protected _name: string;
    protected _observable: Cat;

    constructor(name: string) {
        this._name = name;
    }

    public registerAsObserver(observable: Cat): void {
        if (this._observable) return;

        observable.registerObserver(this);
        this._observable = observable;
    }

    public removeAsObserver(): void {
        if (!this._observable) return;

        this._observable.removeObserver(this);
        this._observable = null;
    }

    public update(): void {
        if (this._observable && this._observable.state === this._stateToReact) this._react();
    }

    protected _react(): void {
        console.log(`${this._observable.name} is being ${this._action} by ${this._name}.`);
    }
}

class Feeder extends CatCaretaker {
    protected _action = 'fed';
    protected _stateToReact = States.eating;
}

class Walker extends CatCaretaker {
    protected _action = 'walked';
    protected _stateToReact = States.walking;
}

let cat = new Cat('Simba'),
    feeder = new Feeder('Feeder'),
    anotherFeeder = new Feeder('Another Feeder'),
    walker = new Walker('Walker');

feeder.registerAsObserver(cat);
anotherFeeder.registerAsObserver(cat);
walker.registerAsObserver(cat);

cat.state = States.eating;
cat.state = States.walking;
anotherFeeder.removeAsObserver();
cat.state = States.eating;
