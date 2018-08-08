//problem 1
var myString: string;
// I can assign myString like this:
myString = "Bee stinger";
// Why is there a problem with this? What can I do to fix this?
// myString is type string so instead assign "9"
myString = "9";

//problem 2
function sayHello(name: string) {
    return `Hello, ${name}!`;
}
// This is working great:
console.log(sayHello("Kermit"));
// Why isn't this working? I want it to return "Hello, 9!"
// The parameter passed in must be a string
console.log(sayHello("9"));

//problem 3
function fullName(firstName: string, lastName: string, middleName: string) {
    let fullName = `${firstName} ${middleName} ${lastName}`;
    return fullName;
}
// This works:
console.log(fullName("Mary", "Moore", "Tyler"));
// What do I do if someone doesn't have a middle name?
// pass an empty string
console.log(fullName("Jimbo", "Jones", ""));

//problem 4
interface Student {
    firstName: string;
    lastName: string;
    belts: number;
}
function graduate(ninja: Student) {
    return `Congratulations, ${ninja.firstName} ${ninja.lastName}, you earned ${ninja.belts} belts!`;
}
const christine = {
    firstName: "Christine",
    lastName: "Yang",
    belts: 2
}
const jay = {
    firstName: "Jay",
    lastName: "Patel",
    belts: 4
}
// This seems to work fine:
console.log(graduate(christine));
// This one has problems:
// problem was belt was not belts, thus not following the student interface
console.log(graduate(jay));

//problem 5
class Ninja {
    fullName: string;
    constructor(
        public firstName: string,
        public lastName: string) {
        this.fullName = `${firstName} ${lastName}`;
    }
    debug() {
        console.log("Console.log() is my friend.")
    }
}
// This is not making an instance of Ninja, for some reason:
// constructor needs arguments
const turing = new Ninja("Alan", "Turing");

// Now I'll make a study function, which is a lot like our graduate function from above:
function study(programmer: Ninja) {
    return `Ready to whiteboard an algorithm, ${programmer.fullName}?`
}
// Now this has problems:
// turing needs to be ninja class
console.log(study(turing));

//problem 6
var increment = x => x + 1;
// This works great:
console.log(increment(3));
var square = x => x * x;
// This is not showing me what I want:
// either add return or remove brackets
console.log(square(4));
// This is not working:
// add parenthesis when more than 1 argument
var multiply = (x, y) => x * y;
// Nor is this working:
// add brackets
var math = (x, y) => {
    let sum = x + y;
    let product = x * y;
    let difference = Math.abs(x - y);
    return [sum, product, difference];
}

//problem 7
class Elephant {
    constructor(public age: number) { }
    birthday = () => {
        this.age++;
    }
}
const babar = new Elephant(8);
setTimeout(babar.birthday, 1000)
setTimeout(function () {
    console.log(`Babar's age is ${babar.age}.`)
}, 2000)
 // Why didn't babar's age change? Fix this by using an arrow function in the Elephant class.
