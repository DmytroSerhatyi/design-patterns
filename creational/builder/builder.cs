using System;

class BuilderPattern
{
    class PetShopPurchase
    {
        private string description { get; set; } = "Purchase contains:\n";

        public void ExpandPurchase(string description)
        {
            description = String.Format("{0}\n", description);
            this.description += description;
        }

        public string GetDescription()
        {
            return description;
        }
    }

    interface PetShopPurchaseBuilder
    {
        void AddPet(string breed);
        void AddCollar();
        void AddBowl();
        PetShopPurchase GetPurchase();
    }

    class CatShopPurchaseBuilder : PetShopPurchaseBuilder
    {
        private PetShopPurchase purchase { get; }

        public CatShopPurchaseBuilder()
        {
            purchase = new PetShopPurchase();
        }

        public void AddPet(string breed)
        {
            string description = String.Format("{0} cat", breed);
            purchase.ExpandPurchase(description);
        }

        public void AddCollar()
        {
            purchase.ExpandPurchase("cat collar");
        }

        public void AddBowl()
        {
            purchase.ExpandPurchase("little bowl");
        }

        public PetShopPurchase GetPurchase()
        {
            return purchase;
        }
    }

    static void Main(string[] args)
    {
        PetShopPurchaseBuilder builder = new CatShopPurchaseBuilder();
        builder.AddPet("Siamese");
        builder.AddCollar();
        builder.AddBowl();

        PetShopPurchase purchase = builder.GetPurchase();
        Console.WriteLine(purchase.GetDescription());
    }
}
