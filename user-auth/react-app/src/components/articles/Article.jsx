import React from 'react'
import '../components.css'

const Article = ({ article }) => {
    return (
        <div className='content'>
            <h2>{article.title}</h2>
            <img src={article.urlToImage} alt={article.title} />
            <p>{article.description}</p>
        </div>
    )
}

export default Article
