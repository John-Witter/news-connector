// this is the 

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { loadArticles } from "../../store/articles";
import Article from '../articles/Article';
import Gif from '../gifs/Gif';
import Default from '../default/Default';
import Splash from '../splash/Splash';

import '../content.css'
import Headline from '../articles/Headline';

const Content = () => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.session.user)
    const content = useSelector(state => state.article)
    const articles = content.articles
    const headlines = content.headlines
    const gifs = content.gifs
    let userId

    if (user) {
        userId = user['id']
    }

    useEffect(() => {
        if (!userId) return
        dispatch(loadArticles(userId))
    }, [dispatch])

    if (!user) {
        // return <Default />
        // instead of returning a garbage splash page, make it nice like
        return <Splash />
    }

    return (
        <div className='parent'>
                {/* render headlines first */}
                {user && headlines && headlines.map((article) => {
                    return (
                        <div className="container" key={`${Math.random()} ${article.url}`}>
                            <Headline article={article} />
                        </div>
                    )
                })}
            {user && articles && articles.map((article, idx) => {
                return (
                    <div className='container' key={`${Math.random()} ${article.url}`}>
                        <Article article={article} />
                        {idx % 2 === 0 && gifs[idx / 2] && <Gif gif={gifs[idx / 2]} key={gifs[idx / 2]} />}
                    </div>
                )
            })}

        </div>
    )
}

export default Content
