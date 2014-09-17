"""
settings.py

Configuration for Flask app

"""

from datetime import timedelta

class Config(object):
    # Set secret key to use session
    SECRET_KEY = "semodol1"
    debug = False


class Production(Config):
    debug = True
    CSRF_ENABLED = False
    ADMIN = "ddwax89@gmail.com"
    SQLALCHEMY_DATABASE_URI = 'mysql+gaerdbms:///blog?instance=sonic-dialect-643:semodol1'
    migration_directory = 'migrations'
    PERMANENT_SESSION_LIFETIME = timedelta(minutes=2)