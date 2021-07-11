import React from 'react'
import AddToSaved from '../saved/AddToSaved'
import './gifs.css'
import '../content.css'

const Gif = ({ gif }) => {
    gif['imageURL'] = gif.images.original.url

    return (
        <div className='gif content-container'>
            <h2><a href={gif.url}>{gif.title}</a></h2>
            <a href={gif.url}>
                <img src={gif.images.original.url} alt={gif.title} />
            </a>
            <AddToSaved item={gif}/>
        </div>
    )
}

export default Gif
