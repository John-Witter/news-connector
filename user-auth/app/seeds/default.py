from app.models import db, HomeData

# These are the default items that are to be displayed 
    # on the homepage if not logged in
def seed_default():
    item1 = HomeData(
        itemURL='https://giphy.com/gifs/css-13FrpeVH09Zrb2',
        imageURL='https://media0.giphy.com/media/13FrpeVH09Zrb2/giphy.gif?cid=0a74af3bzgqxwfvmdp7kzqt9f8eyzsidwyawtkmesuf76iz9&rid=giphy.gif&ct=g',
        title='css GIF',
    )

    item2 = HomeData(
        itemURL='https://www.nytimes.com/2021/06/14/podcasts/the-daily/apple-china-privacy.html',
        imageURL='https://static01.nyt.com/images/2021/06/14/podcasts/14DAILY-apple-china/14DAILY-apple-china-facebookJumbo.jpg',
        title='Apple\'s Bet on China',
        description="When the technology giant first started doing business in China, it thought it would change the country. Decades later, the reverse is true."
    )

    item3 = HomeData(
        itemURL='https://www.wired.com/story/mystery-malware-stole-26-million-passwords-from-windows-computers/',
        imageURL='https://media.wired.com/photos/60c2b2a4301dd5bd8638684b/191:100/w_1280,c_limit/Security-PC-Malware-Passwords-1184216905.jpg',
        title="A Mystery Malware Stole 26 Million Passwords From Windows PCs",
        description="The credentials were part of a trove containing 1.2 terabytes of sensitive data extracted between 2018 and 2020."
    )

    item4 = HomeData(
        itemURL='https://giphy.com/gifs/windows-vaporwave-error-mq5y2jHRCAqMo',
        imageURL='https://media3.giphy.com/media/mq5y2jHRCAqMo/giphy.gif?cid=0a74af3bae6yike8gzniaugm2rlmtus45bq5xg499vn3hodb&rid=giphy.gif&ct=g',
        title='Windows Error GIF',
    )

    item5 = HomeData(
        itemURL='https://gizmodo.com/coffee-is-good-for-you-coffee-is-bad-for-you-1847123270',
        imageURL='https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/a442813a35185f585a719d4a8e9ba376.jpg',
        title='Coffee Is Good for You, Coffee Is Bad for You',
        description="If you’re the sort of person who regularly scans the latest science-related headlines, you’ve probably come across the coffee shuffle at some point: Articles reporting on the latest study to show coffee may do something good for you, followed by articles repo…"
    )

    item6 = HomeData(
        itemURL='https://www.reuters.com/world/us/brutal-heatwave-descend-us-west-prompting-fire-warnings-2021-06-14/',
        imageURL='https://www.reuters.com/resizer/fs8_6Y3NE5uwH8s8Qr8nlgTX2tM=/800x419/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/DMR3HXQ46VK5FF2ISM2734AYMQ.jpg',
        title='Brutal heatwave to descend on U.S. West, prompting fire warnings - Reuters',
        description="A heatwave already punishing parts of the U.S. Southwest on Monday was expected to move into California this week, prompting the forecasters to warn of health and fire dangers."
    )

    item7 = HomeData(
        itemURL='https://giphy.com/gifs/vaporwave-aesthetic-aesthetics-ADSFDg7OI0TDhd9ucJ',
        imageURL='https://media2.giphy.com/media/UT4Qm6EXiCwpGJPKLZ/giphy.gif?cid=0a74af3bkhv1tj59h7ffcsalhleeg9rxvllwn3ll4ts4fxfa&rid=giphy.gif&ct=g',
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
