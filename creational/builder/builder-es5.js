function PetShopPurchase() {
    this._description = 'Purchase contains:\n';
}

PetShopPurchase.prototype.expandPurchase = function (description) {
    this._description += description + '\n';
};

PetShopPurchase.prototype.getDescription = function () {
    return this._description;
};

function CatShopPurchaseBuilder() {
    this._purchase = new PetShopPurchase();
}

CatShopPurchaseBuilder.prototype.addPet = function (breed) {
    var description = breed + ' cat';
    this._purchase.expandPurchase(description);
};

CatShopPurchaseBuilder.prototype.addCollar = function () {
    this._purchase.expandPurchase('cat collar');
};

CatShopPurchaseBuilder.prototype.addBowl = function () {
    this._purchase.expandPurchase('little bowl');
};

CatShopPurchaseBuilder.prototype.getPurchase = function () {
    return this._purchase;
};

var builder = new CatShopPurchaseBuilder();
builder.addPet('Siamese');
builder.addCollar();
builder.addBowl();

var purchase = builder.getPurchase();
console.log(purchase.getDescription());
