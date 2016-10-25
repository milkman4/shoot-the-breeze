import React from 'react';

import { shallow, mount, render } from 'enzyme';
import { assert, expect } from 'chai';
let sinon = require('sinon');
import moment from 'moment';
import locus from 'locus';

import Application from '../lib/components/Application';
import UserInput from '../lib/components/UserInput';
import Messages from '../lib/components/Messages';

describe('UserInput', () => {

  it('renders as a <form>', () => {
    const wrapper = shallow(<UserInput />)
    assert.equal(wrapper.type(), 'form');
  });

  it('renders a submit button', () => {
    const wrapper = shallow(<UserInput />)
    expect(wrapper.find('.submit-button')).to.have.length(1);
  });

  it('renders a clear button', () => {
    const wrapper = shallow(<UserInput />)
    expect(wrapper.find('.clear-button')).to.have.length(1);
  });

  it('simulates a click event on submit button', () => {
    const click = sinon.spy();
    const wrapper = shallow(
      <UserInput onClick={click}/>);
    const submitButton = wrapper.find('.submit-button');
    submitButton.simulate('submit');
    expect(click).to.have.been.called;
  });

  it('simulates a click event on clear button', () => {
    const click = sinon.spy();
    const wrapper = shallow(
      <UserInput onClick={click}/>);
    const submitButton = wrapper.find('.clear-button');
    submitButton.simulate('submit');
    expect(click).to.have.been.called;
  });

  it('clears the input field', () => {
    const wrapper = mount(<UserInput />);
    const input = wrapper.find('.message-input-field');
    const clearButton = wrapper.find('.clear-button')

    input.simulate('change', {target: {value: 'hello'} });
    expect(wrapper.state('draftMessage')).to.equal('hello');

    clearButton.simulate('click');
    expect(wrapper.state('draftMessage')).to.equal('');
  });

  it('should change the state when user input a message', () => {
    const wrapper = mount(<UserInput />);
    const input = wrapper.find('.message-input-field');

    input.simulate('change', {target: {value: 'hello'} });
    expect(wrapper.state('draftMessage')).to.equal('hello');
  });

  it('should be able to count the characters in the input field', () => {
    const wrapper = mount(<UserInput />);
    const input = wrapper.find('.message-input-field');
    const characterCount = wrapper.find('.character-count');

    input.simulate('change', {target: {value: 'a'}});
    expect(characterCount.text()).to.equal('139');
  });

  it('the input field should clear if user clicks clear button', () => {
    const wrapper = mount(<UserInput />);
    const input = wrapper.find('.message-input-field');
    const characterCount = wrapper.find('.character-count');
    const clearButton = wrapper.find('.clear-button');

    input.simulate('change', {target: {value: 'hello'} });
    expect(wrapper.state('draftMessage')).to.equal('hello');

    clearButton.simulate('click');
    expect(wrapper.state('draftMessage')).to.equal('');
    expect(characterCount.text()).to.equal('140');
  });

  it('when user input message is submited a addNewMessage prop is called and passed the message', () => {
    const click = sinon.spy();
    const addNewMessage = sinon.spy()
    const wrapper = shallow(
      <UserInput addNewMessage={addNewMessage} />);
    const submitButton = wrapper.find('.submit-button');
    submitButton.simulate('click', { preventDefault() {}});
    expect(addNewMessage).to.have.property('callCount', 1);
  });
});
