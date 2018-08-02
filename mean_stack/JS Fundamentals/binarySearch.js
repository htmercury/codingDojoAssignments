function binarySearch(arr, val) {
    var i = 0;
    var j = arr.length - 1;
    while (i <= j) {
        var pivot = Math.floor((i + j) / 2);
        if (val > arr[pivot]) {
            i = pivot + 1;
        }
        else if (val < arr[pivot]) {
            j = pivot - 1;
        }
        else {
            return pivot;
        }
        console.log('values:',i,j)
    }
    return -1;
}

binarySearch([1, 3, 8, 10, 12, 15, 17, 20, 22, 34, 38, 40, 50, 52, 78, 87, 90, 91, 92, 94, 200], 93);

binarySearch([1, 3, 8, 10, 12, 15, 17, 20, 22, 34, 38, 40, 50, 52, 78, 87, 90, 91, 92, 94], 15);