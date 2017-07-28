using System;

class FactoryMethodPattern
{
    enum AnimalBreeds
    {
        siamese,
        maineCoon,
        siberianHusky
    }

    abstract class AnimalData
    {
        protected abstract string breed { get; }
        protected abstract string origin { get; }

        public string ComposeBreedData()
        {
            return String.Format("Breed: {0}", breed);
        }

        public string ComposeOriginData()
        {
            return String.Format("From: {0}", origin);
        }
    }

    class SiameseData : AnimalData
    {
        protected override string breed { get; } = "Siamese";
        protected override string origin { get; } = "Thailand";
        
    }

    class MaineCoonData : AnimalData
    {
        protected override string breed { get; } = "Maine Coon";
        protected override string origin { get; } = "Maine, United States of America";
    }

    class SiberianHuskyData : AnimalData
    {
        protected override string breed { get; } = "Siberian Husky";
        protected override string origin { get; } = "Siberia";
    }

    abstract class AnimalDatabase
    {
        protected abstract AnimalData MakeQuery(AnimalBreeds breed);

        public string SearchByBreed(AnimalBreeds breed)
        {
            AnimalData animal = MakeQuery(breed);

            return String.Format("{0}\n{1}", animal.ComposeBreedData(), animal.ComposeOriginData());
        }
    }

    class CatDatabase : AnimalDatabase
    {
        protected override AnimalData MakeQuery(AnimalBreeds breed)
        {
            if (breed == AnimalBreeds.siamese)
            {
                return new SiameseData();
            }
            else if (breed == AnimalBreeds.maineCoon)
            {
                return new MaineCoonData();
            }
            else
            {
                return null;
            }
        }
    }

    class DogDatabase : AnimalDatabase
    {
        protected override AnimalData MakeQuery(AnimalBreeds breed)
        {
            if (breed == AnimalBreeds.siberianHusky)
            {
                return new SiberianHuskyData();
            }
            else
            {
               return null;
            }
        }
    }

    static void Main(string[] args)
    {
        AnimalDatabase catDatabase = new CatDatabase();
        AnimalDatabase dogDatabase = new DogDatabase();

        Console.WriteLine(catDatabase.SearchByBreed(AnimalBreeds.siamese));
        Console.WriteLine(catDatabase.SearchByBreed(AnimalBreeds.maineCoon));
        Console.WriteLine(dogDatabase.SearchByBreed(AnimalBreeds.siberianHusky));
    }
}
