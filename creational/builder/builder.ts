class PetShopPurchase {
    private description: string = 'Purchase contains:\n';

    public expandPurchase(description: string): void {
        this.description += `${description}\n`;
    }

    public getDescription(): string {
        return this.description;
    }
}

interface PetShopPurchaseBuilder {
    addPet(breed: string): void;
    addCollar(): void;
    addBowl(): void;
    getPurchase(): PetShopPurchase;
}

class CatShopPurchaseBuilder implements PetShopPurchaseBuilder {
    private purchase: PetShopPurchase;

    constructor() {
        this.purchase = new PetShopPurchase();
    }

    public addPet(breed: string): void {
        let description = `${breed} cat`;
        this.purchase.expandPurchase(description);
    }

    public addCollar(): void {
        this.purchase.expandPurchase('cat collar');
    }

    public addBowl(): void {
        this.purchase.expandPurchase('little bowl');
    }

    public getPurchase(): PetShopPurchase {
        return this.purchase;
    }
}

let builder: PetShopPurchaseBuilder = new CatShopPurchaseBuilder();
builder.addPet('Siamese');
builder.addCollar();
builder.addBowl();

let purchase: PetShopPurchase = builder.getPurchase();
console.log(purchase.getDescription());
