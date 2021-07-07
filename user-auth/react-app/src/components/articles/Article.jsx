import React from 'react'

const Article = ({ article }) => {
    return (
        <div>
            <h2>{article.title}</h2>
            <img src={article.urlToImage} alt={article.title} />
            <p>{article.description}</p>
        </div>
    )
}

export default Article
