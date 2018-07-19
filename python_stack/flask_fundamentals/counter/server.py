from flask import Flask, render_template, request, redirect, session
app = Flask(__name__)
app.secret_key = 'secret_key'

@app.route('/')         
def index():
    if 'visits' in session:
        session['visits'] += 1
    else:
        session['visits'] = 1
    print(session['visits'])
    return render_template("index.html", visits=session['visits'])

@app.route('/add_two')
def add_two():
    if 'visits' in session:
        session['visits'] += 1
    else:
        session['visits'] = 1
    return redirect('/')

@app.route('/reset')
def reset():
    session['visits'] = 0
    return redirect('/')

if __name__=="__main__":   
    app.run(debug=True)    