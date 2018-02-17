from app import app
from flask import render_template
from whitenoise import WhiteNoise


@app.route('/')
def index():
	return render_template('index.html')

@app.route('/creative')
def creative():
	return render_template('creative.html')

@app.route('/projects')
def projects():
	return render_template('projects.html')
	
@app.route('/resume')
def resume():
	return render_template('resume.html')
