def countdown(num):
    result = []
    while num >= 0:
        result.append(num)
        num -= 1
    return result

def print_and_return(arr):
    print(arr[0])
    return arr[1]

def first_plus_length(arr):
    return arr[0] + len(arr)

def val_greater_than_second(arr):
    if (len(arr) < 2):
        return False
    result = []
    for obj in arr:
        if obj > arr[1]:
            result.append(obj)
    print(len(result))
    return result

def length_and_value(size, value):
    result = []
    for x in range(size):
        result.append(value)
    return result