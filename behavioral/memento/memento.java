public class MementoPattern {
    public static class CatState {
        private String state;
        private String thoughts;

        public CatState(String state, String thoughts) {
            this.state = state;
            this.thoughts = thoughts;
        }

        public String getState() {
            return state;
        }

        public String getThoughts() {
            return thoughts;
        }
    }

    public static class Cat {
        private String name;
        private CatState state;

        public Cat(String name) {
            this.name = name;
        }

        public void updateState(String state, String thoughts) {
            this.state = new CatState(state, thoughts);
        }

        public void checkState() {
            String state = this.state.getState();
            String thoughts = this.state.getThoughts();

            String result = String.format("%s is %s and thinking like: %s", name, state, thoughts);
            System.out.println(result);
        }

        public CatState getCurrentState() {
            return state;
        }

        public void restoreState(CatState state) {
            this.state = state;
        }
    }

    public static void main(String[] args) {
        Cat cat = new Cat("Simba");
        cat.updateState("sleeping", "Zzz...");
        cat.checkState();

        CatState savedState = cat.getCurrentState();

        cat.updateState("walking", "Why don't I sleep?");
        cat.checkState();

        cat.restoreState(savedState);
        cat.checkState();
    }    
}
