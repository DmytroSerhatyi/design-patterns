class Cat {
    constructor(private _name: string) { }

    public sleep(): void {
        console.log(`${this._name} is sleeping.`);
    }

    public walk(): void {
        console.log(`${this._name} is walking.`);
    }
}

interface Command {
    execute(): void;
    undo(): void;
}

class CatSleepCommand implements Command {
    private _cat: Cat;

    constructor(cat: Cat) {
        this._cat = cat;
    }

    public execute(): void {
        this._cat.sleep();
    }

    public undo(): void {
        this._cat.walk();
    }
}

class CatWalkCommand implements Command {
    private _cat: Cat;

    constructor(cat: Cat) {
        this._cat = cat;
    }

    public execute(): void {
        this._cat.walk();
    }

    public undo(): void {
        this._cat.sleep();
    }
}

class CatCaretaker {
    private _command: Command;

    public setCommand(command: Command): void {
        this._command = command;
    }

    public manipulateCat(): void {
        this._command.execute();
    }

    public manipulateCatBack(): void {
        this._command.undo();
    }
}

let simba: Cat = new Cat('Simba');
let catSleep: CatSleepCommand = new CatSleepCommand(simba);
let catWalk: CatWalkCommand = new CatWalkCommand(simba);
let catCaretaker: CatCaretaker = new CatCaretaker();

catCaretaker.setCommand(catSleep);
catCaretaker.manipulateCat();
catCaretaker.manipulateCatBack();

catCaretaker.setCommand(catWalk);
catCaretaker.manipulateCat();
catCaretaker.manipulateCatBack();
