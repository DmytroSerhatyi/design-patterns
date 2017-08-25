public class CommandPattern {
    public static class Cat {
        private String name;

        public Cat(String name) {
            this.name = name;
        }
    
        public void sleep() {
            String result = String.format("%s is sleeping.", name);
            System.out.println(result);
        }
    
        public void walk() {
            String result = String.format("%s is walking.", name);
            System.out.println(result);
        }
    }
    
    public interface Command {
        public void execute();
        public void undo();
    }
    
    public static class CatSleepCommand implements Command {
        private Cat cat;
    
        public CatSleepCommand(Cat cat) {
            this.cat = cat;
        }
    
        public void execute() {
            cat.sleep();
        }
    
        public void undo() {
            cat.walk();
        }
    }
    
    public static class CatWalkCommand implements Command {
        private Cat cat;
    
        public CatWalkCommand(Cat cat) {
            this.cat = cat;
        }
    
        public void execute() {
            cat.walk();
        }
    
        public void undo() {
            cat.sleep();
        }
    }
    
    public static class CatCaretaker {
        private Command command;
    
        public void setCommand(Command command) {
            this.command = command;
        }
    
        public void manipulateCat() {
            command.execute();
        }
    
        public void manipulateCatBack() {
            command.undo();
        }
    }

    public static void main(String[] args) {
        Cat simba = new Cat("Simba");
        CatSleepCommand catSleep = new CatSleepCommand(simba);
        CatWalkCommand catWalk = new CatWalkCommand(simba);
        CatCaretaker catCaretaker = new CatCaretaker();
        
        catCaretaker.setCommand(catSleep);
        catCaretaker.manipulateCat();
        catCaretaker.manipulateCatBack();
        
        catCaretaker.setCommand(catWalk);
        catCaretaker.manipulateCat();
        catCaretaker.manipulateCatBack();
    }
}
