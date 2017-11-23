function PetShopPurchase() {
    this.description = 'Purchase contains:\n';
}

PetShopPurchase.prototype.expandPurchase = function (description) {
    this.description += description + '\n';
};

PetShopPurchase.prototype.getDescription = function () {
    return this.description;
};

function CatShopPurchaseBuilder() {
    this.purchase = new PetShopPurchase();
}

CatShopPurchaseBuilder.prototype.addPet = function (breed) {
    let description = breed + ' cat';
    this.purchase.expandPurchase(description);
};

CatShopPurchaseBuilder.prototype.addCollar = function () {
    this.purchase.expandPurchase('cat collar');
};

CatShopPurchaseBuilder.prototype.addBowl = function () {
    this.purchase.expandPurchase('little bowl');
};

CatShopPurchaseBuilder.prototype.getPurchase = function () {
    return this.purchase;
};

var builder = new CatShopPurchaseBuilder();
builder.addPet('Siamese');
builder.addCollar();
builder.addBowl();

var purchase = builder.getPurchase();
console.log(purchase.getDescription());
