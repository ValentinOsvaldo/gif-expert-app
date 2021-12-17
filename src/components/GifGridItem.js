import React from "react";
import PropTypes from 'prop-types'


const GifGridItem = ({ id, title, url }) => {
  return (
    <figure className="card animate__animated animate__fadeIn">
      <img src={url} alt={title} />
      <figcaption className="card-name">
        <p>{title}</p>
      </figcaption>
    </figure>
  );
};

GifGridItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}

export default GifGridItem;