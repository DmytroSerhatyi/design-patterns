class FlyweightPattern
{
    class Cat
    {
        public void ShowCatInfo(string name, string breed, int age)
        {
            System.Console.WriteLine("Cat info\nName: {0}\nAge: {1}\nBreed: {2}\n\n", name, age, breed);
        }
    }

    static void Main(string[] args)
    {
        string[] catsNames = {"Simba", "Oscar", "Oliver"};
        string[] catsBreeds = {"Siamese", "Maine Coon", "British Shorthair"};
        int[] catsAges = {2, 3, 1};

        Cat cat = new Cat();

        for (int i = 0; i < catsNames.Length; i++)
        {
            string name = catsNames[i];
            string breed = catsBreeds[i];
            int age = catsAges[i];

            cat.ShowCatInfo(name, breed, age);
        }
    }
}
