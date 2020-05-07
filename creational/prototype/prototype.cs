using System;

class PrototypePattern
{
    class Cat
    {
        private string name { get; }
        private string breed { get; }
        private string sound { get; }
        private bool everMadeSound { get; set; } = false;
        private bool cloned { get; set; } = false;

        public Cat(string name, string breed, string sound)
        {
            this.name = name;
            this.breed = breed;
            this.sound = sound;
        }

        public void MakeSound()
        {
            everMadeSound = true;
            Console.WriteLine(sound);
        }

        public void GetInfo()
        {
            string title = "Cat info:";
            string name = String.Format("name: {0}", this.name);
            string breed = String.Format("breed: {0}", this.breed);
            string sound = String.Format("sound: {0}", this.sound);
            string everMadeSound = String.Format("ever made sound: {0}", this.everMadeSound);
            string cloned = String.Format("cloned: {0}", this.cloned);

            Console.WriteLine("{0}\n{1}\n{2}\n{3}\n{4}\n{5}\n\n", title, name, breed, sound, everMadeSound, cloned);
        }

        public Cat CloneObject()
        {
            Cat clone = new Cat(name, breed, sound);

            clone.everMadeSound = everMadeSound;
            clone.cloned = true;

            return clone;
        }
    }

    static void Main(string[] args)
    {
        Cat simba = new Cat("Simba", "Siamese", "Meow-meow");
        simba.GetInfo();
        simba.MakeSound();
        simba.GetInfo();

        Cat clone = simba.CloneObject();
        clone.GetInfo();
    }
}
