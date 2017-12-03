class CatState {
    private _state: string;
    private _thoughts: string;

    constructor(state: string, thoughts: string) {
        this._state = state;
        this._thoughts = thoughts;
    }

    public getState(): string {
        return this._state;
    }

    public getThoughts(): string {
        return this._thoughts;
    }
}

class Cat {
    private _name: string;
    private _state: CatState;

    constructor(name: string) {
        this._name = name;
    }

    public updateState(state: string, thoughts: string): void {
        this._state = new CatState(state, thoughts);
    }

    public checkState(): void {
        let state = this._state.getState();
        let thoughts = this._state.getThoughts();

        console.log(`${this._name} is ${state} and thinking like: ${thoughts}`);
    }

    public getCurrentState(): CatState {
        return this._state;
    }

    public restoreState(state: CatState): void {
        this._state = state;
    }
}

let cat: Cat = new Cat("Simba");
cat.updateState("sleeping", "Zzz...");
cat.checkState();

let savedState: CatState = cat.getCurrentState();

cat.updateState("walking", "Why don't I sleep?");
cat.checkState();

cat.restoreState(savedState);
cat.checkState();
