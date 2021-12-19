import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import Footer from "./components/Footer";
import GifGrid from "./components/GifGrid";

const GifExpertApp = ({ defaultCategories = [] }) => {
  const [categories, setCategories] = useState(defaultCategories);

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
