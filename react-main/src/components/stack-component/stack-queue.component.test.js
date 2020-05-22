import React from 'react';
import {shallow} from 'enzyme';
import StackApp from './stack-queue.component';

it('stack-queue component test', ()=>{
    let wrapper = shallow(<StackApp />);
    expect(wrapper).toMatchSnapshot();
})