// 1 undefined
var hello;
console.log(hello);                                   
hello = 'world';    

// 2 magnet
var needle;
function test(){
    var needle;
    needle = 'magnet';
	console.log(needle);
}
needle = 'haystack';
test();

// 3 super cool
var brendan
function print(){
	brendan = 'only okay';
	console.log(brendan);
}
brendan = 'super cool';
console.log(brendan);

// 4 chicken, half-chicken
var food
function eat(){
    var food;
	food = 'half-chicken';
	console.log(food);
	food = 'gone';
}
food = 'chicken';
console.log(food);
eat();

// 5 mean is not a function
var mean;
mean();
console.log(food);
mean = function() {
        var food;
        food = "chicken";
        console.log(food);
        food = "fish";
        console.log(food);
    }
console.log(food);

// 6 undefined, rock, r&b, disco
var genre;
function rewind() {
    var genre;
	genre = "rock";
	console.log(genre);
	genre = "r&b";
	console.log(genre);
}
console.log(genre);
genre = "disco";
rewind();
console.log(genre);

// 7 san jose, seattle, burbank, san jose
function learn() {
    var dojo;
	dojo = "seattle";
	console.log(dojo);
	dojo = "burbank";
	console.log(dojo);
}
dojo = "san jose";
console.log(dojo);
learn();
console.log(dojo);

// 8 error can't assigned to const
function makeDojo(name, students){
        const dojo = {};
        dojo.name = name;
        dojo.students = students;
        if(dojo.students > 50){
            dojo.hiring = true;
        }
        else if(dojo.students <= 0){
            dojo = "closed for now";
        }
        return dojo;
}
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));