class PetShopPurchase {
    constructor() {
        this.description = 'Purchase contains:\n';
    }

    expandPurchase(description) {
        this.description += `${description}\n`;
    }

    getDescription() {
        return this.description;
    }
}

class CatShopPurchaseBuilder {
    constructor() {
        this.purchase = new PetShopPurchase();
    }

    addPet(breed) {
        let description = `${breed} cat`;
        this.purchase.expandPurchase(description);
    }

    addCollar() {
        this.purchase.expandPurchase('cat collar');
    }

    addBowl() {
        this.purchase.expandPurchase('little bowl');
    }

    getPurchase() {
        return this.purchase;
    }
}

let builder = new CatShopPurchaseBuilder();
builder.addPet('Siamese');
builder.addCollar();
builder.addBowl();

let purchase = builder.getPurchase();
console.log(purchase.getDescription());
