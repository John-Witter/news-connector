import React from 'react'
import './articles.css'
import '../content.css'


const Article = ({ article }) => {
    return (
        <div className='content article'>
            <h2>{article.title}</h2>
            <img src={article.urlToImage} alt={article.title} />
            <p>{article.description}</p>
        </div>
    )
}

export default Article
