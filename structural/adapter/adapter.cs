using System;

class AdapterPattern
{
    interface Pet
    {
        void makeSound();
        string getName();
    }

    class PetCaretaker
    {
        public void sayPetName(Pet pet)
        {
            Console.WriteLine("{0}!", pet.getName());
            pet.makeSound();
        }
    }

    class Cat
    {
        private string name { get; }

        public Cat(string name)
        {
            this.name = name;
        }

        public void makeMeow()
        {
            Console.WriteLine("{0}: Meow-meow!", name);
        }

        public string getName()
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

        public void makeSound()
        {
            cat.makeMeow();
        }

        public string getName()
        {
            return cat.getName();
        }
    }

    static void Main(string[] args)
    {
        Cat cat = new Cat("Simba");
        PetCaretaker petCaretaker = new PetCaretaker();
        CatAdapter catAdapter = new CatAdapter(cat);

        petCaretaker.sayPetName(catAdapter);
    }
}
