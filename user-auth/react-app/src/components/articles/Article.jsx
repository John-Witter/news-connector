import React from 'react'
import AddToSaved from '../saved/AddToSaved'
import './articles.css'
import '../content.css'


const Article = ({ article }) => {

    article['itemURL'] = article['url']
    article['imageURL'] = article['urlToImage']
    article['contentSource'] = article.source.name
    
    return (
        <div className='article content-container'>
            <h2>
                <a href={article.url} className='articleTitle'>{article.title}</a>
                <a href={article.url} className='articleSource'>{article.contentSource}  {article.publishedAt.split('T')[0]}</a>
            </h2>                        
            <a href={article.url} className='contentImage'>
                <img src={article.urlToImage} alt={article.title} className='contentImage' />
            </a>
            <div className='description'>
                {article.description}
            </div>
            <AddToSaved item={article}/>
        </div>
    )
}

export default Article
