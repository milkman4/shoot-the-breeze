import React, { Component } from 'react'
import firebase, { messsagesFromDatabase, signIn } from '../firebase';
import { pick, map, extend } from 'lodash';
import {InputButton} from './InputButton.jsx';

export default class UserInput extends Component {
  constructor() {
    super();
    this.state = {
      draftMessage: '',
    };
  }
  submitMessage(e) {
    e.preventDefault();
    this.props.addNewMessage(this.state.draftMessage);
    this.setState ({
      draftMessage: ''
    });
  }
  render() {
    let disabled = this.state.draftMessage.length === 0;
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
        <InputButton className='submit-button button' handleClick = {(e) => this.submitMessage(e)} type='submit'
        value = 'Submit' disabled = {disabled}/>

        <InputButton className='clear-button button' handleClick = {() => this.setState({draftMessage: ''})} type='button'
        value = 'Clear' disabled = {disabled}/>
      </span>
    </form>
    )
  }
}
