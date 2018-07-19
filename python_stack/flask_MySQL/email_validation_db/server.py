from flask import Flask, render_template, request, redirect, session, flash
from mysqlconnection import connectToMySQL
import re
app = Flask(__name__)
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
app.secret_key = 'secret_key'

mysql = connectToMySQL('emailsdb')

@app.route('/')
def index():
    if 'email' not in session:
        session['email'] = ''
    return render_template('index.html', email=session['email'])

@app.route('/register', methods=['POST'])
def search():
    session['email'] = request.form['email']
    query = 'SELECT * FROM users'
    all_users = mysql.query_db(query)
    unique = True
    for user in all_users:
        if user['email'] == request.form['email']:
            unique = False
    if request.form['email'] != '' and EMAIL_REGEX.match(request.form['email']) and unique:
        flash(f"The email address you entered ({request.form['email']}) is a VALID email address! Thank you!", 'success')
        query = 'INSERT INTO users (email) VALUES (%(email)s)'
        data = { 'email': request.form['email'] }
        mysql.query_db(query, data)
        return redirect('/result')
    else:
        flash('Email is not valid!', 'error')
        return redirect('/')

@app.route('/delete', methods=['POST'])
def delete():
    query = 'DELETE FROM users WHERE email = %(email)s'
    data = { 'email':request.form['email']  }
    mysql.query_db(query, data)
    return redirect('result')

@app.route('/result')
def result():
    query = 'SELECT * FROM users'
    all_users = mysql.query_db(query)
    print(all_users)
    return render_template('result.html', all_users = all_users)

if __name__=="__main__":
    app.run(debug=True) 