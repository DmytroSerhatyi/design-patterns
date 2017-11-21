using System;

class BridgePattern
{
    interface Animal
    {
        string GetName();
        void MakeSound();
    }

    class AnimalCaretaker
    {
        protected Animal implementor { get; }

        public AnimalCaretaker(Animal animal)
        {
            implementor = animal;
        }

        public void SayAnimalName()
        {
            Console.WriteLine("{0}!", implementor.GetName());

            implementor.MakeSound();
        }
    }

    class Cat : Animal
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

        public void MakeSound()
        {
             Console.WriteLine("Meow-meow!");
        }
    }

    class CatCaretaker : AnimalCaretaker
    {
        public CatCaretaker(Animal animal) : base(animal) { }

        public void SayCatName()
        {
            Console.WriteLine("Hey, cat!");

            SayAnimalName();
        }
    }

    static void Main(string[] args)
    {
        Animal cat = new Cat("Simba");
        AnimalCaretaker animalCaretaker = new AnimalCaretaker(cat);
        CatCaretaker catCaretaker = new CatCaretaker(cat);

        animalCaretaker.SayAnimalName();
        catCaretaker.SayCatName();
    }
}
