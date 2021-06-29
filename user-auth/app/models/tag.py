from .db import db

class Tag(db.Model):
    __tablename__ = 'tags'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String, nullable=False, unique=True)

    def to_dict(self):
        return {
            "id": self.id,
            "title": self.title
        }