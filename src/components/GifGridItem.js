import React from 'react'

const GifGridItem = ({ id, title, url }) => {
    return (
        <figure className="card">
            <img src={ url } alt={ title } />
            <figcaption>
                { title }
            </figcaption>
        </figure>
    )
}

export default GifGridItem

