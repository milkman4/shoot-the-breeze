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

  it('renders a message on the page on click of submit button', () => {
    const wrapper = mount(<Application />);
    const input = wrapper.find('.message-input-field');

    input.simulate('change', {target: {value: 'hi'} });
    wrapper.find('.submit-button').simulate('click');
    setTimeout(() => {
      expect(wrapper.text()).to.equal('hi');
    }, 2000);
  })
});

describe('UserInput', () => {

  it('renders as a <form>', () => {
    const wrapper = shallow(<UserInput />)
    assert.equal(wrapper.type(), 'form')
  });

  it('renders as a submit button', () => {
    const wrapper = shallow(<UserInput />)
    expect(wrapper.find('.submit-button')).to.have.length(1)
  });

  it('should change the state when user input a message', () => {
    const wrapper = mount(<UserInput />);
    const input = wrapper.find('.message-input-field');

    input.simulate('change', {target: {value: 'hello'} });
    expect(wrapper.state('draftMessage')).to.equal('hello');
  });
})
