from .db import db


class HomeData(db.Model):
    __tablename__ = 'homeData'

    id = db.Column(db.Integer, primary_key=True)
    itemURL = db.Column(db.String, nullable=False, unique=True)
    imageURL = db.Column(db.String, unique=True)
    title = db.Column(db.String, nullable=False)
    description = db.Column(db.String)

    def to_dict(self):
        return {
            "id": self.id,
            "itemURL": self.itemURL,
            "imageURL": self.imageURL,
            "title": self.title,
            "description": self.description
        }
