using System;

class ProxyPattern
{
    interface ICat
    {
        void Greet(Cat cat);
        void MakeSound();
    }

    class Cat : ICat
    {
        private string name { get; }

        public Cat(string name)
        {
            this.name = name;
        }

        public string GetName()
        {
            return name;
        }

        public void Greet(Cat cat)
        {
            Console.WriteLine("Meow-meow, {0}!", cat.GetName());
        }

        public void MakeSound()
        {
            Console.WriteLine("Meow-meow-meow!");
        }
    }

    class CatProxy : ICat
    {
        private Cat cat { get; }

        public CatProxy(Cat cat)
        {
            this.cat = cat;
        }

        public void Greet(Cat cat)
        {
            if (this.cat != cat)
            {
                this.cat.Greet(cat);
            }
            else
            {
                Console.WriteLine("Cat can't greet itself.");
            }
        }

        public void MakeSound()
        {
            cat.MakeSound();
        }
    }

    static void Main(string[] args)
    {
        Cat simba = new Cat("Simba");
        Cat oscar = new Cat("Oscar");

        CatProxy simbaProxy = new CatProxy(simba);
        CatProxy oscarProxy = new CatProxy(oscar);

        oscarProxy.Greet(simba);
        simbaProxy.Greet(oscar);

        simbaProxy.Greet(simba);
        simbaProxy.MakeSound();
    }
}
