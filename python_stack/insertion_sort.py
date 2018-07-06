def insertion_sort(arr):
    for i in range(len(arr)):
        for j in range(i):
            if arr[j] > arr[i]:
                arr[j], arr[i] = arr[i], arr[j]
    return arr