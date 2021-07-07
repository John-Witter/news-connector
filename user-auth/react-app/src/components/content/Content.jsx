import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { loadArticles } from "../../store/articles";

const Content = () => {
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

    console.log('!!!!ARTICLES Length:', Object.values(articles).length)
    console.log('!!!!ARTICLES:', articles)

    return (
        <div>
            
        </div>
    )
}

export default Content
