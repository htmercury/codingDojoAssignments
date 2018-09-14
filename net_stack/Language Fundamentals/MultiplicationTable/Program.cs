using System;

namespace MultiplicationTable
{
    class Program
    {
        static void Main(string[] args)
        {
            int[,] Table = new int[10,10];
            for (int i = 0; i < 10; i++) {
                for (int j = 0; j < 10; j++) {
                    Table[i,j] = (i + 1) * (j + 1);
                }
            }
        }
    }
}
