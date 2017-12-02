public class MediatorPattern {
    public static class Cat {
        private String name;

        public Cat(String name) {
            this.name = name;
        }

        public void walk() {
            String result = String.format("%s is walking.", name);
            System.out.println(result);
        }

        public void sleep() {
            String result = String.format("%s is sleeping.", name);
            System.out.println(result);
        }
    }

    public static class Period {
        private boolean day = false;
        private Mediator mediator;

        public Period(Mediator mediator) {
            this.mediator = mediator;
        }

        public boolean getDay() {
            return day;
        }

        public void changeDay() {
            day = !day;
            String period = day ? "Day" : "Night";

            String result = String.format("%s has come.", period);
            System.out.println(result);

            mediator.dayChanged(day);
        }
    }

    public static class Weather {
        private boolean isRaining = false;
        private Mediator mediator;

        public Weather(Mediator mediator) {
            this.mediator = mediator;
        }

        public boolean getWeather() {
            return isRaining;
        }

        public void changeWeather() {
            isRaining = !isRaining;
            String verb = "is";

            if (!isRaining) {
                verb += " not";
            }

            String result = String.format("It %s raining.", verb);
            System.out.println(result);

            mediator.weatherChanged(isRaining);
        }
    }

    public static class Mediator {
        private Cat cat;
        private Period period;
        private Weather weather;

        public void setCat(Cat cat) {
            this.cat = cat;
        }

        public void setPeriod(Period period) {
            this.period = period;
        }

        public void setWeather(Weather weather) {
            this.weather = weather;
        }

        public void dayChanged(boolean day) {
            boolean raining = weather.getWeather();
            operateCat(day, raining);
        }

        public void weatherChanged(boolean raining) {
            boolean day = period.getDay();
            operateCat(day, raining);
        }

        private void operateCat(boolean day, boolean raining) {
            if (day && !raining) {
                cat.walk();
            } else {
                cat.sleep();
            }
        }
    }

    public static void main(String[] args) {
        Cat simba = new Cat("Simba");
        Mediator mediator = new Mediator();
        Period period = new Period(mediator);
        Weather weather = new Weather(mediator);

        mediator.setCat(simba);
        mediator.setPeriod(period);
        mediator.setWeather(weather);

        int iterations = 3;

        for (int i = 0; i < iterations; i++) {
            period.changeDay();

            int lastIteration = iterations - 1;
            if (i != lastIteration) {
                weather.changeWeather();
            }
        }
    }
}
