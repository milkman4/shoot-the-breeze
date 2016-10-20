import React, { Component } from 'react'
import firebase, { messsagesFromDatabase, signIn } from '../firebase';
import { pick, map, extend } from 'lodash';
import {SingleMessage} from './SingleMessage.jsx'


export default class Messages extends Component {
  constructor() {
    super();
    this.state = {
      messages: [],
      messagesCount: ''
    }
  }

  componentDidMount() {
    messsagesFromDatabase.limitToLast(100).on('value', (snapshot) => {
      const messages = snapshot.val() || {};
      this.setState({
        messages: map(messages, (val, key) => extend(val, { key }))
      });
    });
  }

  render() {
    return(
      <ul>
        { this.state.messages.map(m => <SingleMessage {...m} key={m.key}/>) }
      </ul>
    )
  }
}
