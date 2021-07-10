import React from 'react'
import Saved from '../saved/AddToSaved'
import './articles.css'
import '../content.css'


const Article = ({ article }) => {
    return (
        <div className='article content-container'>
            <h2><a href={article.url}>{article.title}</a></h2>
            <a href={article.url}>
                <img src={article.urlToImage} alt={article.title} />
            </a>
            <div className='description'>
                {article.description}
            </div>
            <Saved />
        </div>
    )
}

export default Article
