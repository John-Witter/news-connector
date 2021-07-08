import React from 'react'
import './gifs.css'

const Gif = ({ gif }) => {
    console.log('!!!!!!GIF:', gif)
    return (
        <div className='content'>
            <img src={gif.images.original.url} alt={gif.title} />
            <a href={gif.url}>{gif.title}</a>
        </div>
    )
}

export default Gif
