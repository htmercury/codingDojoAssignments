function printAverage(x){
    let sum = 0;
    // your code here
    for (let i = 0; i < x.length; i++)
        sum+=x[i];
    return sum/x.length;
 }
 y = printAverage([1,2,3]);
 console.log(y); // should log 2
   
 y = printAverage([2,5,8]);
 console.log(y); // should log 5

function returnOddArray(){
    let result = [];
    for (let i = 1; i <= 255; i++)
        if (i % 2 != 0)
            result.push(i);
    return result;
 }
 y = returnOddArray();
 console.log(y); // should log [1,3,5,...,253,255]

function squareValue(x){
    for (let i = 0; i < x.length; i++)
        x[i] *= x[i];
    return x;
 }
 y = squareValue([1,2,3]);
 console.log(y); // should log [1,4,9]
   
 y = squareValue([2,5,8]);
 console.log(y); // should log [4,25,64]