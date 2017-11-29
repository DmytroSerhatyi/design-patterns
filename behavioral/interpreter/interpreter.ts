class Context {
    private _catInput: string;
    private _translation: string[] = [];

    constructor(input: string) {
        this._catInput = input;
    }

    public getInput(): string {
        return this._catInput;
    }

    public setTranslation(translation: string, index: number): void {
        this._translation[index] = translation;
    }

    public getTranslation(): string {
        return this._translation.join(' ');
    }
}

class Expression {
    private _catSound: string;
    private _word: string;

    constructor(sound: string, word: string) {
        this._catSound = sound;
        this._word = word;
    }

    public interpret(context: Context): void {
        let input: string = context.getInput();
        let dividedInput: string[] = input.toLowerCase().split(' ');

        dividedInput.forEach((sound, i) => {
            if (this._catSound === sound) {
                context.setTranslation(this._word, i);
            }
        });
    }
}

let context: Context = new Context('Meow me meoow');
let expressions: Expression[] = [
    new Expression('me', 'am'),
    new Expression('meow', 'I'),
    new Expression('meoow', 'cat')
];

expressions.forEach(expression => expression.interpret(context));
console.log(`"${context.getInput()}" = "${context.getTranslation()}"`);
