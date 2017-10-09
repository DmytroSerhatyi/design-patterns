using System;

class CommandPattern
{
    class Cat
    {
        private string name { get; }

        public Cat(string name)
        {
            this.name = name;
        }
    
        public void Sleep()
        {
            Console.WriteLine("{0} is sleeping.", name);
        }
    
        public void Walk()
        {
            Console.WriteLine("{0} is walking.", name);
        }
    }
    
    interface Command
    {
        void Execute();
        void Undo();
    }
    
    class CatSleepCommand : Command
    {
        private Cat cat { get; }
    
        public CatSleepCommand(Cat cat)
        {
            this.cat = cat;
        }
    
        public void Execute()
        {
            cat.Sleep();
        }
    
        public void Undo()
        {
            cat.Walk();
        }
    }
    
    class CatWalkCommand : Command
    {
        private Cat cat { get; }
    
        public CatWalkCommand(Cat cat)
        {
            this.cat = cat;
        }
    
        public void Execute()
        {
            cat.Walk();
        }
    
        public void Undo()
        {
            cat.Sleep();
        }
    }
    
    class CatCaretaker
    {
        private Command command { get; set; }
    
        public void SetCommand(Command command)
        {
            this.command = command;
        }
    
        public void ManipulateCat()
        {
            command.Execute();
        }
    
        public void ManipulateCatBack()
        {
            command.Undo();
        }
    }

    static void Main(string[] args)
    {
        Cat simba = new Cat("Simba");
        CatSleepCommand catSleep = new CatSleepCommand(simba);
        CatWalkCommand catWalk = new CatWalkCommand(simba);
        CatCaretaker catCaretaker = new CatCaretaker();
        
        catCaretaker.SetCommand(catSleep);
        catCaretaker.ManipulateCat();
        catCaretaker.ManipulateCatBack();
        
        catCaretaker.SetCommand(catWalk);
        catCaretaker.ManipulateCat();
        catCaretaker.ManipulateCatBack();
    }
}
