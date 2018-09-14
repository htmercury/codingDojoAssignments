using System;

namespace WizardNinjaSamurai {
    class Program {
        static void Main (string[] args) {
            System.Console.WriteLine("Starting...");
            Human man = new Human("man");
            Wizard wiz = new Wizard("wiz");
            Ninja ja = new Ninja("ja");
            Samurai rai = new Samurai("rai");
        }
    }
}