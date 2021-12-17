import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import Footer from "./components/Footer";
import GifGrid from "./components/GifGrid";

const GifExpertApp = () => {
  const [categories, setCategories] = useState(["hello"]);

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />

      <hr />

      <section>
        {categories.map((category) => (
          <GifGrid 
            key={ category }
            category={ category } 
          />
        ))}
      </section>

      <Footer />
    </>
  );
};

export default GifExpertApp;
