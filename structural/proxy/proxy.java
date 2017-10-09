public class ProxyPattern {
    public interface ICat {
        public void greet(Cat cat);
        public void makeSound();
    }

    public static class Cat implements ICat {
        private String name;

        public Cat(String name) {
            this.name = name;
        }

        public String getName() {
            return name;
        }

        public void greet(Cat cat) {
            String result = String.format("Meow-meow, %s!", cat.getName());
            System.out.println(result);
        }

        public void makeSound() {
            System.out.println("Meow-meow-meow!");
        }
    }

    public static class CatProxy implements ICat {
        private Cat cat;

        public CatProxy(Cat cat) {
            this.cat = cat;
        }

        public void greet(Cat cat) {
            if (this.cat != cat) {
                this.cat.greet(cat);
            } else {
                System.out.println("Cat can't greet itself.");
            }
        }

        public void makeSound() {
            cat.makeSound();
        }
    }

    public static void main(String[] args) {
        Cat simba = new Cat("Simba");
        Cat oscar = new Cat("Oscar");

        CatProxy simbaProxy = new CatProxy(simba);
        CatProxy oscarProxy = new CatProxy(oscar);

        oscarProxy.greet(simba);
        simbaProxy.greet(oscar);

        simbaProxy.greet(simba);
        simbaProxy.makeSound();
    }
}
