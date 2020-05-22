import React from 'react';
import { shallow } from 'enzyme';
import LIFO from './lifo-stack';

describe('queue component test', () => {
    let wrapper;
    let mockData = [{"title":"police"},{"title":"doctor"}];
    let mockBoolean = true;
    let mockStackTop= -1;
    let mockOnClick;
    let mockIsAdding;

    beforeEach(()=> {
        mockOnClick = jest.fn();
        mockIsAdding = jest.fn();

        const mockProps = {
            stack: mockData,
            isStack: mockBoolean,
            stackTop: mockStackTop,
            onClick:mockOnClick,
            isAdding:mockIsAdding
        }
        wrapper = shallow(<LIFO {...mockProps}/>);
    });

    it('should render queue component correctly', ()=>{
        expect(wrapper).toMatchSnapshot();
    });

    it('should render correct className and onClick function', ()=> {
        expect(wrapper.find(".stack-component").hasClass('activated')).toBe(true);
        wrapper.find(".stack-component").simulate('click');
        expect(mockOnClick).toHaveBeenCalled();
    });

    it('should render correct stack items in the container', ()=>{
        expect(wrapper.find(".stack-container").children().length).toBe(2);
        expect(wrapper.find(".label").children().at(0).text()).toBe('police');
    });
});