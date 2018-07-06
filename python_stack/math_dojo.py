import unittest

class Math_Dojo:
    def __init__(self):
        self.result = 0
    def add(self, *x):
        self.result += sum(x)
        return self
    def subtract(self, *x):
        self.result -= sum(x)
        return self


class Math_Dojo_Tests(unittest.TestCase):
    def setUp(self):
        # add the setUp tasks
        print("running setUp")
        self.md = Math_Dojo()
        
    def test_basic(self):
        x = self.md.add(2).add(2,5,1).subtract(3,2).result
        return self.assertEqual(x, 5)
    def test_1(self):
        x = self.md.subtract(3,2).result
        return self.assertEqual(x, -5)
    def test_2(self):
        x = self.md.add(2).add(0,1,1).add(3).result
        return self.assertEqual(x, 7)
    def test_3(self):
        x = self.md.add(0).subtract(0).result
        return self.assertEqual(x, 0)

if __name__ == "__main__":
    unittest.main()