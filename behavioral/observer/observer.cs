using System;
using System.Collections.Generic;
using System.Linq;

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

    class CatCaretaker : Observer
    {
        protected string name;
        protected Cat observable;
        protected string action { get; }
        protected States stateToReact { get; }

        public CatCaretaker(string name, string action, States stateToReact)
        {
            this.name = name;
            this.action = action;
            this.stateToReact = stateToReact;
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
            Console.WriteLine("{0} is being {1} by {2}.", observable.name, action, name);
        }
    }

    class Dog : Observer
    {
        public void Update()
        {
            Console.WriteLine("The dog has looked at cat.");
        }
    }

    static void Main(string[] args)
    {
        Cat cat = new Cat("Simba");
        CatCaretaker feeder = new CatCaretaker("Feeder", "fed", States.eating);
        CatCaretaker walker = new CatCaretaker("Walker", "walked", States.walking);
        Dog dog = new Dog();

        feeder.RegisterAsObserver(cat);
        walker.RegisterAsObserver(cat);
        cat.RegisterObserver(dog);

        cat.State = States.eating;
        cat.State = States.walking;
        cat.RemoveObserver(dog);
        cat.State = States.eating;
    }
}
