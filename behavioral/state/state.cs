using System;

class StatePattern
{
    abstract class State
    {
        protected Cat cat { get; }

        public abstract void Sleep();
        public abstract void Eat();
        public abstract void Walk();

        public State(Cat cat)
        {
            this.cat = cat;
        }
    }

    class SleepingState : State
    {
        public SleepingState(Cat cat) : base(cat) { }

        public override void Sleep()
        {
            Console.WriteLine("{0} is sleeping.", cat.GetName());

            State newState = cat.GetEatingState();
            cat.SetState(newState);
        }

        public override void Eat()
        {
            Console.WriteLine("{0} should sleep before eating.", cat.GetName());
        }

        public override void Walk()
        {
            Console.WriteLine("{0} can't walk now.", cat.GetName());
        }
    }

    class EatingState : State
    {
        public EatingState(Cat cat) : base(cat) { }

        public override void Sleep()
        {
            Console.WriteLine("{0} can't sleep now.", cat.GetName());
        }

        public override void Eat()
        {
            Console.WriteLine("{0} is eating.", cat.GetName());

            State newState = cat.GetWalkingState();
            cat.SetState(newState);
        }

        public override void Walk()
        {
            Console.WriteLine("{0} should eat before walking.", cat.GetName());
        }
    }

    class WalkingState : State
    {
        public WalkingState(Cat cat) : base(cat) { }

        public override void Sleep()
        {
            Console.WriteLine("{0} should walk before sleeping.", cat.GetName());
        }

        public override void Eat()
        {
            Console.WriteLine("{0} can't eat now.", cat.GetName());
        }

        public override void Walk()
        {
            Console.WriteLine("{0} is walking.", cat.GetName());

            State newState = cat.GetSleepingState();
            cat.SetState(newState);
        }
    }

    class Cat
    {
        private string name { get; }
        private State sleepingState { get; }
        private State eatingState { get; }
        private State walkingState { get; }
        private State state { get; set; }

        public Cat(string name)
        {
            this.name = name;

            sleepingState = new SleepingState(this);
            eatingState = new EatingState(this);
            walkingState = new WalkingState(this);

            state = sleepingState;
        }

        public string GetName()
        {
            return name;
        }

        public void Sleep()
        {
            state.Sleep();
        }

        public void Eat()
        {
            state.Eat();
        }

        public void Walk()
        {
            state.Walk();
        }

        public State GetSleepingState()
        {
            return sleepingState;
        }

        public State GetEatingState()
        {
            return eatingState;
        }

        public State GetWalkingState()
        {
            return walkingState;
        }

        public void SetState(State state)
        {
            this.state = state;
        }
    }

    static void Main(string[] args)
    {
        Cat cat = new Cat("Simba");

        cat.Eat();
        cat.Walk();
        cat.Sleep();

        cat.Walk();
        cat.Sleep();
        cat.Eat();

        cat.Sleep();
        cat.Eat();
        cat.Walk();
    }
}
