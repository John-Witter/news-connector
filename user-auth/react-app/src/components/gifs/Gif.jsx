import React from 'react'
import AddToSaved from '../saved/AddToSaved'
import './gifs.css'
import '../content.css'

const Gif = ({ gif }) => {
    return (
        <div className='gif content-container'>
            <h2><a href={gif.url}>{gif.title}</a></h2>
            <a href={gif.url}>
                <img src={gif.images.original.url} alt={gif.title} />
            </a>
            <AddToSaved />
        </div>
    )
}

export default Gif
