# -*- coding: utf-8 -*-
from flask import render_template, request, url_for, redirect, flash, jsonify, session, g
from sqlalchemy import desc
from werkzeug.security import generate_password_hash, check_password_hash
from apps import app, db
from flask.ext.wtf import Form 
from wtforms import StringField, PasswordField, TextAreaField
from wtforms import validators
from wtforms.fields.html5 import EmailField


@app.route('/', methods=['GET','POST'])
def index():

    return render_template("main.html")



@app.route('/sink', methods=['GET', 'POST'])
def sink():

    return render_template("sink.html")
