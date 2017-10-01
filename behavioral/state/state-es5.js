function extend(derived, base) {
    derived.prototype = Object.create(base.prototype);
    derived.prototype.constructor = derived;
}

function State(cat) {
    this._cat = cat;
}

State.prototype.sleep = function () { };
State.prototype.eat = function () { };
State.prototype.walk = function () { };

function SleepingState(cat) {
    State.apply(this, arguments);
}

extend(SleepingState, State);

SleepingState.prototype.sleep = function () {
    console.log(this._cat.getName() + " is sleeping.");

    var newState = this._cat.getEatingState();
    this._cat.setState(newState);
};

SleepingState.prototype.eat = function () {
    console.log(this._cat.getName() + " should sleep before eating.");
};

SleepingState.prototype.walk = function () {
    console.log(this._cat.getName() + " can't walk now.");
}

function EatingState(cat) {
    State.apply(this, arguments);
}

extend(EatingState, State);

EatingState.prototype.sleep = function () {
    console.log(this._cat.getName() + " can't sleep now.");
};

EatingState.prototype.eat = function () {
    console.log(this._cat.getName() + " is eating.");

    var newState = this._cat.getWalkingState();
    this._cat.setState(newState);
};

EatingState.prototype.walk = function () {
    console.log(this._cat.getName() + " should eat before walking.");
};

function WalkingState(cat) {
    State.apply(this, arguments);
}

extend(WalkingState, State);

WalkingState.prototype.sleep = function () {
    console.log(this._cat.getName() + " should walk before sleeping.");
};

WalkingState.prototype.eat = function () {
    console.log(this._cat.getName() + " can't eat now.");
};

WalkingState.prototype.walk = function () {
    console.log(this._cat.getName() + " is walking.");

    var newState = this._cat.getSleepingState();
    this._cat.setState(newState);
};

function Cat(name) {
    this._name = name;

    this._sleepingState = new SleepingState(this);
    this._eatingState = new EatingState(this);
    this._walkingState = new WalkingState(this);
    this._state = this._sleepingState;
}

Cat.prototype.getName = function () {
    return this._name;
};

Cat.prototype.sleep = function () {
    this._state.sleep();
};

Cat.prototype.eat = function () {
    this._state.eat();
};

Cat.prototype.walk = function () {
    this._state.walk();
};

Cat.prototype.getSleepingState = function () {
    return this._sleepingState;
};

Cat.prototype.getEatingState = function () {
    return this._eatingState;
};

Cat.prototype.getWalkingState = function () {
    return this._walkingState;
};

Cat.prototype.setState = function (state) {
    this._state = state;
};

var cat = new Cat("Simba");

cat.eat();
cat.walk();
cat.sleep();

cat.walk();
cat.sleep();
cat.eat();

cat.sleep();
cat.eat();
cat.walk();
