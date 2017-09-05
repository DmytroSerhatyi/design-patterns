using System;

class TemplateMethodPattern
{
    abstract class CatSchedule
    {
        protected string forName { get; }

        protected abstract void sleeping();

        public CatSchedule(string name)
        {
            forName = name;
        }

        public void makeSchedule()
        {
            walking();
            eating();
            sleeping();
        }

        protected void walking()
        {
            Console.WriteLine("{0} is walking.", forName);
        }

        protected void eating()
        {
            Console.WriteLine("{0} is eating.", forName);
        }
    }

    class SiameseSchedule : CatSchedule
    {
        public SiameseSchedule(string name) : base(name) { }

        protected override void sleeping()
        {
            Console.WriteLine("{0} is sleeping on the bed.", forName);
        }
    }

    class MaineCoonSchedule : CatSchedule
    {
        public MaineCoonSchedule(string name) : base(name) { }

        protected override void sleeping()
        {
            Console.WriteLine("{0} is sleeping on the armchair.", forName);
        }
    }

    static void Main(string[] args)
    {
        SiameseSchedule simbaSchedule = new SiameseSchedule("Simba");
        MaineCoonSchedule oscarSchedule = new MaineCoonSchedule("Oscar");

        simbaSchedule.makeSchedule();
        oscarSchedule.makeSchedule();
    }
}
