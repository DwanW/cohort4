import React from 'react';
import { shallow } from 'enzyme';
import ListApp from './link-list-function.component';

describe('LinkedList component test', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<ListApp />);
    });

    it('should render linked list component correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should render initial listNode correctly', () => {
        let nodes = wrapper.find(".list-node-container").children();
        expect(nodes.length).toBe(3);
        expect(nodes.at(0).text()).toBe('apple 12');
        expect(nodes.at(1).text()).toBe('orange 100');
        expect(nodes.at(2).text()).toBe('banana 75');
    });
});