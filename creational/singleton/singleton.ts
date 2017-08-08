class Simba {
    private static _uniqueInstance: Simba;

    public static getInstance(): Simba {
        if (!Simba._uniqueInstance) Simba._uniqueInstance = new Simba();
        return Simba._uniqueInstance;
    }

    private _name: string = 'Simba';

    private constructor() { }

    public makeSound(): void {
        console.log(`I'm unique ${this._name}!`);
    }
}

let simba: Simba = Simba.getInstance();
simba.makeSound();
