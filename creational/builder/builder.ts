class PetShopPurchase {
    private _description: string = 'Purchase contains:\n';

    public expandPurchase(description: string): void {
        this._description += `${description}\n`;
    }

    public getDescription(): string {
        return this._description;
    }
}

interface PetShopPurchaseBuilder {
    addPet(breed: string): void;
    addCollar(): void;
    addBowl(): void;
    getPurchase(): PetShopPurchase;
}

class CatShopPurchaseBuilder implements PetShopPurchaseBuilder {
    private _purchase: PetShopPurchase;

    constructor() {
        this._purchase = new PetShopPurchase();
    }

    public addPet(breed: string): void {
        let description = `${breed} cat`;
        this._purchase.expandPurchase(description);
    }

    public addCollar(): void {
        this._purchase.expandPurchase('cat collar');
    }

    public addBowl(): void {
        this._purchase.expandPurchase('little bowl');
    }

    public getPurchase(): PetShopPurchase {
        return this._purchase;
    }
}

let builder: PetShopPurchaseBuilder = new CatShopPurchaseBuilder();
builder.addPet('Siamese');
builder.addCollar();
builder.addBowl();

let purchase: PetShopPurchase = builder.getPurchase();
console.log(purchase.getDescription());
