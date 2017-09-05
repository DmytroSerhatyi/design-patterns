public class TemplateMethodPattern {
    public static abstract class CatSchedule {
        protected String forName;

        protected abstract void sleeping();

        public CatSchedule(String name) {
            forName = name;
        }

        public void makeSchedule() {
            walking();
            eating();
            sleeping();
        }

        protected void walking() {
            String result = String.format("%s is walking.", forName);
            System.out.println(result);
        }

        protected void eating() {
            String result = String.format("%s is eating.", forName);
            System.out.println(result);
        }
    }

    public static class SiameseSchedule extends CatSchedule {
        public SiameseSchedule(String name) {
            super(name);
        }

        protected void sleeping() {
            String result = String.format("%s is sleeping on the bed.", forName);
            System.out.println(result);
        }
    }

    public static class MaineCoonSchedule extends CatSchedule {
        public MaineCoonSchedule(String name) {
            super(name);
        }

        protected void sleeping() {
            String result = String.format("%s is sleeping on the armchair.", forName);
            System.out.println(result);
        }
    }

    public static void main(String[] args) {
        SiameseSchedule simbaSchedule = new SiameseSchedule("Simba");
        MaineCoonSchedule oscarSchedule = new MaineCoonSchedule("Oscar");

        simbaSchedule.makeSchedule();
        oscarSchedule.makeSchedule();
    }
}
