class ChainOfResponsibilityPattern
{
    enum Dishes
    {
        breakfast,
        dinner,
        supper
    }

    abstract class Cat
    {
        protected string name { get; }
        protected Cat successor { get; }
        protected abstract Dishes dish { get; }

        public Cat(string name, Cat successor)
        {
            this.name = name;
            this.successor = successor;
        }

        protected abstract string PrepareDish();

        public void HandleRequest(Dishes dish)
        {
            if (this.dish == dish)
            {
                System.Console.WriteLine("{0}: {1}", name, PrepareDish());
            }
            else if (successor != null)
            {
                successor.HandleRequest(dish);
            }
        }
    }

    class Siamese : Cat
    {
        protected override Dishes dish { get; } = Dishes.breakfast;

        public Siamese(string name, Cat successor) : base(name, successor) { }

        protected override string PrepareDish()
        {
            return "Breakfast is ready! Bon Appetit!";
        }
    }

    class MaineCoon : Cat
    {
        protected override Dishes dish { get; } = Dishes.dinner;

        public MaineCoon(string name, Cat successor) : base(name, successor) { }

        protected override string PrepareDish()
        {
            return "There is a dinner! Let's begin!";
        }
    }

    class BritishShorthair : Cat
    {
        protected override Dishes dish { get; } = Dishes.supper;

        public BritishShorthair(string name, Cat successor) : base(name, successor) { }

        protected override string PrepareDish()
        {
            return "Time for supper! Yeah!";
        }
    }

    static void Main(string[] args)
    {
        Cat britishShorthair = new BritishShorthair("Oliver", null);
        Cat maineCoon = new MaineCoon("Oscar", britishShorthair);
        Cat siamese = new Siamese("Simba", maineCoon);

        siamese.HandleRequest(Dishes.breakfast);
        siamese.HandleRequest(Dishes.dinner);
        siamese.HandleRequest(Dishes.supper);
    }
}
