class CatState {
    constructor(state, thoughts) {
        this._state = state;
        this._thoughts = thoughts;
    }

    getState() {
        return this._state;
    }

    getThoughts() {
        return this._thoughts;
    }
}

class Cat {
    constructor(name) {
        this._name = name;
        this._state = null;
    }

    updateState(state, thoughts) {
        this._state = new CatState(state, thoughts);
    }

    checkState() {
        let state = this._state.getState();
        let thoughts = this._state.getThoughts();

        console.log(`${this._name} is ${state} and thinking like: ${thoughts}`);
    }

    getCurrentState() {
        return this._state;
    }

    restoreState(state) {
        this._state = state;
    }
}

let cat = new Cat("Simba");
cat.updateState("sleeping", "Zzz...");
cat.checkState();

let savedState = cat.getCurrentState();

cat.updateState("walking", "Why don't I sleep?");
cat.checkState();

cat.restoreState(savedState);
cat.checkState();
