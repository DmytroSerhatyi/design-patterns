import java.util.ArrayList;

public class CompositePattern {
    public static abstract class AnimalGangComponent {
        public void add(AnimalGangComponent component) { }

        public void getDescription() { }
    }

    public static class Animal extends AnimalGangComponent {
        private String name;
        private String species;
        private String breed;

        public Animal(String name, String species, String breed) {
            this.name = name;
            this.species = species;
            this.breed = breed;
        }

        public void getDescription() {
            String result = String.format("%s %s %s.", breed, species, name);
            System.out.println(result);
        }
    }

    public static class AnimalGang extends AnimalGangComponent {
        private String name;
        private ArrayList<AnimalGangComponent> animals = new ArrayList<AnimalGangComponent>();

        public AnimalGang(String name) {
            this.name = name;
        }

        public void add(AnimalGangComponent component) {
            animals.add(component);
        }

        public void getDescription() {
            String result = String.format("Animal gang %s.", name);
            System.out.println(result);

            animals.forEach(animal -> {
                animal.getDescription();
            });
        }
    }

    public static void main(String[] args) {
        Animal simba = new Animal("Simba", "cat", "Siamese");
        Animal oscar = new Animal("Oscar", "cat", "Maine Coon");
        Animal oliver = new Animal("Oliver", "cat", "British Shorthair");
        Animal elvis = new Animal("Elvis", "dog", "Siberian Husky");
        Animal buddy = new Animal("Buddy", "dog", "Retriever");
        Animal bruno = new Animal("Bruno", "dog", "Alabai");

        AnimalGang mainGang = new AnimalGang("Animals");
        AnimalGang catGang = new AnimalGang("Cats");
        AnimalGang dogGang = new AnimalGang("Dogs");

        mainGang.add(simba);
        mainGang.add(elvis);
        catGang.add(oscar);
        catGang.add(oliver);
        mainGang.add(catGang);
        dogGang.add(buddy);
        dogGang.add(bruno);
        mainGang.add(dogGang);

        mainGang.getDescription();
    }
}
