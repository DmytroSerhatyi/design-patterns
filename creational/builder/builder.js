class PetShopPurchase {
    constructor() {
        this._description = 'Purchase contains:\n';
    }

    expandPurchase(description) {
        this._description += `${description}\n`;
    }

    getDescription() {
        return this._description;
    }
}

class CatShopPurchaseBuilder {
    constructor() {
        this._purchase = new PetShopPurchase();
    }

    addPet(breed) {
        let description = `${breed} cat`;
        this._purchase.expandPurchase(description);
    }

    addCollar() {
        this._purchase.expandPurchase('cat collar');
    }

    addBowl() {
        this._purchase.expandPurchase('little bowl');
    }

    getPurchase() {
        return this._purchase;
    }
}

let builder = new CatShopPurchaseBuilder();
builder.addPet('Siamese');
builder.addCollar();
builder.addBowl();

let purchase = builder.getPurchase();
console.log(purchase.getDescription());
