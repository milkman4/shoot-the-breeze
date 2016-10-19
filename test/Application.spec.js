import React from 'react';

import { shallow, mount, render } from 'enzyme';
import { assert, expect } from 'chai';

import Application from '../lib/components/Application';
import UserInput from '../lib/components/UserInput';

describe('Application', () => {

  it('renders as a <div>', () => {
    const wrapper = shallow(<Application />)
    assert.equal(wrapper.type(), 'div');
  });
});

describe('UserInput', () => {

  it('renders as a <form>', () => {
    const wrapper = shallow(<UserInput />)
    assert.equal(wrapper.type(), 'form')
  });

  it('should change the state when user input a message', () => {
    const wrapper = mount(<UserInput />);
    const input = wrapper.find('.MessageInputField');

    input.simulate('change', {target: {value: 'hello'} });
    expect(wrapper.state('draftMessage')).to.equal('hello');
  });

})
