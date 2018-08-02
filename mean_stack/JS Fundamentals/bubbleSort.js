function bubbleSort(arr) {
    for (var i = 0; i < arr.length; i++) {
        var sorted = true;
        for (var j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                sorted = false;
            }
        }
        if (sorted) {
            break;
        }
    }
    return arr;
}
bubbleSort([123,13,5,3124,145,56,5,325,63,526])

// O(n)
function printArray(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

// O(n)
function findNth(arr, n) {
    console.log(arr[n]);
}

// O(log n)
function halving(n) {
    var count = 0;
    while (n > 1) {
        n = n / 2;
        count++;
    }
    return count;
}

// O(n^2)
function identityMatrix(n) {
    var matrix = [];
    for (var i = 0; i < n; i++) {
        var row = [];
        for (var j = 0; j < n; j++) {
            if (j == i) {
                row.push(1);
            }
            else {
                row.push(0);
            }
        }
        matrix.push(row);
    }
    return matrix;
}