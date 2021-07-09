import React from 'react'
import './gifs.css'
import '../content.css'

const Gif = ({ gif }) => {
    console.log('!!!!!!GIF:', gif)
    return (
        <div className='gif'>
            <h2><a href={gif.url}>{gif.title}</a></h2>
            <img src={gif.images.original.url} alt={gif.title} />
        </div>
    )
}

export default Gif
