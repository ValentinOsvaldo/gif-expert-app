import { shallow } from "enzyme";
import GifExpertApp from "../GifExpertApp";

describe("<GifExpertApp />", () => {
  test("Mostrar correctamente el componente", () => {
    const wrapper = shallow(<GifExpertApp />);
    expect(wrapper).toMatchSnapshot();
  });

  test("debe mostrar una lista de categorias", () => {
    const categories = ["Halo", "Minecraft"];
    const wrapper = shallow(<GifExpertApp defaultCategories={ categories } />);

    expect( wrapper ).toMatchSnapshot();
    expect( wrapper.find('GifGrid').length ).toBe( categories.length );    
  });
});
