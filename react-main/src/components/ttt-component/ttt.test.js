import React from 'react';
import {shallow} from 'enzyme';
import Ttt from './ttt';

it('tic-tac-toe component test', ()=>{
    let wrapper = shallow(<Ttt />);
    expect(wrapper).toMatchSnapshot();
});