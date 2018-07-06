// 1
function returnArrayCounterGreaterThanY(arr, Y) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > Y)
            count++;
    }
    return count;
}

// 2
function printMinMaxAverageArrayVals(arr) {
    let max = arr[0];
    let min = arr[0];
    let sum = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max)
            max = arr[i];
        if (arr[i] < min)
            min = arr[i];
        sum += arr[i];
    }
    let avg = sum/arr.length;
    console.log(min);
    console.log(max);
    console.log(avg);
}

// 3
function swapStringForArrayNegativeVals(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0)
            arr[i] = "Dojo";
    }
    return arr;
}

// 4
function removeVals(arr, start, end) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (i < start || i > end)
            result.push(arr[i]);
    }
    return result;
}