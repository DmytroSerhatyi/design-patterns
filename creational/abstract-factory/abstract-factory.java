public class AbstractFactoryPattern {
    public interface Breed {
        String getBreed();
    }

    public static class Siamese implements Breed {
        public String getBreed() {
            return "Siamese";
        }
    }

    public static class MaineCoon implements Breed {
        public String getBreed() {
            return "Maine Coon";
        }
    }

    public static class Alabai implements Breed {
        public String getBreed() {
            return "Alabai";
        }
    }

    public static class Retriever implements Breed {
        public String getBreed() {
            return "Retriever";
        }
    }

    public interface Origin {
        String getOrigin();
    }

    public static class Thailand implements Origin {
        public String getOrigin() {
            return "Thailand";
        }
    }

    public static class Maine implements Origin {
        public String getOrigin() {
            return "Maine, United States of America";
        }
    }

    public static class Kazakhstan implements Origin {
        public String getOrigin() {
            return "Kazakhstan";
        }
    }

    public static class Canada implements Origin {
        public String getOrigin() {
            return "Canada";
        }
    }

    public interface QueryComponentsFactory {
        Breed setCatBreed();
        Origin setCatOrigin();
        Breed setDogBreed();
        Origin setDogOrigin();
    }

    public static class AsianComponentsFactory implements QueryComponentsFactory {
        public Breed setCatBreed() {
            return new Siamese();
        }

        public Origin setCatOrigin() {
            return new Thailand();
        }

        public Breed setDogBreed() {
            return new Alabai();
        }

        public Origin setDogOrigin() {
            return new Kazakhstan();
        }
    }

    public static class AmericanComponentsFactory implements QueryComponentsFactory {
        public Breed setCatBreed() {
            return new MaineCoon();
        }

        public Origin setCatOrigin() {
            return new Maine();
        }

        public Breed setDogBreed() {
            return new Retriever();
        }

        public Origin setDogOrigin() {
            return new Canada();
        }
    }

    public static abstract class AnimalQuery {
        protected String species;
        protected Breed breed;
        protected Origin origin;
        protected QueryComponentsFactory componentsFactory;

        public AnimalQuery(QueryComponentsFactory componentsFactory) {
            this.componentsFactory = componentsFactory;
        }

        public abstract void composeQuery();

        public void showDescription() {
            String description = String.format("%s is a %s breed from %s.", breed.getBreed(), species, origin.getOrigin());
            System.out.println(description);
        }
    }

    public static class CatQuery extends AnimalQuery {
        public CatQuery(QueryComponentsFactory componentsFactory) {
            super(componentsFactory);
            species = "cat";
        }

        public void composeQuery() {
            breed = componentsFactory.setCatBreed();
            origin = componentsFactory.setCatOrigin();
        }
    }

    public static class DogQuery extends AnimalQuery {
        public DogQuery(QueryComponentsFactory componentsFactory) {
            super(componentsFactory);
            species = "dog";
        }

        public void composeQuery() {
            breed = componentsFactory.setDogBreed();
            origin = componentsFactory.setDogOrigin();
        }
    }

    public static void fulfillQuery(AnimalQuery query) {
        query.composeQuery();
        query.showDescription();
    }

    public static void main(String[] args) {
        QueryComponentsFactory americanComponentsFactory = new AmericanComponentsFactory();
        QueryComponentsFactory asianComponentsFactory = new AsianComponentsFactory();

        AnimalQuery siameseQuery = new CatQuery(asianComponentsFactory);
        fulfillQuery(siameseQuery);

        AnimalQuery maineCoonQuery = new CatQuery(americanComponentsFactory);
        fulfillQuery(maineCoonQuery);

        AnimalQuery alabaiQuery = new DogQuery(asianComponentsFactory);
        fulfillQuery(alabaiQuery);

        AnimalQuery retrieverQuery = new DogQuery(americanComponentsFactory);
        fulfillQuery(retrieverQuery);
    }
}
