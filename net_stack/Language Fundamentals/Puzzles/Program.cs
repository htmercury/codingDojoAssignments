using System;
using System.Collections.Generic;

namespace Puzzles
{
    class Program
    {   
        static void RandomArray() {
            Random rand = new Random();
            int[] result = new int[10];
            for (int i = 0; i < result.Length; i++) {
                result[i] = rand.Next(5,26);
            }
            MinMaxSum(result);
        }

        static void MinMaxSum(int[] arr) {
            int Max, Min, Sum;
            Max = Min = Sum = arr[0];
            for (int i = 1; i < arr.Length; i++) {
                Sum += arr[i];
                if (arr[i] > Max) {
                    Max = arr[i];
                }
                if (arr[i] < Min) {
                    Min = arr[i];
                }
            }
            Console.WriteLine($"Max: {Max} Min: {Min} Sum: {Sum}");
        }

        static bool TossCoin() {
            Console.WriteLine("Tossing a Coin!");
            Random rand = new Random();
            int result = rand.Next(100);
            if (result > 50) {
                Console.WriteLine("Heads");
                return true;
            }
            else {
                Console.WriteLine("Tails");
                return false;
            }
        }

        static void TossMultipleCoins(int num) {
            int heads = 0;
            int tails = 0;
            for (int i = 0; i < num; i++) {
                if (TossCoin()) {
                    heads++;
                }
                else {
                    tails++;
                }
            }
            double result = heads/tails;
            Console.WriteLine(result);
        }

        static void Shuffle(object[] array) {
            Random rand = new Random();
            int n = array.Length;
            for (int i = 0; i < n; i++) {
                int r = i + rand.Next(n - i);
                object t = array[r];
                array[r] = array[i];
                array[i] = t;
            }
        }

        static void Names() {
            string[] names = {"Todd", "Tiffany", "Charlie", "Geneva", "Sydney"};
            Shuffle(names);
            Console.WriteLine(names);
            List<string> longNames = new List<string>();
            for (int i = 0; i < names.Length; i++) {
                if (names[i].Length > 5) {
                    longNames.Add(names[i]);
                }
            }
            Console.WriteLine(longNames);
        }

        static void Main(string[] args)
        {
            RandomArray();
            TossCoin();
            TossMultipleCoins(3);
            Names();
        }
    }
}
