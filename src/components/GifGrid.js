import React from "react";
import useFetchGifs from "../hooks/useFetchGifs";
import GifGridItem from "./GifGridItem";

const GifGrid = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category);

  return (
    <>
      <h3 className="animate__animated animate__fadeIn">Category: {category}</h3>

      {loading && <h2 className="animate__animated animate__fadeIn">Loading...</h2>}

      <article className="container">
        {images.map((image) => (
          <GifGridItem key={image.id} {...image} />
        ))}
      </article>
    </>
  );
};

export default GifGrid;
