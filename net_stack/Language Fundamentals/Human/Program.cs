using System;

namespace Human
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Starting program!");
            Human FirstOne = new Human("Ham");
            Human SecondOne = new Human("Sam");
            FirstOne.Attack(SecondOne);
        }
    }
}
