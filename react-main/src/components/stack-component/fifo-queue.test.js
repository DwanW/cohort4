import React from 'react';
import { shallow } from 'enzyme';
import FIFO from './fifo-queue';

describe('queue component test', () => {
    let wrapper;
    let mockData = [{"title":"police"},{"title":"doctor"}];
    let mockBoolean = false;
    let mockQueueBack= -1;
    let mockOnClick;
    let mockIsAdding;

    beforeEach(()=> {
        mockOnClick = jest.fn();
        mockIsAdding = jest.fn();

        const mockProps = {
            queue: mockData,
            isStack: mockBoolean,
            queueBack: mockQueueBack,
            onClick:mockOnClick,
            isAdding:mockIsAdding
        }
        wrapper = shallow(<FIFO {...mockProps}/>);
    });

    it('should render queue component correctly', ()=>{
        expect(wrapper).toMatchSnapshot();
    });

    it('should render correct className and onClick function', ()=> {
        expect(wrapper.find(".queue-component").hasClass('activated')).toBe(true);
        wrapper.find(".queue-component").simulate('click');
        expect(mockOnClick).toHaveBeenCalled();
    });

    it('should render correct queue items in the container', ()=>{
        expect(wrapper.find(".queue-container").children().length).toBe(2);
        expect(wrapper.find(".label").children().at(0).text()).toBe('police');
    });
});