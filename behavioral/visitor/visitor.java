public class VisitorPattern {
    public static class Cat {
        private String name;
        private String breed;
        private String sound;

        public Cat(String name, String breed, String sound) {
            this.name = name;
            this.breed = breed;
            this.sound = sound;
        }

        public void accept(Visitor visitor) {
            visitor.visit(this);
        }

        public String getName() {
            return name;
        }

        public String getBreed() {
            return breed;
        }

        public String getSound() {
            return sound;
        }
    }

    public interface Visitor {
        public void visit(Cat cat);
    }

    public static class InfoVisitor implements Visitor {
        public void visit(Cat cat) {
            String result = String.format("%s cat %s.", cat.getBreed(), cat.getName());
            System.out.println(result);
        }
    }

    public static class SoundVisitor implements Visitor {
        public void visit(Cat cat) {
            String result = String.format("%s: \"%s\"", cat.getName(), cat.getSound());
            System.out.println(result);
        }
    }

    public static void main(String[] args) {
        Cat[] cats = {
            new Cat("Simba", "Siamese", "Meow-meow"),
            new Cat("Oscar", "Maine Coon", "Meoow")
        };

        Visitor infoVisitor = new InfoVisitor();
        Visitor soundVisitor = new SoundVisitor();

        for (Cat cat : cats) {
            cat.accept(infoVisitor);
            cat.accept(soundVisitor);
        }
    }
}
