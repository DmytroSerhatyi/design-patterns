class Cat {
    constructor(name) {
        this._name = name;
    }

    sleep() {
        console.log(`${this._name} is sleeping.`);
    }

    walk() {
        console.log(`${this._name} is walking.`);
    }
}

class CatSleepCommand {
    constructor(cat) {
        this._cat = cat;
    }

    execute() {
        this._cat.sleep();
    }

    undo() {
        this._cat.walk();
    }
}

class CatWalkCommand {
    constructor(cat) {
        this._cat = cat;
    }

    execute() {
        this._cat.walk();
    }

    undo() {
        this._cat.sleep();
    }
}

class CatCaretaker {
    constructor() {
        this._command = null;
    }

    setCommand(command) {
        this._command = command;
    }

    manipulateCat() {
        this._command.execute();
    }

    manipulateCatBack() {
        this._command.undo();
    }
}

let simba = new Cat('Simba');
let catSleep = new CatSleepCommand(simba);
let catWalk = new CatWalkCommand(simba);
let catCaretaker = new CatCaretaker();

catCaretaker.setCommand(catSleep);
catCaretaker.manipulateCat();
catCaretaker.manipulateCatBack();

catCaretaker.setCommand(catWalk);
catCaretaker.manipulateCat();
catCaretaker.manipulateCatBack();
