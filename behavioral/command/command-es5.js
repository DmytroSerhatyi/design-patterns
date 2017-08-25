function Cat(name) {
    this._name = name;
}

Cat.prototype.sleep = function () {
    console.log(this._name + ' is sleeping.');
};

Cat.prototype.walk = function () {
    console.log(this._name + ' is walking.');
};

function CatSleepCommand(cat) {
    this._cat = cat;
}

CatSleepCommand.prototype.execute = function () {
    this._cat.sleep();
};

CatSleepCommand.prototype.undo = function () {
    this._cat.walk();
};

function CatWalkCommand(cat) {
    this._cat = cat;
}

CatWalkCommand.prototype.execute = function () {
    this._cat.walk();
};

CatWalkCommand.prototype.undo = function () {
    this._cat.sleep();
};

function CatCaretaker() {
    this._command = null;
}

CatCaretaker.prototype.setCommand = function (command) {
    this._command = command;
};

CatCaretaker.prototype.manipulateCat = function () {
    this._command.execute();
};

CatCaretaker.prototype.manipulateCatBack = function () {
    this._command.undo();
};

var simba = new Cat('Simba');
var catSleep = new CatSleepCommand(simba);
var catWalk = new CatWalkCommand(simba);
var catCaretaker = new CatCaretaker();

catCaretaker.setCommand(catSleep);
catCaretaker.manipulateCat();
catCaretaker.manipulateCatBack();

catCaretaker.setCommand(catWalk);
catCaretaker.manipulateCat();
catCaretaker.manipulateCatBack();
