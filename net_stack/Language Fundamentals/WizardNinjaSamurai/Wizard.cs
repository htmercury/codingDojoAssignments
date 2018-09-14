using System;

namespace WizardNinjaSamurai {
    public class Wizard : Human {
        public Wizard(string name) : base(name)
        {
            health = 50;
            intelligence = 25;
        }

        public void heal()
        {
            health += (10 * intelligence);
        }

        public void fireball(Human other)
        {
            Random rand = new Random();
            other.health -= rand.Next(20,51);
        }
    }
}