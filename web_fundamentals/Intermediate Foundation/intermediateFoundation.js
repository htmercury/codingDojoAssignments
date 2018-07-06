function sigma(num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        sum+=i;
    }
    return sum;
}

function factorial(num) {
    let product = 1;
    for (let i = 1; i <= num; i++) {
        product*=i;
    }
    return product;
}

function fibonacci(num) {
    let result = [0, 1];
    for (let i = 2; i <= num; i++) {
        result[i] = result[i-2] + result[i-1];
    }
    return result[num];
}

function secondToLast(arr) {
    if (arr.length < 2) {
        return null;
    }
    return arr[arr.length - 2];
}

function nthToLast(arr, n) {
    if (arr.length < n) {
        return null;
    }
    return arr[arr.length - n];
}

function secondLargest(arr) {
    if (arr.length < 2) {
        return null;
    }
    let largest = arr[0];
    let secondLargest;
    for (let i = 1; i < arr.length; i++)
    {
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        }
        else if (secondLargest == null || secondLargest < arr[i]) {
            secondLargest = arr[i];
        }
    }
    return secondLargest;
}

function doubleTrouble(arr) {
    let result = [];
    let acc;
    for (let i = 0; i < arr.length; i++) {
        acc = [arr[i], arr[i]];
        result = result.concat(acc);
    }
    return result;
}

function fib(n) {
    if (n == 0) {
        return 0;
    }
    if (n == 1) {
        return 1;
    }
    if (n == 2) {
        return 1;
    }
    return fib(n-2) + fib(n-1);
}