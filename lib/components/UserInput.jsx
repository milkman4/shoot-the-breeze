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
    let disabled = this.state.draftMessage.length === 0
    return (
    <form className="message-input">
      <input
        maxLength='140'
        type='text'
        className='message-input-field'
        placeholder="Message…"
        value={this.state.draftMessage}
        onChange={(e) => this.setState({ draftMessage: e.target.value })}
      />
      <span className='character-count'>{ 140-this.state.draftMessage.length}</span>
      <span className = 'user-input-btns'>
      <input
        className='submit-button button'
        type='submit'
        onClick={(e) => this.submitMessage(e)}
        value='Submit'
        disabled ={disabled}
      />
      <input
        className='clear-button button'
        type='button'
        onClick={() => this.setState({draftMessage: ''})}
        value='Clear'
        disabled ={disabled}
      />
      </span>
    </form>
    )
  }
}
