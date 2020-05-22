import React from 'react';
import {shallow} from 'enzyme';
import { postData } from './community';
import Community from './community';

describe('postData async function test', ()=>{
    it('should call postData to get data', async ()=>{
        expect.assertions(1)
        const data = await postData('http://localhost:5000/all');
        expect(typeof(data)).toEqual("object");
    });
});

describe('Community Component test', ()=> {
    let wrapper;
    let initialState = {
        cityArr: [],
        newCityName: '',
        newCityLat: 0,
        newCityLong: 0,
        newPop: 0,
        hideCityPrompt: true,
        hideInfoPrompt: true,
        total: 0,
        MostN: '',
        MostS: '',
        info: 'City Not Found',
        apiData: [],
    }

    beforeEach(()=>{
        wrapper = shallow(<Community />)
    });

    it('should render Community Component', ()=> {
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.state()).toEqual(initialState);
    });

    it('should render correct info onto the info-panel', ()=> {
        expect(wrapper.find("#info-panel").text()).toBe(initialState.info)
    });

    it('should correctly hide or display info-panel', ()=>{
        expect(wrapper.find('.name-prompt').at(0).hasClass('hide')).toBe(true);
        expect(wrapper.find('.name-prompt').at(1).hasClass('hide')).toBe(true);
        wrapper.find("#addCity").simulate('click');
        expect(wrapper.find('.name-prompt').at(0).hasClass('hide')).toBe(false);
        wrapper.find("#create-city").simulate('click');
        expect(wrapper.find('.name-prompt').at(0).hasClass('hide')).toBe(true);
        wrapper.find("#getTotal").simulate('click');
        expect(wrapper.find('.name-prompt').at(1).hasClass('hide')).toBe(false);
    });
});