from flask import Flask, render_template
app = Flask(__name__)

users = (
   {'first_name' : 'Michael', 'last_name' : 'Choi'},
   {'first_name' : 'John', 'last_name' : 'Supsupin'},
   {'first_name' : 'Mark', 'last_name' : 'Guillen'},
   {'first_name' : 'KB', 'last_name' : 'Tonel'}
)

@app.route('/')
def main():
    return render_template('index.html', users=users, len = len(users))

@app.route('/<x>/<y>')
def custom(x,y):
    return render_template('index.html', x=int(x),y=int(y))

if __name__=="__main__":
    app.run(debug=True)