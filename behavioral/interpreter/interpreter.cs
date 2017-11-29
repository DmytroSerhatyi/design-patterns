using System;

class InterpreterPattern
{
    class Context
    {
        private string catInput { get; }
        private string[] translation { get; }

        public Context(string input)
        {
            catInput = input;

            string[] inputArr = input.Split();
            int length = inputArr.Length;
            translation = new string[length];
        }

        public string GetInput()
        {
            return catInput;
        }

        public void SetTranslation(string translation, int index)
        {
            this.translation[index] = translation;
        }

        public string GetTranslation()
        {
            return String.Join(" ", translation);
        }
    }

    class Expression
    {
        private string catSound { get; }
        private string word { get; }

        public Expression(string sound, string word)
        {
            catSound = sound;
            this.word = word;
        }

        public void Interpret(Context context)
        {
            string input = context.GetInput();
            string[] dividedInput = input.ToLower().Split();

            for (int i = 0; i < dividedInput.Length; i++)
            {
                string sound = dividedInput[i];

                if (catSound.Equals(sound))
                {
                    context.SetTranslation(word, i);
                }
            }
        }
    }

    static void Main(string[] args)
    {
        Context context = new Context("Meow me meoow");
        Expression[] expressions = {
            new Expression("me", "am"),
            new Expression("meow", "I"),
            new Expression("meoow", "cat")
        };

        foreach (Expression e in expressions)
        {
            e.Interpret(context);
        }

        Console.WriteLine("\"{0}\" = \"{1}\"", context.GetInput(), context.GetTranslation());
    }
}
