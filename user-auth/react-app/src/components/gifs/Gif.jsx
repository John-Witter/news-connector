import React from 'react'
import AddToSaved from '../saved/AddToSaved'
import './gifs.css'
import '../content.css'

const Gif = ({ gif }) => {
    gif['itemURL'] = gif.url
    gif['imageURL'] = gif.images.original.url
    gif['source'] = 'Giphy'

    return (
        <div className='gif content-container'>
            <h2>
                <a href={gif.url} className='gifTitle'>{gif.title}</a>
                <a href={gif.url} className='gifSource'>Giphy</a>
            </h2>
            <a href={gif.url} className='contentImage'>
                <img src={gif.images.original.url} alt={gif.title} className='contentImage' />
            </a>
            <AddToSaved item={gif}/>
        </div>
    )
}

export default Gif
