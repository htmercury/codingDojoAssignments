from flask import Flask
app = Flask(__name__)

print(__name__)
@app.route('/')
def hello_world():
    return 'Hello World!'

@app.route('/dojo')
def dojo():
    return 'Dojo!'

@app.route('/say/<name>')
def say(name):
    name = name.capitalize()
    if name == 'John':
        name += '!'
    return f'Hi {name}'

@app.route('/repeat/<num>/<word>')
def repeat(num, word):
    num = int(num)
    result = ''
    for i in range(num):
        result+=f'<p>{word}</p>'
    return result

if __name__=="__main__":
    app.run(debug=True)