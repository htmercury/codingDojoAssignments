let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];

function printStudents(students) {
    for (let student of students) {
        console.log(`Name: ${student.name}, Cohort: ${student.cohort}`)
    }
}

let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };

 function printUsers(users) {
     console.log('EMPLOYEES');
     let i = 1;
     for (let employee of users.employees) {
         console.log(`${i} - ${employee.last_name.toUpperCase()}, ${employee.first_name.toUpperCase()} - ${(employee.first_name + employee.last_name).length}`);
         i++;
     }
     let j = 1;
     console.log('MANAGERS');
     for (let manager of users.managers) {
        console.log(`${j} - ${manager.last_name.toUpperCase()}, ${manager.first_name.toUpperCase()} - ${(manager.first_name + manager.last_name).length}`);
        j++;
    }
 }