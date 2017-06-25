using System.Linq;
using System.Collections.Generic;

class ObserverPattern
{
    enum States
    {
        eating,
        walking
    }

    interface Subject
    {
        void NotifyObservers();
        void RegisterObserver(Observer observer);
        void RemoveObserver(Observer observer);
    }

    interface Observer
    {
        void Update();
    }

    class Cat : Subject
    {
        private States state;
        private List<Observer> observers = new List<Observer>();

        public string name { get; }
        public States State
        {
            get
            {
                return state;
            }
            set
            {
                state = value;
                NotifyObservers();
            }
        }

        public Cat(string name)
        {
            this.name = name;
        }

        public void NotifyObservers()
        {
            observers.ForEach(observer => {
                observer.Update();
            });
        }

        public void RegisterObserver(Observer o)
        {
            observers.Add(o);
        }

        public void RemoveObserver(Observer o)
        {
            observers = observers
                .Where(observer => observer != o)
                .ToList();
        }
    }

    abstract class CatCaretaker : Observer
    {
        protected string name;
        protected Cat observable;

        protected abstract string action { get; }
        protected abstract States stateToReact { get; }

        public CatCaretaker(string name)
        {
            this.name = name;
        }

        public void RegisterAsObserver(Cat observable)
        {
            if (this.observable != null) return;

            observable.RegisterObserver(this);
            this.observable = observable;
        }

        public void RemoveAsObserver()
        {
            if (observable == null) return;

            observable.RemoveObserver(this);
            observable = null;
        }

        public void Update()
        {
            if ((observable?.State == stateToReact)) React();
        }

        protected void React()
        {
            System.Console.WriteLine("{0} is being {1} by {2}.", observable.name, action, name);
        }
    }

    class Feeder : CatCaretaker
    {
        protected override string action { get; } = "fed";
        protected override States stateToReact { get; } = States.eating;

        public Feeder(string name) : base(name) { }
    }

    class Walker : CatCaretaker
    {
        protected override string action { get; } = "walked";
        protected override States stateToReact { get; } = States.walking;

        public Walker(string name) : base(name) { }
    }

    static void Main(string[] args)
    {
        Cat cat = new Cat("Simba");
        Feeder feeder = new Feeder("Feeder");
        Feeder anotherFeeder = new Feeder("Another Feeder");
        Walker walker = new Walker("Walker");

        feeder.RegisterAsObserver(cat);
        anotherFeeder.RegisterAsObserver(cat);
        walker.RegisterAsObserver(cat);

        cat.State = States.eating;
        cat.State = States.walking;
        anotherFeeder.RemoveAsObserver();
        cat.State = States.eating;
    }
}
