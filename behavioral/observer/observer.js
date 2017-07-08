const states = {
    eating: 0,
    walking: 1
}

class Cat {
    constructor(name) {
        this._name = name;
        this._observers = [];
        this._state = null;
    }

    notifyObservers() {
        this._observers.forEach(observer => {
            observer.update();
        });
    }

    registerObserver(o) {
        this._observers.push(o);
    }

    removeObserver(o) {
        this._observers = this._observers.filter(observer => {
            if (observer !== o) return observer;
        });
    }

    get name() {
        return this._name;
    }

    get state() {
        return this._state;
    }

    set state(state) {
        this._state = state;
        this.notifyObservers();
    }
}

class CatCaretaker {
    constructor(name, action, stateToReact) {
        this._name = name;
        this._action = action;
        this._stateToReact = stateToReact;
        this._observable = null;
    }

    registerAsObserver(observable) {
        if (this._observable) return;

        observable.registerObserver(this);
        this._observable = observable;
    }

    removeAsObserver() {
        if (!this._observable) return;

        this._observable.removeObserver(this);
        this._observable = null;
    }

    update() {
        if (this._observable && this._observable.state === this._stateToReact) this._react();
    }

    _react() {
        console.log(`${this._observable.name} is being ${this._action} by ${this._name}.`);
    }
}

class Dog {
    update() {
        console.log('The dog has looked at the cat.');
    }
}

let cat = new Cat('Simba'),
    feeder = new CatCaretaker('Feeder', 'fed', states.eating),
    walker = new CatCaretaker('Walker', 'walked', states.walking),
    dog = new Dog();

feeder.registerAsObserver(cat);
walker.registerAsObserver(cat);
cat.registerObserver(dog);

cat.state = states.eating;
cat.state = states.walking;
cat.removeObserver(dog);
cat.state = states.eating;
