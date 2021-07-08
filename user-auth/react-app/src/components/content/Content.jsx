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
            {articles && articles.map((article, idx) => {
                return (
                    <div>
                        <Article article={article} key={article.url} />
                        {idx % 2 === 0 && gifs[idx / 2] && <Gif gif={gifs[idx / 2]} key={gifs[idx / 2]}/>}
                    </div>
                )
            })}

            {/* {gifs && gifs.map(gif => {
            return 
            })} */}
        </div>
    )
}

export default Content
