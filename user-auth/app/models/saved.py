from .db import db
# from .user import User

class Saved(db.Model):
    __tablename__ = 'saved'

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    itemURL = db.Column(db.String, nullable=False)

    def to_dict(self):
        return {
            "id": self.id,
            "userId": self.userId,
            "itemURL": self.itemURL,
        }