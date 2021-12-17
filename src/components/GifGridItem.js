import React from "react";

const GifGridItem = ({ id, title, url }) => {
<<<<<<< HEAD
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
=======
  return (
    <figure className="card animate__animated animate__fadeIn">
      <img src={url} alt={title} />
      <figcaption className="card-name">
        <p>{title}</p>
      </figcaption>
    </figure>
  );
};
>>>>>>> c04cb987e99ecbf7c85add35aa47555362b6222b

export default GifGridItem;
