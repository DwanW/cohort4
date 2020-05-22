import React from 'react';
import { shallow } from 'enzyme';
import { whichSphere, howBig } from './city';
import City from './city';

describe('test utility functions', () => {
    it('should display correct result for whichSphere function', () => {
        expect(whichSphere(100)).toBe('North Hemisphere');
        expect(whichSphere(-100)).toBe('South Hemisphere');
        expect(whichSphere(0)).toBe('Equator');
        expect(whichSphere(-300)).toBe('Latitude Input is invalid');
    });

    it('should display correct result for howBig function', () => {
        expect(howBig(111111)).toBe("City");
        expect(howBig(25000)).toBe("Large Town");
        expect(howBig(3000)).toBe("Town");
        expect(howBig(500)).toBe("Village");
        expect(howBig(20)).toBe("Hamlet");
        expect(howBig(-30)).toBe("Incorrect population input");
    });
});

describe('City Component testing', () => {
    let wrapper;
    const mockCityName = "Edmonton";
    const mockCityLat = 140;
    const mockCityLong = 40;
    const mockPopulation = 10000;
    let mockOnDelete;
    let mockOnValueChange;
    const mockIdx = 3;
    const mockKey = "56427";

    beforeEach(() => {
        mockOnDelete = jest.fn();
        mockOnValueChange = jest.fn();

        const mockProps = {
            key: mockKey,
            idx: mockIdx,
            cityName: mockCityName,
            cityLat: mockCityLat,
            cityLong: mockCityLong,
            population: mockPopulation,
            onDelete: mockOnDelete,
            onValueChange: mockOnValueChange
        };

        wrapper = shallow(<City {...mockProps} />);
    });

    it('should render city component correctly', () => {
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.state()).toEqual({ "relocate": 0 })
    });

    it('should render correct string given the props', () => {
        let resultSection = wrapper.find(".result").children();
        expect(resultSection.length).toBe(4);
        expect(resultSection.at(0).text()).toBe(`Latitude: ${mockCityLat}`);
        expect(resultSection.at(1).text()).toBe(`Longitude: ${mockCityLong}`);
        expect(resultSection.at(2).text()).toBe(`Population: ${mockPopulation}`);
        expect(resultSection.at(3).text()).toBe(`It is ${howBig(mockPopulation)} sized and is located at ${whichSphere(mockCityLat)}.`);
    })

    it('should fire correct action', ()=> {
        wrapper.find('.delete').simulate('click');
        expect(mockOnDelete).toHaveBeenCalled();
        wrapper.find('.movein').simulate('click');
        wrapper.find('.moveout').simulate('click');
        expect(mockOnValueChange).toHaveBeenCalledTimes(2);
    })

})