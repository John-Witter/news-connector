from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired


class InterestForm(FlaskForm):
    userId = IntegerField('userId', [DataRequired()])
    interestId = IntegerField('interestId' [DataRequired()])
    title = StringField('title', [DataRequired()])
