from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired

class SavedForm(FlaskForm):    
    userId = IntegerField('userId', [DataRequired()])
    itemURL = StringField('itemURL', [DataRequired()])
    imageURL = StringField('imageURL', [DataRequired()])
    title = StringField('title', [DataRequired()])
    description = StringField('description')