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

class CatCaretaker implements Observer {
    protected _action: string;
    protected _stateToReact: States;
    protected _name: string;
    protected _observable: Cat;

    constructor(name: string, action: string, stateToReact: States) {
        this._name = name;
        this._action = action;
        this._stateToReact = stateToReact;
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

class Dog implements Observer {
    public update(): void {
        console.log('The dog has looked at the cat.');
    }
}

let cat: Cat = new Cat('Simba');
let feeder: CatCaretaker = new CatCaretaker('Feeder', 'fed', States.eating);
let walker: CatCaretaker = new CatCaretaker('Walker', 'walked', States.walking);
let dog: Dog = new Dog();

feeder.registerAsObserver(cat);
walker.registerAsObserver(cat);
cat.registerObserver(dog);

cat.state = States.eating;
cat.state = States.walking;
cat.removeObserver(dog);
cat.state = States.eating;
