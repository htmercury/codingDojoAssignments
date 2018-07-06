from flask import Flask, render_template, request, redirect, session, flash
app = Flask(__name__)
# our index route will handle rendering our form
app.secret_key = 'secret_key'
@app.route('/')
def index():
    if 'name' in session or 'comment' in session:
        name = session['name']
        location = session['location']
        language = session['language']
        comment = session['comment'] 
        session.pop('name', None)
        session.pop('location', None)
        session.pop('language', None)
        session.pop('comment', None)
    else:
        (name, location, language, comment) = ('','San Jose','Python','')
    return render_template("index.html", name=name, location=location, language=language, comment=comment)
# this route will handle our form submission
# notice how we defined which HTTP methods are allowed by this route
@app.route('/users', methods=['POST'])
def create_user():
    print("Got Post Info")
    session['name'] = request.form['name']
    session['location'] = request.form['location']
    session['language'] = request.form['language']
    session['comment'] = request.form['comment']
    if len(request.form['name']) < 1:
        flash("Name cannot be empty!")
        session['name'] = ''
    if len(request.form['comment']) < 1:
        flash("Comment cannot be empty!")
        session['comment'] = ''
    if len(request.form['comment']) > 120:
        flash("Comment is too long!")
        session['comment'] = ''
    print(session.keys())
    if '_flashes' in session.keys():
        return redirect("/")
    return render_template("result.html", name=session['name'], location=session['location'], language=session['language'], comment=session['comment'])
if __name__=="__main__":
    # run our server
    app.run(debug=True) 