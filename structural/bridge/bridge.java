public class BridgePattern {
    public interface Animal {
        public String getName();
        public void makeSound();
    }

    public static class AnimalCaretaker {
        protected Animal implementor;

        public AnimalCaretaker(Animal animal) {
            implementor = animal;
        }

        public void sayAnimalName() {
            String result = String.format("%s!", implementor.getName());
            System.out.println(result);

            implementor.makeSound();
        }
    }

    public static class Cat implements Animal {
        private String name;

        public Cat(String name) {
            this.name = name;
        }

        public String getName() {
            return name;
        }

        public void makeSound() {
            System.out.println("Meow-meow!");
        }
    }

    public static class CatCaretaker extends AnimalCaretaker {
        public CatCaretaker(Animal animal) {
            super(animal);
        }

        public void sayCatName() {
            System.out.println("Hey, cat!");

            sayAnimalName();
        }
    }

    public static void main(String[] args) {
        Animal cat = new Cat("Simba");
        AnimalCaretaker animalCaretaker = new AnimalCaretaker(cat);
        CatCaretaker catCaretaker = new CatCaretaker(cat);

        animalCaretaker.sayAnimalName();
        catCaretaker.sayCatName();
    }
}
