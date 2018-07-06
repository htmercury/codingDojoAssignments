from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def hello_world():
    return render_template('index.html', num=0, color='')

@app.route('/play/')
def play():
    return render_template('index.html',  num=3, color='#9fc5f8')

@app.route('/play/<num>/')
def play_num(num):
    return render_template('index.html',  num=int(num), color='#9fc5f8')

@app.route('/play/<num>/<color>')
def play_num_color(num, color):
    return render_template('index.html',  num=int(num), color=color)

if __name__=="__main__":
    app.run(debug=True)