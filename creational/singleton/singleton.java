public class SingletonPattern {
    public static class Simba {
        private static Simba uniqueInstance;

        public static synchronized Simba getInstance() {
            if (uniqueInstance == null) {
                uniqueInstance = new Simba();
            }
            return uniqueInstance;
        }

        private String name = "Simba";

        private Simba() { }

        public void makeSound() {
            String sound = String.format("I'm unique %s! Meow!", name);
            System.out.println(sound);
        }
    }

    public static void main(String[] args) {
        Simba simba = Simba.getInstance();
        simba.makeSound();
    }
}
