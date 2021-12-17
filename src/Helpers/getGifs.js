const getGifs = async ( category ) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
      category
    )}&limit=10&api_key=Yla3TUzFNRLW0394Wa5N6iOntCjZRvvL`,
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

  return gifs;
};

export default getGifs;
