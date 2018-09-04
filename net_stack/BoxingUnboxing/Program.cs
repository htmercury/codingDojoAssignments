using System;
using System.Collections.Generic;

namespace BoxingUnboxing
{
    class Program
    {
        static void Main(string[] args)
        {
            List<object> BoxedData = new List<object>();
            BoxedData.Add(7);
            BoxedData.Add(28);
            BoxedData.Add(-1);
            BoxedData.Add(true);
            BoxedData.Add("chair");
            int Sum = 0;
            foreach (object Entry in BoxedData) {
                Console.WriteLine(Entry);
                if (Entry is int) {
                    Sum += (int)Entry;
                }
            }
            Console.WriteLine(Sum);
        }
    }
}
