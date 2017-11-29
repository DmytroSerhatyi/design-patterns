public class InterpreterPattern {
    public static class Context {
        private String catInput;
        private String[] translation;

        public Context(String input) {
            catInput = input;

            String[] inputArr = input.split(" ");
            int length = inputArr.length;
            translation = new String[length];
        }

        public String getInput() {
            return catInput;
        }

        public void setTranslation(String translation, int index) {
            this.translation[index] = translation;
        }

        public String getTranslation() {
            return String.join(" ", translation);
        }
    }

    public static class Expression {
        private String catSound;
        private String word;

        public Expression(String sound, String word) {
            catSound = sound;
            this.word = word;
        }

        public void interpret(Context context) {
            String input = context.getInput();
            String[] dividedInput = input.toLowerCase().split(" ");

            for (int i = 0; i < dividedInput.length; i++) {
                String sound = dividedInput[i];

                if (catSound.equals(sound)) {
                    context.setTranslation(word, i);
                }
            }
        }
    }

    public static void main(String[] args) {
        Context context = new Context("Meow me meoow");
        Expression[] expressions = {
            new Expression("me", "am"),
            new Expression("meow", "I"),
            new Expression("meoow", "cat")
        };

        for (Expression e : expressions) {
            e.interpret(context);
        }

        String translation = String.format("\"%s\" = \"%s\"", context.getInput(), context.getTranslation());
        System.out.println(translation);
    }
}
