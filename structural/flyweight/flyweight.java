public class FlyweightPattern {
    public static class Cat {
        public void showCatInfo(String name, String breed, int age) {
            String result = String.format("Cat info\nName: %s\nAge: %s\nBreed: %s\n\n", name, age, breed);
            System.out.println(result);
        }
    }

    public static void main(String[] args) {
        String[] catsNames = {"Simba", "Oscar", "Oliver"};
        String[] catsBreeds = {"Siamese", "Maine Coon", "British Shorthair"};
        int[] catsAges = {2, 3, 1};

        Cat cat = new Cat();

        for (int i = 0; i < catsNames.length; i++) {
            String name = catsNames[i];
            String breed = catsBreeds[i];
            int age = catsAges[i];

            cat.showCatInfo(name, breed, age);
        }
    }
}
