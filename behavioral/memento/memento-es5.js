function CatState(state, thoughts) {
    this._state = state;
    this._thoughts = thoughts;
}

CatState.prototype.getState = function () {
    return this._state;
};

CatState.prototype.getThoughts = function () {
    return this._thoughts;
};

function Cat(name) {
    this._name = name;
    this._state = null;
}

Cat.prototype.updateState = function (state, thoughts) {
    this._state = new CatState(state, thoughts);
};

Cat.prototype.checkState = function () {
    var state = this._state.getState();
    var thoughts = this._state.getThoughts();

    console.log(this._name + ' is ' + state + ' and thinking like: '  + thoughts);
};

Cat.prototype.getCurrentState = function () {
    return this._state;
};

Cat.prototype.restoreState = function (state) {
    this._state = state;
};

var cat = new Cat("Simba");
cat.updateState("sleeping", "Zzz...");
cat.checkState();

var savedState = cat.getCurrentState();

cat.updateState("walking", "Why don't I sleep?");
cat.checkState();

cat.restoreState(savedState);
cat.checkState();
