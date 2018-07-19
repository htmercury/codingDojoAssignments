def basic():
    for x in range(0, 151):
        print(x)

def mult_of_five():
    x = 5
    while x < 1000000:
        print(x)
        x += 5

def count_dojo_way():
    for x in range (1, 101):
        print(x)
        if x%5 == 0:
            print("Coding")
        if x%10 == 0:
            print("Dojo")

def whoa_huge():
    sum = 0
    x = 1
    while x <= 500000:
        sum += x
        x += 2
    print(sum)

def countdown_by_four():
    x = 2018
    while x > 0:
        print(x)
        x -= 4
    
def flex_countdown(low_num, high_num, mult):
    for x in range(low_num, high_num + 1):
        if x%mult == 0:
            print(x)