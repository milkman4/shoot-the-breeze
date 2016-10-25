import React from 'react';

import { shallow, mount, render } from 'enzyme';
import { assert, expect } from 'chai';
let sinon = require('sinon');
import moment from 'moment';
import locus from 'locus';

import Application from '../lib/components/Application';
import UserInput from '../lib/components/UserInput';
import Messages from '../lib/components/Messages';

describe('Messages', () => {

  it ('should render a container for the messages', () => {
    const wrapper = shallow(<Messages />)
    expect(wrapper.find('.messages-container')).to.have.length(1);
  });

  it ('should render a user list', () => {
    const wrapper = mount(<Messages />)
    setTimeout(() => {
      expect(wrapper.find('.user-list-container')).to.have.length(1);
    }, 1000);
  });

  it('calls componentDidMount', () => {
    sinon.spy(Messages.prototype, 'componentDidMount');
        const wrapper = mount(<Messages />);
        expect(Messages.prototype.componentDidMount.calledOnce).to.equal(true);
  });

  it('should filter messages based on the user input in the search field', () => {
    const wrapper = mount(<Messages />);
    const input = wrapper.find('.message-input-field');
    const searchField = wrapper.find('.message-filter');

    wrapper.setState({messages: [{
      user: {
        displayName: 'Andrew',
        email: 'andrew.l.crist@gmail.com',
        uid: 1234
      },
      content: 'Matt is cool'}
      ,
      {user: {
        displayName: 'Lacey',
        email: 'Lacey.r.knaff@gmail.com',
        uid: 9876
        },
      content: 'Fabulous dog muffins is the Matt'
      }
    ]
    }
  )
    searchField.simulate('change', {target: {value: 'cool'}})
    expect(wrapper.state('filterString')).to.equal('cool');
    expect(wrapper.state('filteredMessages').length).to.equal(1);
  });

  it('should change sort direction on click on sort buttons', () => {
    const wrapper = mount(<Messages />);
    const upArrow = wrapper.find('.sort-up');
    const downArrow = wrapper.find('.sort-down');

    wrapper.setState({messages: [{
      user: {
        displayName: 'Matt',
        email: 'andrew.l.crist@gmail.com',
        uid: 1234
      },
      content: 'Matt is the best'}
      ,
      {user: {
        displayName: 'Andrew',
        email: 'Lacey.r.knaff@gmail.com',
        uid: 9876
        },
      content: 'Fabulous dog muffins is the Andrew'
      }
    ]
    }
  )
      upArrow.simulate('click');
      expect(wrapper.state('reverseMessages')).to.equal(true)

      downArrow.simulate('click');
      expect(wrapper.state('reverseMessages')).to.equal(false)

  });

  it('should filter messages based on the user who originally created the message', () => {
    const wrapper = render(<Messages messages={messages}/>);
    wrapper.setState({messages: [{
      user: {
        displayName: 'Matt',
        email: 'andrew.l.crist@gmail.com',
        uid: 1234
      },
      content: 'Matt is the best'}
      ,
      {user: {
        displayName: 'Andrew',
        email: 'Lacey.r.knaff@gmail.com',
        uid: 9876
        },
      content: 'Fabulous dog muffins is the Andrew'
      }
    ]
    }
  )

  eval(locus)
  console.log(wrapper.find('.user-list-container'))
  console.log(wrapper.filteredMessages)

  });
});
