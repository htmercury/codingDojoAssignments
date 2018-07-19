def selection_sort(arr):
    for i in range(len(arr)):
        curr_min = i
        for j in range(i, len(arr)):
            if arr[curr_min] > arr[j]:
                curr_min = j
        arr[i],arr[curr_min]=arr[curr_min],arr[i]
    return arr