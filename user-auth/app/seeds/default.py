from app.models import db, Default

# These are the default items that are to be displayed 
    # on the homepage if not logged in
def seed_default():
    item1 = Default(
        url='https://giphy.com/gifs/css-13FrpeVH09Zrb2',
        title='css GIF',
    )

    item2 = Default(
        url='https://www.nytimes.com/2021/06/14/podcasts/the-daily/apple-china-privacy.html',
        title='Apple\'s Bet on China',
        description="When the technology giant first started doing business in China, it thought it would change the country. Decades later, the reverse is true."
    )

    item3 = Default(
        url='https://www.wired.com/story/mystery-malware-stole-26-million-passwords-from-windows-computers/',
        title="A Mystery Malware Stole 26 Million Passwords From Windows PCs",
        description="The credentials were part of a trove containing 1.2 terabytes of sensitive data extracted between 2018 and 2020."
    )

    item4 = Default(
        url='https://giphy.com/gifs/windows-vaporwave-error-mq5y2jHRCAqMo',
        title='Windows Error GIF',
    )

    item5 = Default(
        url='https://gizmodo.com/coffee-is-good-for-you-coffee-is-bad-for-you-1847123270',
        title='Coffee Is Good for You, Coffee Is Bad for You',
        description="If you’re the sort of person who regularly scans the latest science-related headlines, you’ve probably come across the coffee shuffle at some point: Articles reporting on the latest study to show coffee may do something good for you, followed by articles repo…"
    )

    item6 = Default(
        url='https://www.reuters.com/world/us/brutal-heatwave-descend-us-west-prompting-fire-warnings-2021-06-14/',
        title='Brutal heatwave to descend on U.S. West, prompting fire warnings - Reuters',
        description="A heatwave already punishing parts of the U.S. Southwest on Monday was expected to move into California this week, prompting the forecasters to warn of health and fire dangers."
    )

    item7 = Default(
        url='https://giphy.com/gifs/vaporwave-aesthetic-aesthetics-ADSFDg7OI0TDhd9ucJ',
        title='GIF by Mr. Cody England',
    )

    db.session.add(item1)
    db.session.add(item2)
    db.session.add(item3)
    db.session.add(item4)
    db.session.add(item5)
    db.session.add(item6)
    db.session.add(item7)
    db.session.commit()