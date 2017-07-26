using System;

class FactoryMethodPattern
{
    enum PetBreeds
    {
        siamese,
        maineCoon,
        siberianHusky
    }

    abstract class Pet
    {
        protected abstract string breed { get; }
        protected abstract string sound { get; }

        public void FeedPet()
        {
            Console.WriteLine("{0} is fed and happy!", breed);
        }

        public void PatPet()
        {
            Console.WriteLine("\"{0}\" by {1}.", sound, breed);
        }
    }

    class Siamese : Pet
    {
        protected override string breed { get; } = "Siamese";
        protected override string sound { get; } = "Meow-meow!";
        
    }

    class MaineCoon : Pet
    {
        protected override string breed { get; } = "Maine Coon";
        protected override string sound { get; } = "Purr...";
    }

    class Dog : Pet
    {
        protected override string breed { get; } = "Siberian Husky";
        protected override string sound { get; } = "Woof!";
    }

    abstract class PetCaretaker
    {
        protected abstract Pet ChoosePet(PetBreeds breed);

        public void CarePet(PetBreeds breed)
        {
            Pet pet = ChoosePet(breed);

            if (pet == null) return;

            pet.FeedPet();
            pet.PatPet();
        }
    }

    class CatCaretaker : PetCaretaker
    {
        protected override Pet ChoosePet(PetBreeds breed)
        {
            if (breed == PetBreeds.siamese)
            {
                return new Siamese();
            }
            else if (breed == PetBreeds.maineCoon)
            {
                return new MaineCoon();
            }
            else
            {
                return null;
            }
        }
    }

    class DogCaretaker : PetCaretaker
    {
        protected override Pet ChoosePet(PetBreeds breed)
        {
            if (breed == PetBreeds.siberianHusky)
            {
                return new Dog();
            }
            else
            {
               return null;
            }
        }
    }

    static void Main(string[] args)
    {
        PetCaretaker catCaretaker = new CatCaretaker();
        PetCaretaker dogCaretaker = new DogCaretaker();

        catCaretaker.CarePet(PetBreeds.siamese);
        catCaretaker.CarePet(PetBreeds.maineCoon);
        dogCaretaker.CarePet(PetBreeds.siberianHusky);
    }
}
