from flask import Flask, render_template, request, redirect, session, flash
import re
app = Flask(__name__)
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
app.secret_key = 'secret_key'
@app.route('/')
def index():
    first_name = session['first_name'] if 'first_name' in session else ''
    last_name = session['last_name'] if 'last_name' in session else ''
    print(first_name)
    email_address = session['email_address'] if 'email_address' in session else ''
    session.pop('first_name', None)
    session.pop('last_name', None)
    session.pop('email_address', None)
    return render_template("index.html", first_name=first_name, last_name=last_name, email_address=email_address)


@app.route('/users', methods=['POST'])
def create_user():
    print("Got Post Info")
    session['first_name'] = request.form['first_name']
    session['last_name'] = request.form['last_name']
    session['email_address'] = request.form['email_address']
    if len(request.form['first_name']) < 1:
        flash("First name cannot be empty!", 'error')
        session['first_name'] = ''
    if not request.form['first_name'].isalpha():
        flash("First name can only include characters!", 'error')
    if len(request.form['last_name']) < 1:
        flash("Last name cannot be empty!", 'error')
        session['last_name'] = ''
    if not request.form['last_name'].isalpha():
        flash("Last name can only include characters!", 'error')
    if len(request.form['email_address']) < 1:
        flash("Email cannot be empty!", 'error')
        session['email_address'] = ''
    if not EMAIL_REGEX.match(request.form['email_address']):
        flash("Invalid Email Address!", 'error')
    if len(request.form['password']) < 8:
        flash("Password must be more than 8 characters!", 'error')
    if request.form['password'] != request.form['confirm_password']:
        flash("Passwords do not match!", 'error')
    if not '_flashes' in session.keys():
        flash("Success! Form submitted!", 'success')
    print(session.keys())
    return redirect("/")
if __name__=="__main__":
    # run our server
    app.run(debug=True) 