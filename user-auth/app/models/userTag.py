from .db import db
# from .user import User
from .tag import Tag

class UserTag(db.Model):
    __tablename__ = 'userTags'
    id = db.Column(db.Integer, primary_key=True)    
    userId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    tagId = db.Column(db.Integer, db.ForeignKey('tags.id'), nullable=False)


    def to_dict(self):
       return {
           "id": self.id,
           "userId": self.userId,
           "tag": Tag.query.filter(Tag.id == self.tagId).first().to_dict(),
       }
