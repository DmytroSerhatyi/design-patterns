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
    
        public void sleep()
        {
            Console.WriteLine("{0} is sleeping.", name);
        }
    
        public void walk()
        {
            Console.WriteLine("{0} is walking.", name);
        }
    }
    
    interface Command
    {
        void execute();
        void undo();
    }
    
    class CatSleepCommand : Command
    {
        private Cat cat { get; }
    
        public CatSleepCommand(Cat cat)
        {
            this.cat = cat;
        }
    
        public void execute()
        {
            cat.sleep();
        }
    
        public void undo()
        {
            cat.walk();
        }
    }
    
    class CatWalkCommand : Command
    {
        private Cat cat { get; }
    
        public CatWalkCommand(Cat cat)
        {
            this.cat = cat;
        }
    
        public void execute()
        {
            cat.walk();
        }
    
        public void undo()
        {
            cat.sleep();
        }
    }
    
    class CatCaretaker
    {
        private Command command { get; set; }
    
        public void setCommand(Command command)
        {
            this.command = command;
        }
    
        public void manipulateCat()
        {
            command.execute();
        }
    
        public void manipulateCatBack()
        {
            command.undo();
        }
    }

    public static void Main(string[] args)
    {
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
