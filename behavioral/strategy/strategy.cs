class StrategyPattern
{
    interface SoundBehavior
    {
        string MakeSound();
    }

    class MeowSound : SoundBehavior
    {
        public string MakeSound()
        {
            return "Meow meow meow!";
        }
    }

    class PurrSound : SoundBehavior
    {
        public string MakeSound()
        {
            return "Purrr... Purrrrr...";
        }
    }

    abstract class Cat
    {
        protected SoundBehavior soundBehavior { get; set; }
        protected string name { get; }

        public Cat(string name)
        {
            this.name = name;
        }

        public void PerformSound()
        {
            System.Console.WriteLine("{0}: {1}", name, soundBehavior.MakeSound());
        }

        public void SetSoundBehavior(SoundBehavior ab)
        {
            soundBehavior = ab;
        }
    }

    class Siamese : Cat
    {
        public Siamese(string name)
            : base(name)
        {
            soundBehavior = new MeowSound();
        }
    }

    class MaineCoon : Cat
    {
        public MaineCoon(string name)
            : base(name)
        {
            soundBehavior = new PurrSound();
        }
    }

    static void Main(string[] args)
    {
        Cat siamese = new Siamese("Simba");
        Cat maineCoon = new MaineCoon("Oscar");

        siamese.PerformSound();
        maineCoon.PerformSound();
        siamese.SetSoundBehavior(new PurrSound());
        siamese.PerformSound();
    }
}
