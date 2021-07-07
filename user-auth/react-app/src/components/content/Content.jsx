import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { loadArticles } from "../../store/articles";
import Article from '../articles/Article';
import Gif from '../gifs/Gif';

const Content = () => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.session.user)
    const content = useSelector(state => state.article)
    const articles = content.articles
    const gifs = content.gifs
    let userId

    if (user) {
        userId = user['id']
    }

    useEffect(() => {
        if (!userId) return
        dispatch(loadArticles(userId))
    }, [dispatch, userId])

    console.log('!!!!content Length:', Object.values(content).length)
    console.log('!!!!content:', content)

    return (
        <div>
            {articles && articles.map(article => {
                return <Article article={article} key={article.url} />
            })}

            {gifs && gifs.map(gif => {
                return <Gif gif={gif} key={gif.id}/>
            })}
        </div>
    )
}

export default Content
