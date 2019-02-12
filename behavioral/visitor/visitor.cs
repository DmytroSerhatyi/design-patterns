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

        public void Accept(Visitor visitor)
        {
            visitor.Visit(this);
        }
    }

    interface Visitor
    {
        void Visit(Cat cat);
    }

    class InfoVisitor : Visitor
    {
        public void Visit(Cat cat)
        {
            Console.WriteLine("{0} cat {1}.", cat.breed, cat.name);
        }
    }

    class SoundVisitor : Visitor
    {
        public void Visit(Cat cat)
        {
            Console.WriteLine("{0}: \"{1}\"", cat.name, cat.sound);
        }
    }

    static void Main(string[] args)
    {
        Cat[] cats = {
            new Cat("Simba", "Siamese", "Meow-meow"),
            new Cat("Oscar", "Maine Coon", "Meoow")
        };

        Visitor infoVisitor = new InfoVisitor();
        Visitor soundVisitor = new SoundVisitor();

        foreach (Cat cat in cats)
        {
            cat.Accept(infoVisitor);
            cat.Accept(soundVisitor);
        }
    }
}
