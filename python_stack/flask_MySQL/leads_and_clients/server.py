from flask import Flask, render_template, request, redirect, session, flash
from mysqlconnection import connectToMySQL
app = Flask(__name__)
app.secret_key = 'secret_key'

mysql = connectToMySQL('lead_gen_business')
# now, we may invoke the query_db method
print("all the friends", mysql.query_db("SELECT CONCAT(clients.first_name, ' ', clients.last_name) AS client_name, COUNT(leads.leads_id) as number_of_leads FROM leads " \
    "JOIN sites ON leads.site_id = sites.site_id " \
    "JOIN clients ON sites.client_id = clients.client_id " \
    "GROUP BY clients.client_id;"))

@app.route('/')
def index():
    if 'start_date' not in session:
        session['start_date'] = '2011/1/1'
    if 'end_date' not in session:
        session['end_date'] = '2013/12/31'
    query = ("SELECT CONCAT(clients.first_name, ' ', clients.last_name) AS client_name, COUNT(leads.leads_id) as number_of_leads FROM leads " \
    "JOIN sites ON leads.site_id = sites.site_id " \
    "JOIN clients ON sites.client_id = clients.client_id " \
    "WHERE registered_datetime >= %(start_date)s AND registered_datetime <= %(end_date)s " \
    "GROUP BY clients.client_id;")
    data = {
        'start_date':session['start_date'],
        'end_date':session['end_date']
    }
    all_customers = mysql.query_db(query, data)
    print("Fetched all friends", all_customers)
    return render_template('index.html', all_customers=all_customers, num=len(all_customers), 
        start_date=session['start_date'], end_date=session['end_date'])

@app.route('/search', methods=['POST'])
def search():
    print(session['start_date'])
    if request.form['start_date'] != '':
        session['start_date'] = request.form['start_date']
    if request.form['end_date'] != '':
        session['end_date'] = request.form['end_date']
    return redirect('/')

if __name__=="__main__":
    app.run(debug=True) 