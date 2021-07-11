from .db import db

class Saved(db.Model):
    __tablename__ = 'saved'

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    itemURL = db.Column(db.String, nullable=False, unique=True)
    imageURL = db.Column(db.String, nullable=False)
    title = db.Column(db.String, nullable=False)
    description = db.Column(db.String)

    def to_dict(self):
        return {
            "id": self.id,
            "userId": self.userId,
            "itemURL": self.itemURL,
            "imageURL": self.imageURL,
            "title": self.title,
            "description": self.description
        }