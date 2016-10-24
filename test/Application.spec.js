// import React from 'react';
//
// import { shallow, mount, render } from 'enzyme';
// import { assert, expect } from 'chai';
// let sinon = require('sinon');
// import moment from 'moment';
// import locus from 'locus';
//
// import Application from '../lib/components/Application';
// import UserInput from '../lib/components/UserInput';
// import Messages from '../lib/components/Messages';
//
// describe('Application', () => {
//
//   it('renders as a <div>', () => {
//     const wrapper = shallow(<Application />);
//     assert.equal(wrapper.type(), 'div');
//   });
//
//   it('calls componentDidMount', () => {
//     sinon.spy(Application.prototype, 'componentDidMount');
//         const wrapper = mount(<Application />);
//         expect(Application.prototype.componentDidMount.calledOnce).to.equal(true);
//   });
//
//   it('renders a message on the page on click of submit button', () => {
//     const wrapper = mount(<Application />);
//     const input = wrapper.find('.message-input-field');
//
//     input.simulate('change', {target: {value: 'hi'} });
//     wrapper.find('.submit-button').simulate('click');
//     setTimeout(() => {
//       expect(wrapper.text()).to.equal('hi');
//     }, 1000);
//   });
//
//   it('posts a message with the correct date and time', () => {
//     const wrapper = mount(<Application />);
//     const input = wrapper.find('.message-input-field');
//     const submitButton = wrapper.find('.submit-button');
//     const rightNow = moment().format('MMMM D, h:mm a');
//
//     input.simulate('change', {target: {value: 'hi'} });
//     submitButton.simulate('click');
//
//     setTimeout(() => {
//       expect(wrapper.text()).to.equal(rightNow);
//     }, 500);
//   });
//
//   it('posts a message with the correct user name', () => {
//     const wrapper = mount(<Application />);
//     const input = wrapper.find('.message-input-field');
//     const submitButton = wrapper.find('.submit-button');
//     const userName = wrapper.user;
//
//     input.simulate('change', {target: {value: 'hi'} });
//     submitButton.simulate('click');
//
//     setTimeout(() => {
//       expect(wrapper.text()).to.equal(userName);
//     }, 500);
//   });
//
// });
