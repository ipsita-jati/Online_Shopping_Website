from flask import Flask, request, render_template 
from flask_wtf import FlaskForm
from wtforms import StringField,PasswordField,SubmitField

app = Flask(__name__)

@app.route('/register',methods=['GET','POST'])
def register():
    if request.method == 'POST':
        #handel request
        pass
    return render_template('register.html')

@app.route('/login',methods=['GET','POST'])
def login():
    if request.method == 'POST':
        #handel request
        pass
    return render_template('login.html')

@app.route('/dashboard')
def dashboard():
    return render_template('dashboard.html')









if __name__ == '__main__':
    app.run(debug=True)