// import React from 'react';
//
// import { shallow, mount, render } from 'enzyme';
// import { assert, expect } from 'chai';
// let sinon = require('sinon');
// import moment from 'moment';
// import locus from 'locus';
//
// // import Application from '../lib/components/Application';
// // import UserInput from '../lib/components/UserInput';
// import Messages from '../lib/components/Messages';
//
//
// describe('Messages', () => {
//
//   it ('should render a container for the messages', () => {
//     const wrapper = shallow(<Messages />)
//     expect(wrapper.find('.messages-container')).to.have.length(1);
//   });
//
//   it ('should render a user list', () => {
//     const wrapper = mount(<Messages />)
//     setTimeout(() => {
//       expect(wrapper.find('.user-list-container')).to.have.length(1);
//     }, 1000);
//   });
//
//   it('calls componentDidMount', () => {
//     sinon.spy(Messages.prototype, 'componentDidMount');
//         const wrapper = mount(<Messages />);
//         expect(Messages.prototype.componentDidMount.calledOnce).to.equal(true);
//   });
//
//   it('should filter messages based on the user input in the search field', () => {
//     const wrapper = mount(<Messages />);
//     const input = wrapper.find('.message-input-field');
//     const searchField = wrapper.find('.message-filter');
//
//     wrapper.state({messages: ['one', 'two']})
//     searchField.simulate('change', {target: {value: 'one'}})
//     setTimeout(() => {
//       expect(wrapper.state('filteredMessages')).to.equal('one');
//     }, 1000);
//   });
//
//   it.skip('should change sort direction on click on sort buttons', () => {
//     const wrapper = mount(<Messages />);
//     const upArrow = wrapper.find('.sort-up');
//     const downArrow = wrapper.find('.sort-down');
//
//     wrapper.state({messages: [{name: 'Lacey'}, {name:'Matt'}, {name:'Andrew'}]});
//
//     //set state of messages
//     //check if message first and last are correct
//     setTimeout (() => {
//       expect(wrapper.state('messages')).to.equal(3);
//       expect(wrapper.find('messages').first().props().name).to.equal('Lacey');
//       expect(wrapper.find('messages').last().props().name).to.equal('Andrew');
//
//       downArrow.simulate('click');
//
//       expect(wrapper.find('messages').first().props().name).to.equal('Andrew');
//       expect(wrapper.find('messages').last().props().name).to.equal('Lacey');
//   }, 1000);
//
//
//   });
//
//   it.skip('should filter messages based on the user who originally created the message', () => {
//     const wrapper = mount(<Messages messages={messages}/>);
//     var userList;
//     setTimeout(() => {
//       userList = wrapper.find('.user-name').text('Matthew Kaufman');
//     }, 1000);
//
//     eval(locus);
//     console.log(userList);
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
// });
