from .db import db

class Interest(db.Model):
    __tablename__ = 'interests'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String, nullable=False, unique=True)
    userId = db.Columne(db.Integer, db.ForeignKey('users.id'),nullable=False)

    def to_dict(self):
        return {
            'id': self.id,
            'title': self.title,
            'userId': self.userId
        }