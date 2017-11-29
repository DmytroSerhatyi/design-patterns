function Context(input) {
    this._catInput = input;
    this._translation = [];
}

Context.prototype.getInput = function () {
    return this._catInput;
};

Context.prototype.setTranslation = function (translation, index) {
    this._translation[index] = translation;
};

Context.prototype.getTranslation = function () {
    return this._translation.join(' ');
};

function Expression(sound, word) {
    this._catSound = sound;
    this._word = word;
}

Expression.prototype.interpret = function (context) {
    var input = context.getInput();
    var dividedInput = input.toLowerCase().split(' ');
    var self = this;

    dividedInput.forEach(function (sound, i) {
        if (self._catSound === sound) {
            context.setTranslation(self._word, i);
        }
    });
};

var context = new Context('Meow me meoow');
var expressions = [
    new Expression('me', 'am'),
    new Expression('meow', 'I'),
    new Expression('meoow', 'cat')
];

expressions.forEach(function (expression) {
    expression.interpret(context)
});
console.log('"' + context.getInput() + '" = "' + context.getTranslation() + '"');
