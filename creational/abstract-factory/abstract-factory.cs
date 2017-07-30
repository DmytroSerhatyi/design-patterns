class AbstractFactory
{
    interface Breed
    {
        string GetBreed();
    }

    class Siamese : Breed
    {
        public string GetBreed()
        {
            return "Siamese";
        }
    }

    class MaineCoon : Breed
    {
        public string GetBreed()
        {
            return "Maine Coon";
        }
    }

    class Alabai : Breed
    {
        public string GetBreed()
        {
            return "Alabai";
        }
    }

    class Retriever : Breed
    {
        public string GetBreed()
        {
            return "Retriever";
        }
    }

    interface Origin
    {
        string GetOrigin();
    }

    class Thailand : Origin
    {
        public string GetOrigin()
        {
            return "Thailand";
        }
    }

    class Maine : Origin
    {
        public string GetOrigin()
        {
            return "Maine, United States of America";
        }
    }

    class Kazakhstan : Origin
    {
        public string GetOrigin()
        {
            return "Kazakhstan";
        }
    }

    class Canada : Origin
    {
        public string GetOrigin()
        {
            return "Canada";
        }
    }

    interface QueryComponentsFactory
    {
        Breed SetCatBreed();
        Origin SetCatOrigin();
        Breed SetDogBreed();
        Origin SetDogOrigin();
    }

    class AsianComponentsFactory : QueryComponentsFactory
    {
        public Breed SetCatBreed()
        {
            return new Siamese();
        }

        public Origin SetCatOrigin()
        {
            return new Thailand();
        }

        public Breed SetDogBreed()
        {
            return new Alabai();
        }

        public Origin SetDogOrigin()
        {
            return new Kazakhstan();
        }
    }

    class AmericanComponentsFactory : QueryComponentsFactory
    {
        public Breed SetCatBreed()
        {
            return new MaineCoon();
        }

        public Origin SetCatOrigin()
        {
            return new Maine();
        }

        public Breed SetDogBreed()
        {
            return new Retriever();
        }

        public Origin SetDogOrigin()
        {
            return new Canada();
        }
    }

    abstract class AnimalQuery
    {
        protected abstract string species { get; }
        protected Breed breed { get; set; }
        protected Origin origin { get; set; }
        protected QueryComponentsFactory componentsFactory { get; }

        public AnimalQuery(QueryComponentsFactory componentsFactory)
        {
            this.componentsFactory = componentsFactory;
        }

        public abstract void ComposeQuery();

        public void ShowDescription()
        {
            System.Console.WriteLine("{0} is a {1} breed from {2}.", breed.GetBreed(), species, origin.GetOrigin());
        }
    }

    class CatQuery : AnimalQuery
    {
        protected override string species { get; } = "cat";

        public CatQuery(QueryComponentsFactory componentsFactory) : base(componentsFactory) { }

        public override void ComposeQuery()
        {
            breed = componentsFactory.SetCatBreed();
            origin = componentsFactory.SetCatOrigin();
        }
    }

    class DogQuery : AnimalQuery
    {
        protected override string species { get; } = "dog";

        public DogQuery(QueryComponentsFactory componentsFactory) : base(componentsFactory) { }

        public override void ComposeQuery()
        {
            breed = componentsFactory.SetDogBreed();
            origin = componentsFactory.SetDogOrigin();
        }
    }

    static void fulfillQuery(AnimalQuery query)
    {
        query.ComposeQuery();
        query.ShowDescription();
    }

    static void Main(string[] args)
    {
        QueryComponentsFactory americanComponentsFactory = new AmericanComponentsFactory();
        QueryComponentsFactory asianComponentsFactory = new AsianComponentsFactory(); 

        AnimalQuery siameseQuery = new CatQuery(asianComponentsFactory);
        fulfillQuery(siameseQuery);

        AnimalQuery maineCoonQuery = new CatQuery(americanComponentsFactory);
        fulfillQuery(maineCoonQuery);

        AnimalQuery alabaiQuery = new DogQuery(asianComponentsFactory);
        fulfillQuery(alabaiQuery);

        AnimalQuery retrieverQuery = new DogQuery(americanComponentsFactory);
        fulfillQuery(retrieverQuery);
    }
}
