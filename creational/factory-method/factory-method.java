public class FactoryMethodPattern {
    public enum AnimalBreeds {
        siamese,
        maineCoon,
        siberianHusky
    }

    public static abstract class AnimalData {
        protected String breed;
        protected String origin;

        public String composeBreedData() {
            return String.format("Breed: %s", breed);
        }

        public String composeOriginData() {
            return String.format("From: %s", origin);
        }
    }

    public static class SiameseData extends AnimalData {
        public SiameseData() {
            super();
            breed = "Siamese";
            origin = "Thailand";
        }
    }

    public static class MaineCoonData extends AnimalData {
        public MaineCoonData() {
            super();
            breed = "Maine Coon";
            origin = "Maine, United States of America";
        }
    }

    public static class SiberianHuskyData extends AnimalData {
        public SiberianHuskyData() {
            super();
            breed = "Siberian Husky";
            origin = "Siberia";
        }
    }

    public static abstract class AnimalDatabase {
        protected abstract AnimalData makeQuery(AnimalBreeds breed);

        public String searchByBreed(AnimalBreeds breed) {
            AnimalData animal = makeQuery(breed);

            return String.format("%s\n%s", animal.composeBreedData(), animal.composeOriginData());
        }
    }

    public static class CatDatabase extends AnimalDatabase {
        protected AnimalData makeQuery(AnimalBreeds breed) {
            if (breed == AnimalBreeds.siamese) {
                return new SiameseData();
            } else if (breed == AnimalBreeds.maineCoon) {
                return new MaineCoonData();
            } else {
                return null;
            }
        }
    }

    public static class DogDatabase extends AnimalDatabase {
        protected AnimalData makeQuery(AnimalBreeds breed) {
            if (breed == AnimalBreeds.siberianHusky) {
                return new SiberianHuskyData();
            } else {
                return null;
            }
        }
    }

    public static void main(String[] args) {
        AnimalDatabase catDatabase = new CatDatabase();
        AnimalDatabase dogDatabase = new DogDatabase();

        System.out.println(catDatabase.searchByBreed(AnimalBreeds.siamese));
        System.out.println(catDatabase.searchByBreed(AnimalBreeds.maineCoon));
        System.out.println(dogDatabase.searchByBreed(AnimalBreeds.siberianHusky));
    }
}
