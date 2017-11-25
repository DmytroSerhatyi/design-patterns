public class ChainOfResponsibilityPattern {
    public enum Dishes {
        breakfast,
        dinner,
        supper
    }

    public static abstract class Cat {
        protected String name;
        protected Cat successor;

        public Cat(String name, Cat successor) {
            this.name = name;
            this.successor = successor;
        }

        protected abstract String prepareDish();
        protected abstract Dishes dish();

        public void handleRequest(Dishes dish) {
            if (dish() == dish) {
                String result = String.format("%s: %s", name, prepareDish());
                System.out.println(result);
            } else if (successor != null) {
                successor.handleRequest(dish);
            }
        }
    }

    public static class Siamese extends Cat {
        public Siamese(String name, Cat successor) {
            super(name, successor);
        }

        protected Dishes dish() {
            return Dishes.breakfast;
        }

        protected String prepareDish() {
            return "Breakfast is ready! Bon Appetit!";
        }
    }

    public static class MaineCoon extends Cat {
        public MaineCoon(String name, Cat successor) {
            super(name, successor);
        }

        protected Dishes dish() {
            return Dishes.dinner;
        }

        protected String prepareDish() {
            return "There is a dinner! Let's begin!";
        }
    }

    public static class BritishShorthair extends Cat {
        public BritishShorthair(String name, Cat successor) {
            super(name, successor);
        }

        protected Dishes dish() {
            return Dishes.supper;
        }

        protected String prepareDish() {
            return "Time for supper! Yeah!";
        }
    }

    public static void main(String[] args) {
        Cat britishShorthair = new BritishShorthair("Oliver", null);
        Cat maineCoon = new MaineCoon("Oscar", britishShorthair);
        Cat siamese = new Siamese("Simba", maineCoon);

        siamese.handleRequest(Dishes.breakfast);
        siamese.handleRequest(Dishes.dinner);
        siamese.handleRequest(Dishes.supper);
    }
}
