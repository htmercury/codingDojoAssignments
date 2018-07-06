var users = [{name: "Michael", age:37}, {name: "John", age:30}, {name: "David", age:27}];
// print john's age
console.log(users[1].age);
// print name of first object
console.log(users[0].name);
// print each user name and age with for loop
for (let i = 0; i < users.length; i++) {
    console.log(`${users[i].name} - ${users[i].age}`);
}