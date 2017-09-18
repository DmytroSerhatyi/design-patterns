import java.util.ArrayList;

public class IteratorPattern {
    public static class Cat {
        private String name;
        private String breed;

        public Cat(String name, String breed) {
            this.name = name;
            this.breed = breed;
        }

        public String getDescripion() {
            return String.format("%s cat %s.", breed, name);
        }
    }

    public interface Iterator {
        public boolean hasNext();
        public Object next();
    }

    public static class CatGangIterator implements Iterator {
        private ArrayList<Cat> cats;
        private int position = 0;

        public CatGangIterator(ArrayList<Cat> cats) {
            this.cats = cats;
        }

        public boolean hasNext() {
            if (position >= cats.size()) {
                return false;
            } else {
                return true;
            }
        }

        public Object next() {
            Cat cat = cats.get(position);
            position += 1;
            return cat;
        }
    }

    public static class CatGang {
        private ArrayList<Cat> cats = new ArrayList<Cat>();

        public void addCat(Cat cat) {
            cats.add(cat);
        }

        public Iterator createIterator() {
            return new CatGangIterator(cats);
        }
    }

    public static void main(String[] args) {
        Cat simba = new Cat("Simba", "Siamese");
        Cat oscar = new Cat("Oscar", "Maine Coon");
        Cat oliver = new Cat("Oliver", "British Shorthair");

        CatGang catGang = new CatGang();
        catGang.addCat(simba);
        catGang.addCat(oscar);
        catGang.addCat(oliver);

        Iterator catGangIterator = catGang.createIterator();

        while (catGangIterator.hasNext()) {
            Cat cat = (Cat)catGangIterator.next();
            System.out.println(cat.getDescripion());
        }
    }
}
