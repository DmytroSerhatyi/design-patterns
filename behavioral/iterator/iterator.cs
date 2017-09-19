using System;
using System.Collections.Generic;

class IteratorPattern
{
    class Cat
    {
        private string name { get; }
        private string breed { get; }

        public Cat(string name, string breed)
        {
            this.name = name;
            this.breed = breed;
        }

        public string GetDescription()
        {
            return String.Format("{0} cat {1}.", breed, name);
        }
    }

    interface Iterator
    {
        bool HasNext();
        Object Next();
    }

    class CatGangIterator : Iterator
    {
        private List<Cat> cats { get; }
        private int position { get; set; } = 0;

        public CatGangIterator(List<Cat> cats)
        {
            this.cats = cats;
        }

        public bool HasNext()
        {
            if (position >= cats.Count)
            {
                return false;
            }
            else
            {
                return true;
            }
        }

        public Object Next()
        {
            Cat cat = cats[position];
            position += 1;
            return cat;
        }
    }

    class CatGang
    {
        private List<Cat> cats { get; } = new List<Cat>();

        public void AddCat(Cat cat)
        {
            cats.Add(cat);
        }

        public Iterator CreateIterator()
        {
            return new CatGangIterator(cats);
        }
    }

    static void Main(string[] args)
    {
        Cat simba = new Cat("Simba", "Siamese");
        Cat oscar = new Cat("Oscar", "Maine Coon");
        Cat oliver = new Cat("Oliver", "British Shorthair");

        CatGang catGang = new CatGang();
        catGang.AddCat(simba);
        catGang.AddCat(oscar);
        catGang.AddCat(oliver);

        Iterator catGangIterator = catGang.CreateIterator();

        while (catGangIterator.HasNext())
        {
            Cat cat = (Cat)catGangIterator.Next();
            Console.WriteLine(cat.GetDescription());
        }
    }
}
