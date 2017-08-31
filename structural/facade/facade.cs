using System;

class FacadePattern
{
    class Cat
    {
        private string name { get; }

        public Cat(string name)
        {
            this.name = name;
        }

        public void JumpUp(string barrier)
        {
            Console.WriteLine("{0} is on top of {1}!", name, barrier);
        }

        public void JumpDown(string barrier)
        {
            Console.WriteLine("{0} jumped down from {1}!", name, barrier);
        }
    }

    class CatJumpsOverBarrierFacade
    {
        private Cat cat { get; }

        public CatJumpsOverBarrierFacade(Cat cat)
        {
            this.cat = cat;
        }

        public void JumpOverBarrier(string barrier)
        {
            cat.JumpUp(barrier);
            cat.JumpDown(barrier);
        }
    }

    static void Main(string[] args)
    {
        Cat cat = new Cat("Simba");
        CatJumpsOverBarrierFacade catJumpsOverBarrierFacade = new CatJumpsOverBarrierFacade(cat);

        catJumpsOverBarrierFacade.JumpOverBarrier("fence");
    }
}
