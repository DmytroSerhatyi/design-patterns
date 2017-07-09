public class DecoratorPattern {
    public static abstract class Cat {
        protected String breed;
        protected String name;

        public Cat(String name) {
            this.name = name;
        }

        public String describe() {
            return String.format("Cat %s\nDescription: %s", name, breed);
        }
    }

    public static class Siamese extends Cat {
        public Siamese(String name) {
            super(name);
            breed = "Siamese";
        }
    }

    public static class MaineCoon extends Cat {
        public MaineCoon(String name) {
            super(name);
            breed = "Maine Coon";
        }
    }

    public static abstract class CatDecorator extends Cat {
        protected String breed = null;
        protected Cat cat;

        public CatDecorator(Cat cat) {
            super(null);
            this.cat = cat;
        }

        public abstract String describe();
    }

    public static class Sleeping extends CatDecorator {
        public Sleeping(Cat cat) {
            super(cat);
        }

        public String describe() {
            return String.format("%s, sleeping", cat.describe());
        }
    }

    public static class Purring extends CatDecorator {
        public Purring(Cat cat) {
            super(cat);
        }
        public String describe() {
            return String.format("%s, purring", cat.describe());
        }
    }

    public static void main(String[] args) {
        Cat simba = new Siamese("Simba");
        Cat oscar = new MaineCoon("Oscar");

        simba = new Purring(simba);
        simba = new Sleeping(simba);

        System.out.println(simba.describe());
        System.out.println(oscar.describe());
    }
}
