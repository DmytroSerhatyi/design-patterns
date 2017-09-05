using System;

class TemplateMethodPattern
{
    abstract class CatSchedule
    {
        protected string forName { get; }

        protected abstract void Sleeping();

        public CatSchedule(string name)
        {
            forName = name;
        }

        public void MakeSchedule()
        {
            Walking();
            Eating();
            Sleeping();
        }

        protected void Walking()
        {
            Console.WriteLine("{0} is walking.", forName);
        }

        protected void Eating()
        {
            Console.WriteLine("{0} is eating.", forName);
        }
    }

    class SiameseSchedule : CatSchedule
    {
        public SiameseSchedule(string name) : base(name) { }

        protected override void Sleeping()
        {
            Console.WriteLine("{0} is sleeping on the bed.", forName);
        }
    }

    class MaineCoonSchedule : CatSchedule
    {
        public MaineCoonSchedule(string name) : base(name) { }

        protected override void Sleeping()
        {
            Console.WriteLine("{0} is sleeping on the armchair.", forName);
        }
    }

    static void Main(string[] args)
    {
        SiameseSchedule simbaSchedule = new SiameseSchedule("Simba");
        MaineCoonSchedule oscarSchedule = new MaineCoonSchedule("Oscar");

        simbaSchedule.MakeSchedule();
        oscarSchedule.MakeSchedule();
    }
}
