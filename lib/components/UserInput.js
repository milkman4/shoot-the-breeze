import React, { Component } from 'react'
import firebase, { reference, signIn } from '../firebase';
import { pick, map, extend } from 'lodash';

export default class UserInput extends Component {
  constructor() {
    super();
    this.state = {
      draftMessage: '',
    }
  }
  submitMessage(e) {
    e.preventDefault();
    this.props.addNewMessage(this.state.draftMessage)
    this.setState ({
      draftMessage: ''
    })
  }
  render() {
    return (
    <form className="message-input">
      <input
        className='message-input-field'
        placeholder="Message…"
        value={this.state.draftMessage}
        onChange={(e) => this.setState({ draftMessage: e.target.value })}
        />
      <input className='submit-button' type='submit' onClick={(e) => this.submitMessage(e)} value='Add New Message' />
    </form>
    )
  }
}
