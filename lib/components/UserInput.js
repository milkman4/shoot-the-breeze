import React, { Component } from 'react'
import firebase, { messsagesFromDatabase, signIn } from '../firebase';
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
        maxLength='140'
        className='message-input-field'
        placeholder="Message…"
        value={this.state.draftMessage}
        onChange={(e) => this.setState({ draftMessage: e.target.value })}
        />
      <input className='submit-button' type='submit' onClick={(e) => this.submitMessage(e)} value='Add New Message' disabled ={this.state.draftMessage.length === 0}/>
      <span className='character-count'>{ 140-this.state.draftMessage.length}</span>
    </form>
    )
  }
}
