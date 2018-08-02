function fizzbuzz(n) {
    var result = "";
    for (var i = 1; i < n; i++) {
        if (i % 15 == 0) {
            result += "FizzBuzz, ";
        }
        else if (i % 3 == 0) {
            result += "Fizz, ";
        }
        else if (i % 5 == 0) {
            result += "Buzz, ";
        }
        else {
            result += (i + ", ");
        }
    }
    if (n % 15 == 0) {
        result += "FizzBuzz";
    }
    else if (n % 3 == 0) {
        result += "Fizz";
    }
    else if (n % 5 == 0) {
        result += "Buzz";
    }
    else {
        result += n
    }
    return result;
}