using System;
using System.Collections.Generic;

namespace CollectionsPractice
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] nums = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9};
            string[] names = {"Tim", "Martin", "Nikki", "Sara"};
            bool[] alt = new bool[10];
            bool input = true;
            for (int i = 0; i < alt.Length; i++) {
                alt[i] = input;
                input = !input;
            }
            
            List<string> flavors = new List<string>();
            flavors.Add("vanilla");
            flavors.Add("chocolate");
            flavors.Add("mint");
            flavors.Add("strawberry");
            flavors.Add("cake");
            Console.WriteLine(flavors.Count);
            Console.WriteLine(flavors[2]);
            flavors.Remove(flavors[2]);
            Console.WriteLine(flavors.Count);

            Dictionary<string,string> info = new Dictionary<string,string>();
            Random rand = new Random();
            for (int i = 0; i < names.Length; i++) {
                int idx = rand.Next(flavors.Count);
                info.Add(names[i], flavors[idx]);
            }
            foreach (KeyValuePair<string,string> entry in info) {
                Console.WriteLine(entry.Key + " - " + entry.Value);
            }
        }
    }
}
