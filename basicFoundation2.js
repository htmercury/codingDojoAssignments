function biggieSize(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            arr[i] = "big";
        }
    }
    return arr;
}

function printLowReturnHigh(arr) {
    let max = arr[0];
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    console.log(min);
    return max;
}

function printOneReturnAnother(arr) {
    let firstOdd;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]%2 != 0) {
            firstOdd = arr[i];
            break;
        }
    }
    console.log(arr[arr.length - 2]);
    return firstOdd;
}

function doubleVision(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) { 
        result = arr[i] * 2;
    }
    return result;
}

function countPositives(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) { 
        if (arr[i] > 0) {
            count++;
        }
    }
    arr[arr.length - 1] = count;
    return arr;
}

function evensAndOdds(arr) {
    for (let i = 0; i < arr.length - 2; i++) {
        if (arr[i]%2 != 0 && arr[i+1]%2 != 0 && arr[i+2]%2 != 0) {
            console.log("That's odd!");
            i = i + 3;
        }
        if (arr[i]%2 == 0 && arr[i+1]%2 == 0 && arr[i+2]%2 == 0) {
            console.log("Even more so!");
            i = i + 3;
        }
     }
}

function incrementTheSeconds(arr) {
    for (let i = 1; i < arr.length; i+=2) {
        arr[i]++;
    }
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
    return arr;
}

function previousLengths(arr) {
    for (let i = 1; i < arr.length; i++) {
        arr[i] = arr[i - 1].length;
    }
    return arr;
}

function addSevenToMost(arr) {
    let result = arr;
    for (let i = 1; i < arr.length; i++) {
        result[i] += 7;
    }
    return result;
}

function reverseArray(arr) {
    let temp;
    let i = 0;
    let j = arr.length - 1;
    while (i < j) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
}

function outlookNegative(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            arr[i] *= -1;
        }
    }
    return arr;
}

function alwaysHungry(arr) {
    let hungry = true;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == "food") {
            hungry = false;
            console.log("yummy");
        }
    }
    if (hungry) {
        console.log("I'm hungry");
    }
}

function swapTowardTheCenter(arr) {
    let temp = arr[0];
    arr[0] = arr[arr.length - 1];
    arr[arr.length - 1] = temp;
    temp = arr[2];
    arr[2] = arr[arr.length - 3];
    arr[arr.length - 3] = temp;
    return arr;
}

function scaleTheArray(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] *= num;
    }
    return arr;
}