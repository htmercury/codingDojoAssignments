function userLanguages(users) {
    for (let user of users) {
        let statement = `${user.fname} ${user.lname} knows `;
        if (user.languages.length == 0) {
            statement += 'nothing'
        }
        else {
            statement += user.languages.join(', ');
        }
        statement += '.';
        console.log(statement)
    }
}