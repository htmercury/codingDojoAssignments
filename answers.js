// Setting and Swapping
let myNumber = 42;
let myName = "Ka";
let temp = myName;
myName = myNumber;
myNumber = temp;

// Print -52 to 1066
for(let i = -52; i <= 1066; i++)
{
    console.log(i);
}

// Don't Worry, Be Happy
function beCheerful() {
    console.log("good morning!");
}
for(let i = 0; i < 98; i++)
{
    beCheerful();
}

// Multiples of Three -- but Not All
for (let i = -300; i <= 0; i+=3)
{
    if (i == -3 || i == -6)
        continue;
    else
        console.log(i);
}

// Printing Integers with While
let i = 2000;
while (i <= 5280)
{
    console.log(i);
    i++;
}

// You Say It's Your Birthday
function birthday(input)
{
    if (input == 9 || input == 20)
        console.log("How did you know?");
    else
        console.log("Just another day...");
}

// Leap Year
function leapYear(year)
{
    if (year%4 == 0)
        return true;
    else
        return false;
}

// Print and Count
for (let i = 512; i <= 4096; i++)
{
    if (i%5 == 0)
        console.log(i);
}

// Multiples of Six
let j = 0;
while (j <= 60000)
{
    console.log(j);
    j += 6;
}

// Counting, the Dojo Way
for (let i = 1; i <= 100; i++)
{
    if (i%5 == 0)
    {
        console.log("Coding");
        if (i%10 == 0)
            console.log(" Dojo");
    }
}

// What Do You Know?
function whatDoYouKnow(incoming)
{
    console.log(incoming);
}

// Whoa, That Sucker's Huge...
for (let i = -300000; i <= 300000; i++)
{
    let sum = 0;
    if (i%2 != 0)
        sum += i;
}

// Countdown by Fours
let count = 2016;
while (count != 0)
{
    console.log(count);
    count -= 4;
}

// Flexible Countdown
function flexibleCountdown(lowNum, highNum, mult)
{
    for (let i = highNum; i <= lowNum; i-=mult)
    {
        console.log(i);
    }
}

// The Final Countdown
function finalCountdown(param1, param2, param3, param4)
{
    let i = param2;
    while (i <= param3)
    {
        if (i == param4)
            continue;
        console.log(i);
        i += param1;
    }
}

// Countdown
function countdown(num)
{
    let result = [];
    while (num >= 0)
    {
        result.push(num);
        num--;
    }
    // length should be num + 1
}

// Print and Return
function printAndReturn(num1, num2)
{
    console.log(num1);
    return num2;
}

// First Plus Length
function firstPlusLength(arr)
{
    if (typeof arr[0] != "number")
        return false;
    else
        return arr[0] + arr.length;
}

// Values Greater than Second
function valuesGreaterThanSecond(arr) 
{
    let count = 0;
    for (let obj of arr)
    {
        if (obj > arr[1])
            count++;
    }
    return count;
}

// This Length, That Value
function thisLengthThatValue(num1, num2)
{
    let result = [];
    if (num1 == num2)
        console.log("jinx!");
    for (let i = 0; i < num1; i++)
    {
        result.push(num2);
    }
    return result;
}

// Fit the First Value
function fitTheFirstValue(arr)
{
    if (arr[0] > arr.length)
        console.log("Too big!");
    else if (arr[0] < arr.length)
        console.log("Too small!");
    else
        console.log("Just right!");
}

// Fahrenheit to Celsius
function fahrenheitToCelsius(fDegrees)
{
    let cDegrees = fDegrees - 32;
    cDegrees = cDegrees * 5 / 9;
    return cDegrees;
}

// Celsius to Fahrenheit
function celsiusToFahrenheit(cDegrees)
{
    let fDegrees = cDegrees * 9 / 5;
    fDegrees = cDegrees - 32;
    return fDegree;
}

// Biggie Size
function makeItBig(arr)
{
    for (let i = 0; i < arr.length; i++)
    {
        if (arr[i] > 0)
        {
            arr[i] = "big";
        }
    }
    return arr;
}

// Print Low, Return High
function printLowReturnHigh(arr)
{
    console.log(Math.min(...arr));
    return Math.max(...arr);
}

// Print One, Return Another
function printOneReturnAnother(arr)
{
    console.log(arr[arr.length - 2]);
    for (let obj of arr)
    {
        if (obj%2 != 0)
            console.log(obj);
    }
}

// Double Vision
function doubleVision(arr)
{
    let result = [];
    for (let obj of arr)
        result.push(obj*2);
}

// Count Positives
function countPositives(arr)
{
    let count = 0;
    let result = arr;
    for (let obj of result)
    {
        if (obj > 0)
            count++;
    }
    result[result.length - 1] = count;
    return result;
}

// Evens and Odds
function evenAndOdds(arr)
{
    for (let i = 0; i < arr.length - 2; i++)
    {
        if (arr[i] % 2 != 0 && arr[i+1] % 2 != 0 && arr[i+2] % 2 != 0)
        {
            console.log("That's odd!");
            i += 3;
        }
        if (arr[i] % 2 == 0 && arr[i+1] % 2 == 0 && arr[i+2] % 2 == 0)
        {
            console.log("Even more so!");
            i += 3;
        }
    }
}

// Increment the Seconds
function incrementTheSeconds(arr)
{
    for (let i = 0; i < arr.length; i++)
    {
        if (arr[i]%2 != 0)
            arr[i] += 1;
        console.log(arr[i]);
    }
    return arr;
}

// Previous Lengths
function previousLengths(arr)
{
    arr[0] = arr[arr.length - 1].length;
    for (let i = 1; i < arr.length; i++)
        arr[i] = arr[i-1].length;
    return arr;
}

// Add Seven to Most
function addSevenToMost(arr)
{
    let result = [];
    for (let i = 1; i < arr.length; i++)
    {
        result.push(arr[i] + 7);
    }
    return result;
}

// Reverse Array
function reverse(arr)
{
    return arr.reverse();
}

// Outlook: Negative
function outlookNegative(arr)
{
    for (let i = 0; i < arr.length; i++)
    {
        if (arr[i] > 0)
            arr[i] = -arr[i];
    }
    return arr;
}

// Always Hungry
function alwaysHungry(arr)
{
    let foodPresent = false;
    for (let i = 0; i < arr.length; i ++)
    {
        if (arr[i] == "food")
        {
            console.log("yummy");
            foodPresent = true;
        }
    }

    if (!foodPresent)
        console.log("I'm hungry");
}

// Swap Toward the Center
function swapTowardTheCenter(arr)
{
    let temp = arr[0];
    arr[0] = arr[arr.length - 1];
    arr[arr.length - 2] = temp;
    temp = arr[arr.length - 4];
    arr[arr.length - 4] = arr[2];
    arr[2] = temp;
}

// Scale the Array
function scaleTheArray(arr, num)
{
    for (let i = 0; i < arr.length; i++)
    {
        arr[i] = arr[i] * num;
    }
    return arr;
}