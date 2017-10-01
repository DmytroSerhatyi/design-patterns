class State {
    constructor(cat) {
        this._cat = cat;
    }

    sleep() { }
    eat() { }
    walk() { }
}

class SleepingState extends State {
    sleep() {
        console.log(`${this._cat.getName()} is sleeping.`);

        let newState = this._cat.getEatingState();
        this._cat.setState(newState);
    }

    eat() {
        console.log(`${this._cat.getName()} should sleep before eating.`);
    }

    walk() {
        console.log(`${this._cat.getName()} can't walk now.`);
    }
}

class EatingState extends State {
    sleep() {
        console.log(`${this._cat.getName()} can't sleep now.`);
    }

    eat() {
        console.log(`${this._cat.getName()} is eating.`);

        let newState = this._cat.getWalkingState();
        this._cat.setState(newState);
    }

    walk() {
        console.log(`${this._cat.getName()} should eat before walking.`);
    }
}

class WalkingState extends State {
    sleep() {
        console.log(`${this._cat.getName()} should walk before sleeping.`);
    }

    eat() {
        console.log(`${this._cat.getName()} can't eat now.`);
    }

    walk() {
        console.log(`${this._cat.getName()} is walking.`);

        let newState = this._cat.getSleepingState();
        this._cat.setState(newState);
    }
}

class Cat {
    constructor(name) {
        this._name = name;

        this._sleepingState = new SleepingState(this);
        this._eatingState = new EatingState(this);
        this._walkingState = new WalkingState(this);
        this._state = this._sleepingState;
    }

    getName() {
        return this._name;
    }

    sleep() {
        this._state.sleep();
    }

    eat() {
        this._state.eat();
    }

    walk() {
        this._state.walk();
    }

    getSleepingState() {
        return this._sleepingState;
    }

    getEatingState() {
        return this._eatingState;
    }

    getWalkingState() {
        return this._walkingState;
    }

    setState(state) {
        this._state = state;
    }
}

let cat = new Cat('Simba');

cat.eat();
cat.walk();
cat.sleep();

cat.walk();
cat.sleep();
cat.eat();

cat.sleep();
cat.eat();
cat.walk();
