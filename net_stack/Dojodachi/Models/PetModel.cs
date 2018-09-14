using System;

namespace Dojodachi.Models {
    public class PetModel {
        public int Fullness { get; set; }
        public int Happiness { get; set; }
        public int Meals { get; set; }
        public int Energy { get; set; }

        public string Feed () {
            Random rand = new Random ();
            if (Meals > 0) {
                Meals--;
                int result;
                if (rand.Next (0, 101) < 25) {
                    result = rand.Next (1, 6);
                    Fullness -= result;
                    return $"Your Dojodachi didn't like it! Fullness -{result}, Meal -1";
                } else {
                    result = rand.Next (5, 11);
                    Fullness += result;
                    return $"You fed your Dojodachi! Fullness +{result}, Meal -1";
                }
            }
            else {
                return "Not enough meals!";
            }
        }

        public string Play () {
            Random rand = new Random ();
            if (Energy > 0) {
                Energy -= 5;
                int result;
                if (rand.Next (0, 101) < 25) {
                    result = rand.Next (1, 6);
                    Happiness -= result;
                    return $"Your Dojodachi didn't like it! Happiness -{result}, Energy -5";
                } else {
                    result = rand.Next (5, 11);
                    Happiness += result;
                    return $"You played with your Dojodachi! Happiness +{result}, Energy -5";
                }
            }
            else {
                return "Not enough energy!";
            }
        }

        public string Work () {
            Random rand = new Random ();
            if (Energy > 0) {
                Energy -= 5;
                int result = rand.Next(1, 4);
                Meals += result;
                return $"You worked for your Dojodachi! Meals +{result}, Energy -5";
            }
            else {
                return "Not enough energy!";
            }
        }

        public string Sleep()
        {
            Energy += 15;
            Fullness -= 5;
            Happiness -= 5;
            return $"Your Dojodachi got some sleep! Energy +15, Happiness -5, Fullness -5";
        }

        public bool Win()
        {
            return Energy >= 100 && Fullness >= 100 && Happiness >= 100;
        }

        public bool Dead()
        {
            return Fullness <= 0 || Happiness <= 0;
        }
    }
}