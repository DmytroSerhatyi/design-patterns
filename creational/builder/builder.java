public class BuilderPattern {
    public static class PetShopPurchase {
        private String description = "Purchase contains:\n";

        public void expandPurchase(String description) {
            description = String.format("%s\n", description);
            this.description += description;
        }

        public String getDescription() {
            return description;
        }
    }

    public interface PetShopPurchaseBuilder {
        public void addPet(String breed);
        public void addCollar();
        public void addBowl();
        public PetShopPurchase getPurchase();
    }

    public static class CatShopPurchaseBuilder implements PetShopPurchaseBuilder {
        private PetShopPurchase purchase;

        public CatShopPurchaseBuilder() {
            purchase = new PetShopPurchase();
        }

        public void addPet(String breed) {
            String description = String.format("%s cat", breed);
            purchase.expandPurchase(description);
        }

        public void addCollar() {
            purchase.expandPurchase("cat collar");
        }

        public void addBowl() {
            purchase.expandPurchase("little bowl");
        }

        public PetShopPurchase getPurchase() {
            return purchase;
        }
    }

    public static void main(String[] args) {
        PetShopPurchaseBuilder builder = new CatShopPurchaseBuilder();
        builder.addPet("Siamese");
        builder.addCollar();
        builder.addBowl();

        PetShopPurchase purchase = builder.getPurchase();
        System.out.println(purchase.getDescription());
    }
}
