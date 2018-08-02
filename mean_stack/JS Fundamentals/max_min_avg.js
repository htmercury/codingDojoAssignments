function maxMinAvg(arr) {
    var max = arr[0]
    var min = arr[0]
    var sum = arr[0]
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
        if (arr[i] < min) {
            min = arr[i]
        }
        sum += arr[i]
    }
    return `The minimum is ${min}, the maximum is ${max}, and the average is ${sum/arr.length}`
}