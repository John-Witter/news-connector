import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { loadArticles } from "../../store/articles";
import './articles.css'

const Articles = () => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.session.user)
    const articles = useSelector(state => state.article)
    let userId 
    
    if (user) {
        userId = user['id']
    }
    
    useEffect(() => {
        if (!userId) return
        dispatch(loadArticles(userId))        
    }, [dispatch, userId])
    
    console.log('!!!!ARTICLES:', articles)

    return (
        <ul>
            {articles && Object.values(articles).map(article => {
                return (
                    <li key={article.url}>
                        <h2>{article.title}</h2>
                        <img src={article.urlToImage} alt="" />
                        <p>{article.content}</p>
                    </li>
                )
            })}
        </ul>
    )
}

export default Articles
