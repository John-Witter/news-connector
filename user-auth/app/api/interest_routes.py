from flask import Blueprint, jsonify, request
from app.models import db, Interest
from app.forms import InterestForm
from app.forms.update_interest_form import UpdateInterestForm

interest_routes = Blueprint('interests', __name__)

# return all of the user's user-created interests
@interest_routes.route('/', methods=['GET'])
def get_interests():
    interests = Interest.query.all()
    return {"interests": [titles.to_dict() for titles in interests]}


# return the interest with the given id
@interest_routes.route('/<int:id>', methods=["GET"])
def get_one_interest(id):
    interest = Interest.query.filter_by(id = id).first()
    return interest.to_dict()


# add and interest to view within the newsfeed
@interest_routes.route('/', methods=["POST"])
def post_interests():
    form = InterestForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        new_interest = Interest(
            userId=form.data['userId'],
            title=form.data['title']
        )
        db.session.add(new_interest)
        db.session.commit()

    return new_interest.to_dict()


# update the interest with the given id
@interest_routes.route('/', methods=['PUT'])
def update_interest():
    form = UpdateInterestForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        interestId = form.data["interestId"]
        interest = Interest.query.filter_by(id=interestId).\
            update(dict({'title': form.data['title']}))
        updated_interest = Interest.query.filter_by(id=interestId).first()
        db.session.commit()
        return updated_interest.to_dict()


# delete the interest with the given id from the user's interests
@interest_routes.route('/<int:id>', methods=['DELETE'])
def delete_interest(id):
    interest = Interest.query.filter_by(id = id).first()
    db.session.delete(interest)
    db.session.commit()
    return {'deleted_interest': interest.to_dict()}
