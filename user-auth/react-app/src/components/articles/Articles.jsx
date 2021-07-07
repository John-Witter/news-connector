import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { loadArticles } from "../../store/articles";
import './articles.css'

const Articles = () => {


    return (
        <ul>
            {/* {articles && Object.values(articles).map(article => {
                return (
                    <li key={article.url}>
                        <h2>{article.title}</h2>
                        <img src={article.urlToImage} alt="" />
                        <p>{article.description}</p>
                    </li>
                )
            })} */}
        </ul>
    )
}

export default Articles
