using System;

class VisitorPattern
{
    class Cat
    {
        public string name { get; }
        public string breed { get; }
        public string sound { get; }

        public Cat(string name, string breed, string sound)
        {
            this.name = name;
            this.breed = breed;
            this.sound = sound;
        }
    }

    class Visitor
    {
        public void MakeSound(Cat cat)
        {
            Console.WriteLine("{0}: \"{1}\"", cat.name, cat.sound);
        }

        public void GetInfo(Cat cat)
        {
            Console.WriteLine("{0} cat {1}.", cat.breed, cat.name);
        }
    }

    static void Main(string[] args)
    {
        Cat[] cats = {
            new Cat("Simba", "Siamese", "Meow-meow"),
            new Cat("Oscar", "Maine Coon", "Meoow")
        };

        Visitor visitor = new Visitor();

        foreach (Cat cat in cats)
        {
            visitor.MakeSound(cat);
            visitor.GetInfo(cat);
        }
    }
}
