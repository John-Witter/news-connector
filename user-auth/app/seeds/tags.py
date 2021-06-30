from app.models import db, Tag

# Tags are only seeded / users can't add tags
def seed_tags():

    business = Tag(title='business')
    entertainment = Tag(title='entertainment')
    general = Tag(title='general')
    health = Tag(title='health')
    science = Tag(title='science')
    sports = Tag(title='sports')
    technology = Tag(title='technology')

    db.session.add(business)
    db.session.add(entertainment)
    db.session.add(general)
    db.session.add(health)
    db.session.add(science)
    db.session.add(sports)
    db.session.add(technology)
    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key

def undo_tags():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
