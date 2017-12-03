class MementoPattern
{
    class CatState
    {
        private string state { get; }
        private string thoughts { get; }

        public CatState(string state, string thoughts)
        {
            this.state = state;
            this.thoughts = thoughts;
        }

        public string GetState()
        {
            return state;
        }

        public string GetThoughts()
        {
            return thoughts;
        }
    }

    class Cat
    {
        private string name { get; }
        private CatState state { get; set; }

        public Cat(string name)
        {
            this.name = name;
        }

        public void UpdateState(string state, string thoughts)
        {
            this.state = new CatState(state, thoughts);
        }

        public void CheckState()
        {
            string state = this.state.GetState();
            string thoughts = this.state.GetThoughts();

            System.Console.WriteLine("{0} is {1} and thinking like: {2}", name, state, thoughts);
        }

        public CatState GetCurrentState()
        {
            return state;
        }

        public void RestoreState(CatState state)
        {
            this.state = state;
        }
    }

    static void Main(string[] args)
    {
        Cat cat = new Cat("Simba");
        cat.UpdateState("sleeping", "Zzz...");
        cat.CheckState();

        CatState savedState = cat.GetCurrentState();

        cat.UpdateState("walking", "Why don't I sleep?");
        cat.CheckState();

        cat.RestoreState(savedState);
        cat.CheckState();
    }    
}
