using System;

namespace WizardNinjaSamurai {
    public class Ninja : Human {
        public Ninja(string name) : base(name)
        {
            dexterity = 175;
        }

        public void steal(Human other)
        {
            base.attack(other);
            health += 10;
        }

        public void get_away()
        {
            health -= 15;
        }
    }
}