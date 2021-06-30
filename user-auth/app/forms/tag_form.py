from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired


class TagForm(FlaskForm):
    title = StringField('title', [DataRequired()])
