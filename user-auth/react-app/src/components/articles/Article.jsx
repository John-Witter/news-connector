import React from 'react'
import './articles.css'
import '../content.css'


const Article = ({ article }) => {
    return (
        <div className='article'>
            <h2><a href={article.url}>{article.title}</a></h2>
            <img src={article.urlToImage} alt={article.title} />
            <p>{article.description}</p>
        </div>
    )
}

export default Article
