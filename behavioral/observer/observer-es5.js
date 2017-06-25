function extend(derived, base) {
    derived.prototype = Object.create(base.prototype);
    derived.prototype.constructor = derived;
}

var states = {
    eating: 0,
    walking: 1
};

function Cat(name) {
    this._name = name;
    this._observers = [];
    this._state = null;

    Object.defineProperties(this, {
        name: {
            get: function () {
                return this._name;
            }
        },
        state: {
            get: function () {
                return this._state;
            },
            set: function (state) {
                this._state = state;
                this.notifyObservers();
            }
        }
    });
}

Cat.prototype.notifyObservers = function () {
    this._observers.forEach(observer => {
        observer.update();
    });
};

Cat.prototype.registerObserver = function (o) {
    this._observers.push(o);
};

Cat.prototype.removeObserver = function (o) {
    this._observers = this._observers.filter(observer => {
        if (observer !== o) return observer;
    });
};

function CatCaretaker(name) {
    this._name = name;
    this._action = null;
    this._stateToReact = null;
    this._observable = null;
}

CatCaretaker.prototype.registerAsObserver = function (observable) {
    if (this._observable) return;

    observable.registerObserver(this);
    this._observable = observable;
};

CatCaretaker.prototype.removeAsObserver = function () {
    if (!this._observable) return;

    this._observable.removeObserver(this);
    this._observable = null;
};

CatCaretaker.prototype.update = function () {
    if (this._observable && this._observable.state === this._stateToReact) this._react();
};

CatCaretaker.prototype._react = function () {
    console.log(this._observable.name + ' is being ' + this._action + ' by ' + this._name + '.');
};

function Feeder(name) {
    CatCaretaker.apply(this, arguments);
    this._action = 'fed';
    this._stateToReact = states.eating;
}

extend(Feeder, CatCaretaker);

function Walker(name) {
    CatCaretaker.apply(this, arguments);
    this._action = 'walked';
    this._stateToReact = states.walking;
}

extend(Walker, CatCaretaker);

var cat = new Cat('Simba'),
    feeder = new Feeder('Feeder'),
    anotherFeeder = new Feeder('Another Feeder'),
    walker = new Walker('Walker');

feeder.registerAsObserver(cat);
anotherFeeder.registerAsObserver(cat);
walker.registerAsObserver(cat);

cat.state = states.eating;
cat.state = states.walking;
anotherFeeder.removeAsObserver();
cat.state = states.eating;
