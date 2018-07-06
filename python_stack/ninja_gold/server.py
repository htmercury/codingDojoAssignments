from flask import Flask, render_template, request, redirect, session
from datetime import date, time, datetime
import random

app = Flask(__name__)
app.secret_key = 'secret_key'

@app.route('/')         
def index():
    if 'log' not in session:
        session['log'] = []
    if 'gold' not in session:
        session['gold'] = 0
    print(session['log'])
    return render_template('index.html', logs=session['log'], gold=session['gold'])

@app.route('/process_money', methods=['POST'])
def process_money():
    print('submission received')
    today = datetime.now()
    print(today)
    lower = int(request.form['lower'])
    upper = int(request.form['upper'])
    location = request.form['location']
    print(lower,upper)
    gold_earned = random.randrange(lower, upper)
    result = ''
    if gold_earned > 0:
        result = f'<p style="color:#809277">Earned {gold_earned} golds from the {location}! ({today})</p>'
    else:
        result = f'<p style="color:#c96a6d">Entered a {location} and lost {-gold_earned} golds... Ouch... ({today})</p>'
    log = session['log']
    log.append(result)
    session['gold'] += gold_earned
    session['log'] = log
    return redirect('/')

@app.route('/reset')
def reset():
    session.clear()
    return redirect('/')

if __name__=="__main__":   
    app.run(debug=True)    