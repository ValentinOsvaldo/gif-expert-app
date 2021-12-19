import React from "react";
import useFetchGifs from "../hooks/useFetchGifs";
import GifGridItem from "./GifGridItem";
import PropTypes from 'prop-types';

const GifGrid = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category);

  return (
    <>
      <h3 className="animate__animated animate__fadeIn">{category}</h3>

      {loading && <h2 className="animate__animated animate__fadeIn">Loading...</h2>}

      <article className="container">
        {images.map((image) => (
          <GifGridItem key={image.id} {...image} />
        ))}
      </article>
    </>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
}

export default GifGrid;
