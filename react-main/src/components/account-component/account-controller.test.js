import React from 'react';
import { shallow } from 'enzyme';
import AccountController from './account-controller';

describe('AccountController Component test', () => {
    let wrapper;
    let initialState = {
        accArr: [],
        newAccName: '',
        newAccBalance: 0,
        hideAccPrompt: true,
        hideInfoPrompt: true,
        total: 0,
        maxAcc: '',
        minAcc: '',
        info:'Account Not Found'
    }

    beforeEach(()=> {
        wrapper = shallow(<AccountController />)
    })
    
    it('should render AccountController Component', ()=> {
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.state()).toEqual(initialState);
    });

    it('should render the correct info-panel', ()=> {
        expect(wrapper.find('#info-panel').text()).toBe("Account Not Found");
    });

    it('should correctly hide or display info-panel', ()=>{
        expect(wrapper.find('.name-prompt').at(0).hasClass('hide')).toBe(true);
        expect(wrapper.find('.name-prompt').at(1).hasClass('hide')).toBe(true);
        wrapper.find("#addAcc").simulate('click');
        expect(wrapper.find('.name-prompt').at(0).hasClass('hide')).toBe(false);
        wrapper.find("#createAcc").simulate('click');
        expect(wrapper.find('.name-prompt').at(0).hasClass('hide')).toBe(true);
        wrapper.find("#getTotal").simulate('click');
        expect(wrapper.find('.name-prompt').at(1).hasClass('hide')).toBe(false);
    });
});