import React from 'react';

import { shallow, mount, render } from 'enzyme';
import { assert, expect } from 'chai';
import moment from 'moment';
import locus from 'locus';

import Application from '../lib/components/Application';
import UserInput from '../lib/components/UserInput';
import Messages from '../lib/components/Messages';

describe('Application', () => {

  it('renders as a <div>', () => {
    const wrapper = shallow(<Application />);
    assert.equal(wrapper.type(), 'div');
  });

  it('renders a message on the page on click of submit button', () => {
    const wrapper = mount(<Application />);
    const input = wrapper.find('.message-input-field');

    input.simulate('change', {target: {value: 'hi'} });
    wrapper.find('.submit-button').simulate('click');
    setTimeout(() => {
      expect(wrapper.text()).to.equal('hi');
    }, 1000);
  });

  it('posts a message with the correct date and time', () => {
    const wrapper = mount(<Application />);
    const input = wrapper.find('.message-input-field');
    const submitButton = wrapper.find('.submit-button');
    const rightNow = moment().format('MMMM D, h:mm a');

    input.simulate('change', {target: {value: 'hi'} });
    submitButton.simulate('click');

    setTimeout(() => {
      expect(wrapper.text()).to.equal(rightNow);
    }, 500);
  });

  it('posts a message with the correct user name', () => {
    const wrapper = mount(<Application />);
    const input = wrapper.find('.message-input-field');
    const submitButton = wrapper.find('.submit-button');
    const userName = wrapper.user;

    input.simulate('change', {target: {value: 'hi'} });
    submitButton.simulate('click');

    setTimeout(() => {
      expect(wrapper.text()).to.equal(userName);
    }, 500);
  });

});

describe('UserInput', () => {

  it('renders as a <form>', () => {
    const wrapper = shallow(<UserInput />)
    assert.equal(wrapper.type(), 'form');
  });

  it('renders as a submit button', () => {
    const wrapper = shallow(<UserInput />)
    expect(wrapper.find('.submit-button')).to.have.length(1);
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

});

describe('Messages', () => {
  it('should filter messages based on the user input in the search field', () => {
    const wrapper = mount(<Messages />);
    const input = wrapper.find('.message-input-field');
    const searchField = wrapper.find('.message-filter');

    wrapper.state({messages: ['one', 'two']})
    searchField.simulate('change', {target: {value: 'one'}})
    setTimeout(() => {
      expect(wrapper.state('filteredMessages')).to.equal('one');
    }, 1000);
  })

  it('should filter messages based on the user who originally created the message', () => {
    const wrapper = mount(<Messages />);
    var userList;
    setTimeout(() => {
      userList = wrapper.find('.user-name').text('Matthew Kaufman');
    }, 1000);

    eval(locus);
    console.log(userList);
  });
});
