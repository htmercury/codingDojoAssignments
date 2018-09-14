using System;

namespace WizardNinjaSamurai {
    public class Samurai : Human {
        public static int instances = 0;
        public Samurai(string name) : base(name) {
            health = 200;
            instances++;
        }

        public void death_blow(Human other)
        {
            base.attack(other);
            if (other.health < 50) {
                other.health = 0;
            }
        }

        public void meditate()
        {
            health = 200;
        }

        public static int how_many()
        {
            return instances;
        }
    }
}