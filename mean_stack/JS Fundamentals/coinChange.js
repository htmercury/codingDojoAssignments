function coinChange(n) {
    var dollars = Math.floor(n/100);
    n = n%100;
    var quarters = Math.floor(n/25);
    n = n%25;
    var dimes = Math.floor(n/10);
    n = n%10;
    var nickels = Math.floor(n/5);
    n = n%5;
    var pennies = n;
    var result = {
        "dollars": dollars,
        "quarters": quarters,
        "dimes": dimes,
        "nickels": nickels,
        "pennies": pennies
    }
    return result;
}

coinChange(312);
coinChange(78);