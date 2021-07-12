"""empty message

Revision ID: 9d83a6601151
Revises: 651d18ec1328
Create Date: 2021-07-12 16:47:56.623527

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '9d83a6601151'
down_revision = '651d18ec1328'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('homeData',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('itemURL', sa.String(), nullable=False),
    sa.Column('imageURL', sa.String(), nullable=True),
    sa.Column('title', sa.String(), nullable=False),
    sa.Column('description', sa.String(), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('imageURL'),
    sa.UniqueConstraint('itemURL')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('homeData')
    # ### end Alembic commands ###
