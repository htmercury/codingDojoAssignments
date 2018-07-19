x = [ [5,2,3], [10,8,9] ] 
students = [
     {'first_name':  'Michael', 'last_name' : 'Jordan'},
     {'first_name' : 'John', 'last_name' : 'Rosales'}
]
sports_directory = {
    'basketball' : ['Kobe', 'Jordan', 'James', 'Curry'],
    'soccer' : ['Messi', 'Ronaldo', 'Rooney']
}
z = [ {'x': 10, 'y': 20} ]

# problem 1
x[1][0] = 15
print(x)
students[0]['last_name'] = 'Bryant'
print(students)
sports_directory['soccer'][0] = 'Andres'
print(sports_directory)
z[0]['x'] = 30
print(z)

students = [
     {'first_name':  'Michael', 'last_name' : 'Jordan'},
     {'first_name' : 'John', 'last_name' : 'Rosales'},
     {'first_name' : 'Mark', 'last_name' : 'Guillen'},
     {'first_name' : 'KB', 'last_name' : 'Tonel'}
]

# problem 2
def print_dict(list_dict):
    for i in range(len(list_dict)):
        result = []
        for key in list_dict[i].keys():
            result.append(key + " - " + list_dict[i][key])
        print(*result, sep=' , ')

# problem 3
def print_dict_given_key(list_dict, key):
    for i in range(len(list_dict)):
        print(list_dict[i][key])

dojo = {
   'location': ['San Jose', 'Seattle', 'Dallas', 'Chicago', 'Tulsa', 'DC', 'Burbank'],
   'instructors': ['Michael', 'Amy', 'Eduardo', 'Josh', 'Graham', 'Patrick', 'Minh', 'Devon']
}

# problem 4
def print_dojo_info(dojo):
    locations = dojo['location']
    print(len(locations),'LOCATIONS')
    for place in locations:
        print(place)
    print('\n')
    instructors = dojo['instructors']
    print(len(instructors),'INSTRUCTORS')
    for instr in instructors:
        print(instr)

print_dojo_info(dojo)