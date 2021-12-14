import React, { useState, useEffect } from "react";
import GifGridItem from "./GifGridItem";

const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getGifs();
  }, []);

  const getGifs = async () => {
    const url = `https://api.giphy.com/v1/gifs/search?q=Halo&limit=10&api_key=Yla3TUzFNRLW0394Wa5N6iOntCjZRvvL`,
      res = await fetch(url),
      { data } = await res.json();

    const gifs = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url,
      };
    });

    if (!res.ok) throw new Error("Error");

    setImages(gifs);
  };

  return (
    <>
      <h3>{category}</h3>

      {
        images.map( ( image ) => (
          <GifGridItem 
            key={ image.id } 
            { ...image }
          />
        ) )
      }
      
    </>
  );
};

export default GifGrid;
