import React from 'react'

const Gif = ({ gif }) => {
    return (
        <div>
            <img src={gif.images.original.url} alt={gif.title} />
            <a href={gif.url}>{gif.title}</a>
        </div>
    )
}

export default Gif
