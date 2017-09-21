using System;
using System.Collections.Generic;

class CompositePattern
{
    abstract class AnimalGangComponent
    {
        public virtual void Add(AnimalGangComponent component) { }

        public virtual void GetDescription() { }
    }

    class Animal : AnimalGangComponent
    {
        private string name { get; }
        private string species { get; }
        private string breed { get; }

        public Animal(string name, string species, string breed)
        {
            this.name = name;
            this.species = species;
            this.breed = breed;
        }

        public override void GetDescription()
        {
            Console.WriteLine("{0} {1} {2}.", breed, species, name);
        }
    }

    class AnimalGang : AnimalGangComponent
    {
        private string name { get; }
        private List<AnimalGangComponent> animals { get; } = new List<AnimalGangComponent>();

        public AnimalGang(string name)
        {
            this.name = name;
        }

        public override void Add(AnimalGangComponent component)
        {
            animals.Add(component);
        }

        public override void GetDescription()
        {
            Console.WriteLine("Animal gang {0}.", name);

            animals.ForEach(animal => {
                animal.GetDescription();
            });
        }
    }

    static void Main(string[] args)
    {
        Animal simba = new Animal("Simba", "cat", "Siamese");
        Animal oscar = new Animal("Oscar", "cat", "Maine Coon");
        Animal oliver = new Animal("Oliver", "cat", "British Shorthair");
        Animal elvis = new Animal("Elvis", "dog", "Siberian Husky");
        Animal buddy = new Animal("Buddy", "dog", "Retriever");
        Animal bruno = new Animal("Bruno", "dog", "Alabai");

        AnimalGang mainGang = new AnimalGang("Animals");
        AnimalGang catGang = new AnimalGang("Cats");
        AnimalGang dogGang = new AnimalGang("Dogs");

        mainGang.Add(simba);
        mainGang.Add(elvis);
        catGang.Add(oscar);
        catGang.Add(oliver);
        mainGang.Add(catGang);
        dogGang.Add(buddy);
        dogGang.Add(bruno);
        mainGang.Add(dogGang);

        mainGang.GetDescription();
    }
}
