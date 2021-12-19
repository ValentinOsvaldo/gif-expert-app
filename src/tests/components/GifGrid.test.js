import React from "react";
import { shallow } from "enzyme";
import GifGrid from "../../components/GifGrid";
import useFetchGifs from "../../hooks/useFetchGifs";
jest.mock("../../hooks/useFetchGifs");

describe("<GifGrid />", () => {
  const category = "Halo";

  test("Debe hacer match con el snpashot", () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true,
    });
    const wrapper = shallow(<GifGrid category={category} />);

    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de mostrar items cuando se cargan imagenes useFetchGifs", () => {
    const gifs = [
      {
        id: 1,
        url: "https://locahost:3000/cualquier/cosa.jpg",
        title: "Cualquier cosa",
      },
    ];

    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false,
    });

    const wrapper = shallow(<GifGrid category={category} />);

    expect( wrapper ).toMatchSnapshot();
    expect(wrapper.find("p").exists()).toBe(false);
    expect( wrapper.find('GifGridItem').length ).toBe( gifs.length );
  });
});
