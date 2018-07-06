// 1
function resetNegatives(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = 0;
        }
    }
    return arr;
}
// 2
function moveForward(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        arr[i] = arr[i+1];
    }
    arr[arr.length - 1] = 0;
    return arr;
}
// 3
function returnReversed(arr) {
    let result = [];
    for (let i = arr.length - 1; i >= 0; i--)
    {
        result.push(arr[i]);
    }
    return result;
}
// 4
function repeatTwice(arr) {
    let result = [];
    let acc;
    for (let i = 0; i < arr.length; i++) {
        acc = [arr[i], arr[i]];
        result = result.concat(acc);
    }
    return result;
}