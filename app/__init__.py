from flask import Flask

# from flask_compress import Compress

app = Flask(__name__)
# Compress(app)

# compress = Compress()

# def start_app():
#     app = Flask(__name__)
#     compress.init_app(app)
#     return app

from app import views, models



