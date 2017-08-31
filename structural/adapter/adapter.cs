using System;

class AdapterPattern
{
    interface Pet
    {
        void MakeSound();
        string GetName();
    }

    class PetCaretaker
    {
        public void SayPetName(Pet pet)
        {
            Console.WriteLine("{0}!", pet.GetName());
            pet.MakeSound();
        }
    }

    class Cat
    {
        private string name { get; }

        public Cat(string name)
        {
            this.name = name;
        }

        public void MakeMeow()
        {
            Console.WriteLine("{0}: Meow-meow!", name);
        }

        public string GetName()
        {
            return name;
        }
    }

    class CatAdapter : Pet
    {
        private Cat cat { get; }

        public CatAdapter(Cat cat)
        {
            this.cat = cat;
        }

        public void MakeSound()
        {
            cat.MakeMeow();
        }

        public string GetName()
        {
            return cat.GetName();
        }
    }

    static void Main(string[] args)
    {
        Cat cat = new Cat("Simba");
        PetCaretaker petCaretaker = new PetCaretaker();
        CatAdapter catAdapter = new CatAdapter(cat);

        petCaretaker.SayPetName(catAdapter);
    }
}
