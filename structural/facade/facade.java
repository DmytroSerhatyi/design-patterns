public class FacadePattern {
    public static class Cat {
        private String name;

        public Cat(String name) {
            this.name = name;
        }

        public void jumpUp(String barrier) {
            String result = String.format("%s is on top of %s!", name, barrier);
            System.out.println(result);
        }

        public void jumpDown(String barrier) {
            String result = String.format("%s jumped down from %s!", name, barrier);
            System.out.println(result);
        }
    }

    public static class CatJumpsOverBarrierFacade {
        private Cat cat;

        public CatJumpsOverBarrierFacade(Cat cat) {
            this.cat = cat;
        }

        public void jumpOverBarrier(String barrier) {
            cat.jumpUp(barrier);
            cat.jumpDown(barrier);
        }
    }

    public static void main(String[] args) {
        Cat cat = new Cat("Simba");
        CatJumpsOverBarrierFacade catJumpsOverBarrierFacade = new CatJumpsOverBarrierFacade(cat);

        catJumpsOverBarrierFacade.jumpOverBarrier("fence");
    }
}
