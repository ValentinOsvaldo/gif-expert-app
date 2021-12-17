import React from "react";
import { shallow } from "enzyme";
import GifGridItem from "../../components/GifGridItem";

describe("<GifGridItem />", () => {
  const title = "Title",
    url = "https://localhost/algo.jpg";
  const wrapper = shallow(<GifGridItem title={title} url={url} />);

  test("Mostrar correctamente el componente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de tener un parrafo con el title", () => {
    const p = wrapper.find("p");

    expect(p.text().trim()).toBe(title);
  });

  test("Debe tener la imagen igual al url y alt de los props", () => {
    const img = wrapper.find("img");

    expect(img.prop("src")).toBe(url);
    expect(img.prop("alt")).toBe(title);
  });

  test("Debe tener animate__fadeIn", () => {
    const figure = wrapper.find("figure");
    const className = figure.prop("className");

    expect(className.includes("animate__fadeIn")).toBe(true);
  });
});
