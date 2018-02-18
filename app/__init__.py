from flask import Flask

# from flask_compress import Compress

app = Flask(__name__)
from whitenoise import WhiteNoise
app.wsgi_app = WhiteNoise(app.wsgi_app, root='static/')
# Compress(app)

# compress = Compress()

# def start_app():
#     app = Flask(__name__)
#     compress.init_app(app)
#     return app

from app import views, models



