using System;

class DecoratorPattern
{
    abstract class Cat
    {
        protected abstract string breed { get; }
        protected string name { get; }

        public Cat(string name)
        {
            this.name = name;
        }

        public virtual string Describe()
        {
            return String.Format("Cat {0}\nDescription: {1}", name, breed);
        }
    }

    class Siamese : Cat
    {
        protected override string breed { get; } = "Siamese";

        public Siamese(string name) : base(name) { }
    }

    class MaineCoon : Cat
    {
        protected override string breed { get; } = "Maine Coon";

        public MaineCoon(string name) : base(name) { }
    }

    abstract class CatDecorator : Cat
    {
        protected override string breed { get; } = null;
        protected Cat cat;

        public CatDecorator(Cat cat)
            : base(null)
        {
            this.cat = cat;
        }

        public abstract override string Describe();
    }

    class Sleeping : CatDecorator
    {
        public Sleeping(Cat cat) : base(cat) { }

        public override string Describe()
        {
            return String.Format("{0}, sleeping", cat.Describe());
        }
    }

    class Purring : CatDecorator
    {
        public Purring(Cat cat) : base(cat) { }
    
        public override string Describe()
        {
            return String.Format("{0}, purring", cat.Describe());
        }
    }

    static void Main(string[] args)
    {
        Cat simba = new Siamese("Simba");
        Cat oscar = new MaineCoon("Oscar");

        simba = new Purring(simba);
        simba = new Sleeping(simba);

        Console.WriteLine(simba.Describe());
        Console.WriteLine(oscar.Describe());
    }
}
