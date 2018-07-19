from flask import Flask, render_template, request, redirect, session, flash
from flask_bcrypt import Bcrypt
from mysqlconnection import connectToMySQL
import re
app = Flask(__name__)
bcrypt = Bcrypt(app)
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
app.secret_key = 'secret_key'

mysql = connectToMySQL('usersdb')

@app.route('/')
def index():
    if 'userid' in session:
        return redirect('/result')
    first_name = session['first_name'] if 'first_name' in session else ''
    last_name = session['last_name'] if 'last_name' in session else ''
    email_address = session['email_address'] if 'email_address' in session else ''
    session.pop('first_name', None)
    session.pop('last_name', None)
    session.pop('email_address', None)
    return render_template("index.html", first_name=first_name, last_name=last_name, email_address=email_address)

@app.route('/register', methods=['POST'])
def create_user():
    print("Got Post Info")
    session['first_name'] = request.form['first_name']
    session['last_name'] = request.form['last_name']
    session['email_address'] = request.form['email_address']
    match_query = 'SELECT email_address FROM users WHERE email_address = %(email_address)s'
    match_data = { 'email_address':session['email_address'] }
    results = mysql.query_db(match_query, match_data)
    print(results)
    if len(request.form['first_name']) < 1:
        flash("First name cannot be empty!", 'first_name')
        session['first_name'] = ''
    elif not request.form['first_name'].isalpha():
        flash("First name can only include characters!", 'first_name')
    if len(request.form['last_name']) < 1:
        flash("Last name cannot be empty!", 'last_name')
        session['last_name'] = ''
    elif not request.form['last_name'].isalpha():
        flash("Last name can only include characters!", 'last_name')
    if len(request.form['email_address']) < 1:
        flash("Email cannot be empty!", 'email_address')
        session['email_address'] = ''
    elif not EMAIL_REGEX.match(request.form['email_address']):
        flash("Invalid Email Address!", 'email_address')
    elif results != ():
        flash("Email is already used!", 'email_address')
    if len(request.form['password']) < 8:
        flash("Password must be more than 8 characters!", 'password')
    elif request.form['password'] != request.form['confirm_password']:
        flash("Passwords do not match!", 'password')
    if not '_flashes' in session.keys():
        flash("You've been successfully registered", 'success')
        pw_hash = bcrypt.generate_password_hash(request.form['password'])
        query = 'INSERT INTO users (email_address, first_name, last_name, password) VALUES (%(email_address)s, %(first_name)s, %(last_name)s, %(password)s)'
        data = {
            'email_address':request.form['email_address'],
            'first_name':request.form['first_name'],
            'last_name':request.form['last_name'],
            'password':pw_hash
        }
        mysql.query_db(query, data)
        query = "SELECT * FROM users WHERE email_address = %(email_address)s;"
        data = { "email_address" : request.form["email_address"] }
        session['userid'] = mysql.query_db(query, data)[0]['id']
        return redirect("/result")
    print(session.keys())
    return redirect("/")
    
@app.route('/login', methods=['POST'])
def login():
    query = "SELECT * FROM users WHERE email_address = %(email_address)s;"
    data = { "email_address" : request.form["email_address"] }
    result = mysql.query_db(query, data)
    if result:
        if bcrypt.check_password_hash(result[0]['password'], request.form['password']):
            session['userid'] = result[0]['id']
            return redirect('/result')
    flash("Either email or password is incorrect!", 'error')
    return redirect('/')

@app.route('/result')
def result():
    print(session['userid'])
    query = 'SELECT * FROM users WHERE id = %(userid)s'
    data = {'userid':session['userid']}
    all_users = mysql.query_db(query, data)
    print(all_users)
    return render_template('result.html', all_users = all_users)

@app.route('/logout')
def logout():
    session.pop('userid', None)
    return redirect('/')

if __name__=="__main__":
    app.run(debug=True) 