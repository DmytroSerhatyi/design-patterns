class Context {
    constructor(input) {
        this._catInput = input;
        this._translation = [];
    }

    getInput() {
        return this._catInput;
    }

    setTranslation(translation, index) {
        this._translation[index] = translation;
    }

    getTranslation() {
        return this._translation.join(' ');
    }
}

class Expression {
    constructor(sound, word) {
        this._catSound = sound;
        this._word = word;
    }

    interpret(context) {
        let input = context.getInput();
        let dividedInput = input.toLowerCase().split(' ');

        dividedInput.forEach((sound, i) => {
            if (this._catSound === sound) {
                context.setTranslation(this._word, i);
            }
        });
    }
}

let context = new Context('Meow me meoow');
let expressions = [
    new Expression('me', 'am'),
    new Expression('meow', 'I'),
    new Expression('meoow', 'cat')
];

expressions.forEach((expression) => expression.interpret(context));
console.log(`"${context.getInput()}" = "${context.getTranslation()}"`);
