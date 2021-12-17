import React from "react";
import useFetchGifs from "../hooks/useFetchGifs";
import GifGridItem from "./GifGridItem";

const GifGrid = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category);

  return (
    <>
<<<<<<< HEAD
      <h2>{category}</h2>

      <div className="container">
        {images.map((image) => (
          <GifGridItem key={image.id} {...image} />
        ))}
      </div>
=======
      <h3 className="animate__animated animate__fadeIn">{category}</h3>

      {loading && <h2 className="animate__animated animate__fadeIn">Loading...</h2>}

      <article className="container">
        {images.map((image) => (
          <GifGridItem key={image.id} {...image} />
        ))}
      </article>
>>>>>>> c04cb987e99ecbf7c85add35aa47555362b6222b
    </>
  );
};

export default GifGrid;
