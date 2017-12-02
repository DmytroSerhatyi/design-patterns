using System;

class MediatorPattern
{
    class Cat
    {
        private string name { get; }

        public Cat(string name)
        {
            this.name = name;
        }

        public void Walk()
        {
            Console.WriteLine("{0} is walking.", name);
        }

        public void Sleep()
        {
            Console.WriteLine("{0} is sleeping.", name);
        }
    }

    class Period
    {
        private bool day { get; set; } = false;
        private Mediator mediator { get; }

        public Period(Mediator mediator)
        {
            this.mediator = mediator;
        }

        public bool GetDay()
        {
            return day;
        }

        public void ChangeDay()
        {
            day = !day;
            string period = day ? "Day" : "Night";

            Console.WriteLine("{0} has come.", period);

            mediator.DayChanged(day);
        }
    }

    class Weather
    {
        private bool isRaining { get; set; } = false;
        private Mediator mediator { get; }

        public Weather(Mediator mediator)
        {
            this.mediator = mediator;
        }

        public bool GetWeather()
        {
            return isRaining;
        }

        public void ChangeWeather()
        {
            isRaining = !isRaining;
            string verb = "is";

            if (!isRaining)
            {
                verb += " not";
            }

            Console.WriteLine("It {0} raining.", verb);

            mediator.WeatherChanged(isRaining);
        }
    }

    class Mediator
    {
        private Cat cat { get; set; }
        private Period period { get; set; }
        private Weather weather { get; set; }

        public void SetCat(Cat cat)
        {
            this.cat = cat;
        }

        public void SetPeriod(Period period)
        {
            this.period = period;
        }

        public void SetWeather(Weather weather)
        {
            this.weather = weather;
        }

        public void DayChanged(bool day)
        {
            bool raining = weather.GetWeather();
            OperateCat(day, raining);
        }

        public void WeatherChanged(bool raining)
        {
            bool day = period.GetDay();
            OperateCat(day, raining);
        }

        private void OperateCat(bool day, bool raining)
        {
            if (day && !raining)
            {
                cat.Walk();
            }
            else
            {
                cat.Sleep();
            }
        }
    }

    static void Main(string[] args)
    {
        Cat simba = new Cat("Simba");
        Mediator mediator = new Mediator();
        Period period = new Period(mediator);
        Weather weather = new Weather(mediator);

        mediator.SetCat(simba);
        mediator.SetPeriod(period);
        mediator.SetWeather(weather);

        int iterations = 3;

        for (int i = 0; i < iterations; i++)
        {
            period.ChangeDay();

            int lastIteration = iterations - 1;
            if (i != lastIteration)
            {
                weather.ChangeWeather();
            }
        }
    }
}
