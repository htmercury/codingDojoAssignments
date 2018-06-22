function get1To255() {
    let result = [];
    for (let i = 1; i <= 255; i++) {
        result.push(i);
    }
    return result;
}

function getEven1000() {
    let result = [];
    for (let i = 2; i <= 1000; i+=2) {
        result.push(i);
    }
    return result;
}

function sumOdd5000() {
    let sum = 0;
    for (let i = 1; i <= 5000; i+=2) {
        sum += i;
    }
    return sum;
}

function iterateAnArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

function findAverage(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum/arr.length;
}

function arrayOdd() {
    let result = [];
    for (let i = 1; i <= 50; i+=2) {
        result.push(i);
    }
    return result;
}

function greaterThanY(arr, Y) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > Y) {
            result++;
        }
    }
    return result;
}

function squares(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] *= arr[i];
    }
    return arr;
}

function negatives(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = 0;
        }
    }
    return arr;
}

function maxMinAvg(arr) {
    let max = arr[0];
    let min = arr[0];
    let sum = arr[0];
    let result = [];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
        sum += arr[i];
    }
    result.push(max);
    result.push(min);
    result.push(sum/arr.length);
    return result;
}

function swapValues(arr) {
    let temp = arr[0];
    arr[0] = arr[arr.length - 1];
    arr[arr.length - 1] = temp;
    return arr;
}

function numberToString(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = "Dojo";
        }
    }
    return arr;
}