def biggie_size(arr):
    for i in range(len(arr)):
        if arr[i] > 0:
            arr[i] = "big"
    return arr

def count_positives(arr):
    count = 0
    for i in range(len(arr)):
       if arr[i] > 0:
           count += 1
    arr[-1] = count
    return arr

def sum_total(arr):
    sum = 0
    for obj in arr:
        sum += obj
    return sum

def avg(arr):
    sum = 0
    for obj in arr:
        sum += obj
    return sum/len(arr)

def length(arr):
    len = 0
    for obj in arr:
        len += 1
    return len

def min(arr):
    result = arr[0]
    for i in range(1, len(arr)):
        if arr[i] < min:
            min = arr[i]
    return result

def max(arr):
    result = arr[0]
    for i in range(1, len(arr)):
        if arr[i] > max:
            max = arr[i]
    return result

def ultimate_analyze(arr):
    min = arr[
        0]
    max = arr[0]
    sum = arr[0]
    for i in range(1, len(arr)):
        if arr[i] < min:
            min = arr[i]
        if arr[i] > max:
            max = arr[i]
        sum += arr[i]
    result = {
        "sumTotal":sum,
        "average":sum/len(arr),
        "minimum":min,
        "maximum":max
    }
    return result

def reverse_list(arr):
    i = 0
    j = len(arr) - 1
    while (i < j):
        temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
        j -= 1
        i += 1
    return arr
