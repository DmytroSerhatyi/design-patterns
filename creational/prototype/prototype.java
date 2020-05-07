public class PrototypePattern {
    public static class Cat {
        private String name;
        private String breed;
        private String sound;
        private boolean everMadeSound = false;
        private boolean cloned = false;

        public Cat(String name, String breed, String sound) {
            this.name = name;
            this.breed = breed;
            this.sound = sound;
        }

        public void makeSound() {
            everMadeSound = true;
            System.out.println(sound);
        }

        public void getInfo() {
            String title = "Cat info:";
            String name = String.format("name: %s", this.name);
            String breed = String.format("breed: %s", this.breed);
            String sound = String.format("sound: %s", this.sound);
            String everMadeSound = String.format("ever made sound: %s", this.everMadeSound);
            String cloned = String.format("cloned: %s", this.cloned);

            String result = String.format("%s\n%s\n%s\n%s\n%s\n%s\n\n", title, name, breed, sound, everMadeSound, cloned);
            System.out.println(result);
        }

        public Cat cloneObject() {
            Cat clone = new Cat(name, breed, sound);

            clone.everMadeSound = everMadeSound;
            clone.cloned = true;

            return clone;
        }
    }

    public static void main(String[] args) {
        Cat simba = new Cat("Simba", "Siamese", "Meow-meow");
        simba.getInfo();
        simba.makeSound();
        simba.getInfo();

        Cat clone = simba.cloneObject();
        clone.getInfo();
    }
}
