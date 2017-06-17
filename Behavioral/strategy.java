public class Strategy {
    public interface SoundBehavior {
        public String makeSound();
    }

    public static class MeowSound implements SoundBehavior {
        public String makeSound() {
            return "Meow meow meow!";
        }
    }

    public static class PurrSound implements SoundBehavior {
        public String makeSound() {
            return "Purrr... Purrrrr...";
        }
    }

    public static abstract class Cat {
        SoundBehavior soundBehavior;
        String name;

        public Cat(String name) {
            this.name = name;
        }

        public void performSound() {
            String sound = String.format("%s: %s", name, soundBehavior.makeSound());
            System.out.println(sound);
        }

        public void setSoundBehavior(SoundBehavior ab) {
            soundBehavior = ab;
        }
    }

    public static class Siamese extends Cat {
        public Siamese(String name) {
            super(name);
            soundBehavior = new MeowSound();
        }
    }

    public static class MaineCoon extends Cat {
        public MaineCoon(String name) {
            super(name);
            soundBehavior = new PurrSound();
        }
    }

    public static void main(String[] args) {
        Cat siamese = new Siamese("Simba");
        Cat maineCoon = new MaineCoon("Oscar");

        siamese.performSound();
        maineCoon.performSound();
        siamese.setSoundBehavior(new PurrSound());
        siamese.performSound();
    }
}
