public class FactoryMethodPattern {
    public enum PetBreeds {
        siamese,
        maineCoon,
        siberianHusky
    }

    public static abstract class Pet {
        protected String breed;
        protected String sound;

        public void feedPet() {
            String reaction = String.format("%s is fed and happy!", breed);
            System.out.println(reaction);
        }

        public void patPet() {
            String reaction = String.format("%s by %s.", sound, breed);
            System.out.println(reaction);
        }
    }

    public static class Siamese extends Pet {
        public Siamese() {
            super();
            breed = "Siamese";
            sound = "Meow-meow!";
        }
    }

    public static class MaineCoon extends Pet {
        public MaineCoon() {
            super();
            breed = "Maine Coon";
            sound = "Purr...";
        }
    }

    public static class Dog extends Pet {
        public Dog() {
            super();
            breed = "Siberian Husky";
            sound = "Woof!";
        }
    }

    public static abstract class PetCaretaker {
        protected abstract Pet choosePet(PetBreeds breed);

        public void carePet(PetBreeds breed) {
            Pet pet = choosePet(breed);

            if (pet == null) return;

            pet.feedPet();
            pet.patPet();
        }
    }

    public static class CatCaretaker extends PetCaretaker {
        protected Pet choosePet(PetBreeds breed) {
            if (breed == PetBreeds.siamese) {
                return new Siamese();
            } else if (breed == PetBreeds.maineCoon) {
                return new MaineCoon();
            } else {
                return null;
            }
        }
    }

    public static class DogCaretaker extends PetCaretaker {
        protected Pet choosePet(PetBreeds breed) {
            if (breed == PetBreeds.siberianHusky) {
                return new Dog();
            } else {
                return null;
            }
        }
    }

    public static void main(String[] args) {
        PetCaretaker catCaretaker = new CatCaretaker();
        PetCaretaker dogCaretaker = new DogCaretaker();

        catCaretaker.carePet(PetBreeds.siamese);
        catCaretaker.carePet(PetBreeds.maineCoon);
        dogCaretaker.carePet(PetBreeds.siberianHusky);
    }
}
