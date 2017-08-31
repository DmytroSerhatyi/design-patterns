public class AdapterPattern {
    public interface Pet {
        public void makeSound();
        public String getName();
    }

    public static class PetCaretaker {
        public void sayPetName(Pet pet) {
            String result = String.format("%s!", pet.getName());
            System.out.println(result);
            pet.makeSound();
        }
    }

    public static class Cat {
        private String name;

        public Cat(String name) {
            this.name = name;
        }

        public void makeMeow() {
            String result = String.format("%s: Meow-meow!", name);
            System.out.println(result);
        }

        public String getName() {
            return name;
        }
    }

    public static class CatAdapter implements Pet {
        private Cat cat;

        public CatAdapter(Cat cat) {
            this.cat = cat;
        }

        public void makeSound() {
            cat.makeMeow();
        }

        public String getName() {
            return cat.getName();
        }
    }

    public static void main(String[] args) {
        Cat cat = new Cat("Simba");
        PetCaretaker petCaretaker = new PetCaretaker();
        CatAdapter catAdapter = new CatAdapter(cat);

        petCaretaker.sayPetName(catAdapter);
    }
}
