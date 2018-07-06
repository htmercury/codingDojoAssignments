from flask import Flask, render_template, request, redirect, session
import random

app = Flask(__name__)
app.secret_key = 'secret_key'

@app.route('/')         
def index():
    if 'number' not in session:
        session['number'] = random.randrange(1, 101)
    if 'guess' in session:
        response = 'high' if session['guess'] > session['number'] else 'low'
        won_yet = session['guess'] == session['number']
        present = 'flex'
    else:
        response = None
        present = 'none'
        won_yet = False
    return render_template('index.html', number=session['number'], 
        response=response, present=present, won_yet=won_yet)

@app.route('/submit', methods=['POST'])
def submit():
    print('submission received')
    session['guess'] = int(request.form['guess'])
    return redirect('/')

@app.route('/reset')
def reset():
    session.clear()
    return redirect('/')

if __name__=="__main__":   
    app.run(debug=True)    