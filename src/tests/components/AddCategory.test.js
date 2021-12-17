import { shallow } from 'enzyme';
import AddCategory from '../../components/AddCategory';

describe( 'Pruebas en <AddCategory/>', () => {

    const setCategories = () => {}
    const wrapper = shallow(<AddCategory setCategories={ setCategories } />);

    test( 'debe de mostrarse correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
    } );

    test( 'Debe de cambiar la caja de texto', () => {
        const input = wrapper.find('input');

        input.simulate('change');
    } );

} );