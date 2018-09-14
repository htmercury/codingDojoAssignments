using System;
namespace Human {
    public class Human
    {
        public string name;
        public int strength, intelligence, dexterity, health;

        public Human(string n) {
            name = n;
            strength = intelligence = dexterity = 3;
            health = 100;
        }

        public Human(string n, int str, int intel, int dex, int hp) {
            name = n;
            strength = str;
            intelligence = intel;
            dexterity = dex;
            health = hp;
        }

        public void Attack(Human other) {
            int dmg = 5 * strength;
            Console.WriteLine($"{name} attacked {other.name} for {dmg} points.");
            other.health -= dmg;
        }
    }
}