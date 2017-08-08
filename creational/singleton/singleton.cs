class SingletonPattern
{
    class Simba
    {
        private static Simba uniqueInstance { get; set; }

        public static Simba GetInstance()
        {
            if (uniqueInstance == null)
            {
                uniqueInstance = new Simba();
            }
            return uniqueInstance;
        }

        private string name { get; } = "Simba";

        private Simba() { }

        public void MakeSound()
        {
            System.Console.WriteLine("I'm unique {0}! Meow!", name);
        }
    }

    static void Main(string[] args)
    {
        Simba simba = Simba.GetInstance();
        simba.MakeSound();
    }
}
