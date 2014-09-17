# -*- coding: utf-8 -*-
from flask import render_template, request, url_for, redirect, flash, jsonify, session, g
from sqlalchemy import desc
from werkzeug.security import generate_password_hash, check_password_hash
from apps import app, db
from flask.ext.wtf import Form 
from wtforms import StringField, PasswordField, TextAreaField
from wtforms import validators
from wtforms.fields.html5 import EmailField

import logging
from PIL import Image
from PIL.ExifTags import TAGS
from StringIO import StringIO

from google.appengine.ext import db

class Photo(db.Model):
    photo = db.BlobProperty()

ALLOWED_EXTENSIONS = ['jpg', 'png', 'jpeg', 'gif']

def get_exif_data(fname):
    """Get embedded EXIF data from image file."""
    fileinfo = {}
    try:
        img = Image.open(fname)
        if hasattr( img, '_getexif' ):
            exifinfo = img._getexif()
            print exifinfo
            if exifinfo != None:
                fileinfo = dict([(TAGS.get(key,key), str(value).decode('utf-8', 'ignore'))
                        for key, value in exifinfo.items()
                        if type(TAGS.get(key,key)) is str])
    except IOError:
        logging.error(fname)
    return fileinfo

def allowed_file(filename):
    return '.' in filename.lower() and \
           filename.lower().rsplit('.', 1)[1] in ALLOWED_EXTENSIONS

@app.route('/', methods=['GET','POST'])
def index():

    return render_template("find_btn.html")


@app.route('/report', methods=['GET', 'POST'])
def report():
    if request.method == 'POST':
        file = request.files['file']
        if file and allowed_file(file.filename):
            filestream = file.read()
            upload_data = Photo()
            upload_data.photo = db.Blob(filestream)
            upload_data.put()

            url = url_for("shows", key=upload_data.key())
            exif_data = get_exif_data(StringIO(filestream))

            return render_template('report_res.html',
                original_path = url,
                exif_data = exif_data)
    return render_template("report.html")

@app.route('/report/shows/<key>', methods=['GET'])
def shows(key):
    uploaded_data = db.get(key)
    return app.response_class(uploaded_data.photo)

@app.route('/sink', methods=['GET', 'POST'])
def sink():

    return render_template("sink.html")
