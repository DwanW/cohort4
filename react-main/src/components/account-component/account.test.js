import React from 'react';
import { shallow } from 'enzyme';
import Account from './account';

describe('Account Component test', () => {
    let wrapper;
    const mockName = "house";
    const mockBalance = 350;
    let mockOnDelete;
    let mockOnValueChange;
    const mockIdx = 3;
    const mockKey = "3house";

    beforeEach(()=> {
        mockOnDelete = jest.fn();
        mockOnValueChange = jest.fn();

        const mockProps = {
            key: mockKey,
            idx: mockIdx,
            name: mockName,
            balance:mockBalance,
            onDelete: mockOnDelete,
            onValueChange: mockOnValueChange
        }

        wrapper = shallow(<Account {...mockProps}/>)
    })
    
    it('should render Account Component', ()=> {
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.state().transaction).toBe(0);
    });

    it('should render the correct name and balance', ()=> {
        expect(wrapper.find('.accHeader').text()).toBe(mockName);
        expect(wrapper.find('.acc-result').text()).toBe(`Account ${mockName} total balance: $${mockBalance}`);
    });

    it('should call onDelete and onValueChange when clicked', ()=>{
        wrapper.find('.acc-delete').simulate('click');
        expect(mockOnDelete).toHaveBeenCalled();
        wrapper.find('.deposit').simulate('click');
        expect(mockOnValueChange).toHaveBeenCalled();
    });

    it('should render correct controlled input value', () => {
        wrapper.find('.acc-inputbox').simulate('change', {target: {value: '100'}});
        expect(wrapper.find('.acc-inputbox').props().value).toEqual('100');
    });
});

