public class StatePattern {
    public static abstract class State {
        protected Cat cat;

        public abstract void sleep();
        public abstract void eat();
        public abstract void walk();

        public State(Cat cat) {
            this.cat = cat;
        }
    }

    public static class SleepingState extends State {
        public SleepingState(Cat cat) {
            super(cat);
        }

        public void sleep() {
            String result = String.format("%s is sleeping.", cat.getName());
            System.out.println(result);

            State newState = cat.getEatingState();
            cat.setState(newState);
        }

        public void eat() {
            String result = String.format("%s should sleep before eating.", cat.getName());
            System.out.println(result);
        }

        public void walk() {
            String result = String.format("%s can't walk now.", cat.getName());
            System.out.println(result);
        }
    }

    public static class EatingState extends State {
        public EatingState(Cat cat) {
            super(cat);
        }

        public void sleep() {
            String result = String.format("%s can't sleep now.", cat.getName());
            System.out.println(result);
        }

        public void eat() {
            String result = String.format("%s is eating.", cat.getName());
            System.out.println(result);

            State newState = cat.getWalkingState();
            cat.setState(newState);
        }

        public void walk() {
            String result = String.format("%s should eat before walking.", cat.getName());
            System.out.println(result);
        }
    }

    public static class WalkingState extends State {
        public WalkingState(Cat cat) {
            super(cat);
        }

        public void sleep() {
            String result = String.format("%s should walk before sleeping.", cat.getName());
            System.out.println(result);
        }

        public void eat() {
            String result = String.format("%s can't eat now.", cat.getName());
            System.out.println(result);
        }

        public void walk() {
            String result = String.format("%s is walking.", cat.getName());
            System.out.println(result);

            State newState = cat.getSleepingState();
            cat.setState(newState);
        }
    }

    public static class Cat {
        private String name;
        private State sleepingState = new SleepingState(this);
        private State eatingState = new EatingState(this);
        private State walkingState = new WalkingState(this);
        private State state = sleepingState;

        public Cat(String name) {
            this.name = name;
        }

        public String getName() {
            return name;
        }

        public void sleep() {
            state.sleep();
        }

        public void eat() {
            state.eat();
        }

        public void walk() {
            state.walk();
        }

        public State getSleepingState() {
            return sleepingState;
        }

        public State getEatingState() {
            return eatingState;
        }

        public State getWalkingState() {
            return walkingState;
        }

        public void setState(State state) {
            this.state = state;
        }
    }

    public static void main(String[] args) {
        Cat cat = new Cat("Simba");

        cat.eat();
        cat.walk();
        cat.sleep();

        cat.walk();
        cat.sleep();
        cat.eat();

        cat.sleep();
        cat.eat();
        cat.walk();
    }
}
