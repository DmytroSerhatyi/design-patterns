import java.util.ArrayList;

public class ObserverPattern {
    public enum States {
        eating,
        walking
    }

    public interface Subject {
        public void notifyObservers();
        public void registerObserver(Observer observer);
        public void removeObserver(Observer observer);
    }

    public interface Observer {
        public void update();
    }

    public static class Cat implements Subject {
        private String name;
        private ArrayList<Observer> observers = new ArrayList<Observer>();
        private States state;

        public Cat(String name) {
            this.name = name;
        }

        public void notifyObservers() {
            observers.forEach(observer -> {
                observer.update();
            });
        }

        public void registerObserver(Observer o) {
            observers.add(o);
        }

        public void removeObserver(Observer o) {
            int index = observers.indexOf(o);

            if (index >= 0) observers.remove(index);
        }

        public String getName() {
            return name;
        }

        public States getState() {
            return state;
        }
        
        public void setState(States state) {
            this.state = state;
            notifyObservers();
        }
    }

    public static class CatCaretaker implements Observer {
        protected String action;
        protected States stateToReact;
        protected String name;
        protected Cat observable;

        public CatCaretaker(String name, String action, States stateToReact) {
            this.name = name;
            this.action = action;
            this.stateToReact = stateToReact;
        }

        public void registerAsObserver(Cat observable) {
            if (this.observable != null) return;

            observable.registerObserver(this);
            this.observable = observable;
        }

        public void removeAsObserver() {
            if (observable == null) return;

            observable.removeObserver(this);
            observable = null;
        }

        public void update() {
            if (observable != null && (observable.getState() == stateToReact)) react();
        }

        protected void react() {
            String reaction = String.format("%s is being %s by %s.", observable.getName(), action, name);
            System.out.println(reaction);
        }
    }

    public static class Dog implements Observer {
        public void update() {
            System.out.println("The dog has looked at the cat.");
        }
    }

    public static void main(String[] args) {
        Cat cat = new Cat("Simba");
        CatCaretaker feeder = new CatCaretaker("Feeder", "fed", States.eating);
        CatCaretaker walker = new CatCaretaker("Walker", "walked", States.walking);
        Dog dog = new Dog();

        feeder.registerAsObserver(cat);
        walker.registerAsObserver(cat);
        cat.registerObserver(dog);

        cat.setState(States.eating);
        cat.setState(States.walking);
        cat.removeObserver(dog);
        cat.setState(States.eating);
    }
}
