using System;
using System.Collections.Generic;

namespace Basic13
{
    class Program
    {
        static void Print255() {
            for (int i = 1; i <= 255; i++) {
                Console.WriteLine(i);
            }
        }

        static void PrintOdd255() {
            for (int i = 1; i <= 255; i+=2) {
                Console.WriteLine(i);
            }
        }

        static void PrintSum255() {
            int Sum = 0;
            for (int i = 1; i <= 255; i+=2) {
                Sum += i;
                Console.WriteLine($"New Number:{i} Sum:{Sum}");
            }
        }

        static void IterArray(int[] arr) {
            for (int i = 0; i < arr.Length; i++) {
                Console.WriteLine(arr[i]);
            }
        }

        static void FindMax(int[] arr) {
            int Max = arr[0];
            for (int i = 1; i < arr.Length; i++) {
                if (Max < arr[i]) {
                    Max = arr[i];
                }
            }
            Console.WriteLine(Max);
        }

        static void FindAvg(int[] arr) {
            int Sum = 0;
            for (int i = 0; i < arr.Length; i++) {
                Sum += arr[i];
            }
            Console.WriteLine(Sum/arr.Length);
        }

        static void OddArr() {
            List<int> y = new List<int>();
            for (int i = 1; i <= 255; i+=2) {
                y.Add(i);
            }
            Console.WriteLine(y);
        }

        static void GreaterY(int[] arr, int y) {
            int Num = 0;
            for (int i = 0; i < arr.Length; i++) {
                if (arr[i] > y) {
                    Num++;
                }
            }
            Console.WriteLine(Num);
        }

        static void SquareVal(int[] arr) {
            for (int i = 0; i < arr.Length; i++) {
                arr[i] *= arr[i];
            }
            Console.WriteLine(arr);
        }

        static void NoNeg(int[] arr) {
            for (int i = 0; i < arr.Length; i++) {
                if (arr[i] < 0) {
                    arr[i] = 0;
                }
            }
            Console.WriteLine(arr);
        }

        static void MinMaxAvg(int[] arr) {
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
            Console.WriteLine($"Max: {Max} Min: {Min} Avg: {Sum/arr.Length}");
        }

        static void ShiftArr(int[] arr) {
            for (int i = 0; i < arr.Length - 1; i++) {
                arr[i] = arr[i+1];
            }
            arr[arr.Length - 1] = 0;
            Console.WriteLine(arr);
        }

        static void NumToStr(object[] arr) {
            for (int i = 0; i < arr.Length; i++) {
                if ((int)arr[i] < 0) {
                    arr[i] = "Dojo";
                }
            }
            Console.WriteLine(arr);
        }
        


        static void Main(string[] args)
        {
            Print255();
            PrintOdd255();
            PrintSum255();
            IterArray(new int[] {1, 3, 5, 7, 9, 13});
            FindMax(new int[] {-3, -5, -7});
            FindAvg(new int[] {2, 10, 3});
            OddArr();
            GreaterY(new int[] {1, 3, 5, 7}, 3);
            SquareVal(new int[] {1, 5, 10, -2});
            NoNeg(new int[] {1, 5, 10, -2});
            MinMaxAvg(new int[] {1, 5, 10, -2});
            ShiftArr(new int[] {1, 5, 10, 7, -2});
            NumToStr(new object[] {-1, -3, 2});
        }
    }
}
