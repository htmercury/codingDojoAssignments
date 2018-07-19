import unittest

def reverse_list(li):
    i = 0
    j = len(li) - 1
    while i < j:
        li[i], li[j] = li[j], li[i]
        i += 1
        j -= 1
    return li

def is_palindrome(s):
    s = s.lower()
    if len(s) == 0:
        return True
    i = 0
    j = len(s) - 1
    while i < j:
        if s[i] != s[j]:
            return False
        i += 1
        j -= 1
    return True

def coins(c):
    q = int(c/25)
    c = c%25
    d = int(c/10)
    c = c%10
    n = int(c/5)
    c = c%5
    p = c
    return [q,d,n,p]

def factorial(num):
    if num == 0:
        return 1
    return num * factorial(num - 1)

def fib(num):
    if num == 0:
        return 0
    if num == 1:
        return 1
    return fib(num - 2) + fib(num - 1)

class Reverse_Tests(unittest.TestCase):
    def test_0(self):
        return self.assertEqual(reverse_list([]), [])
    def test_1(self):
        return self.assertEqual(reverse_list([1,3,5]), [5,3,1])
    def test_2(self):
        return self.assertEqual(reverse_list([2,4,-3]), [-3,4,2])
class Palindrome_Tests(unittest.TestCase):
    def test_0(self):
        return self.assertEqual(is_palindrome(''), True)
    def test_1(self):
       return self.assertEqual(is_palindrome("racecar"), True)
    def test_2(self):
       return self.assertEqual(is_palindrome("rabbit"), False)
    def test_3(self):
       return self.assertEqual(is_palindrome("tacocat"), True)
    def test_4(self):
       return self.assertEqual(is_palindrome("akA"), True)
class Coins_Tests(unittest.TestCase):
    def test_0(self):
        return self.assertEqual(coins(0), [0,0,0,0])
    def test_1(self):
        return self.assertEqual(coins(87), [3,1,0,2])
    def test_2(self):
        return self.assertEqual(coins(92), [3,1,1,2])
    def test_3(self):
        return self.assertEqual(coins(3), [0,0,0,3])
    def test_4(self):
        return self.assertEqual(coins(5), [0,0,1,0])
class Factorial_Tests(unittest.TestCase):
    def test_0(self):
        return self.assertEqual(factorial(0), 1)
    def test_1(self):
        return self.assertEqual(factorial(1), 1)
    def test_2(self):
        return self.assertEqual(factorial(2), 2)
    def test_3(self):
        return self.assertEqual(factorial(4), 24)
    def test_4(self):
        return self.assertEqual(factorial(6), 720)
class Fib_Tests(unittest.TestCase):
    def test_0(self):
        return self.assertEqual(fib(0), 0)
    def test_1(self):
        return self.assertEqual(fib(1), 1)
    def test_2(self):
        return self.assertEqual(fib(2), 1)
    def test_3(self):
        return self.assertEqual(fib(4), 3)
    def test_4(self):
        return self.assertEqual(fib(6), 8)
if __name__ == "__main__":
    unittest.main()