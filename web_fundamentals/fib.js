function fib(n, i, fibArr)
{
    i = i || 0;
    fibArr = fibArr || [1,1];
    if (n == 1) {
        return [1];
    }
    else if (n == 0) {
        return [];
    }
    if (i < n - 2) {
        fibArr.push(fibbArr[i] + fibArr[i+1]);
        fib(n, i++, fibArr);
    }
    
    return fibArr;
}