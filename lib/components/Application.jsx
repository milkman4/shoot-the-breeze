import React, { Component } from 'react'
import firebase, { messagesFromDatabase, signIn, signOut } from '../firebase';
import {split, pick, map, extend } from 'lodash';
import moment from 'moment';
import UserInput from './UserInput.jsx';
import Messages from './Messages.jsx'


export default class Application extends Component {
  constructor() {
    super();
    this.state = {
      user: null
    }
  }
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => this.setState({ user }));
  }
  addNewMessage(draftMessage) {
    const { user } = this.state;
    messagesFromDatabase.push({
      user: pick(user, 'displayName', 'email', 'uid'),
      content: draftMessage,
      createdAt: moment().format('MMMM D, h:mm a'),
      createdAtDesktop: moment().format('MMMM D, h:mm a'),
      createdAtMobile: moment().format('MM/D, h:mm a')
    });
  }

  render() {
    const { user, messages } = this.state;
    let currentUser;
    let firstName;
    if (this.state.user !== null) {
      currentUser = this.state.user.displayName
      firstName = split(this.state.user.displayName, ' ')
    }

    return (
      <div className="Application">
        <Messages currentUser={currentUser}/>
      <footer>
        <div className='active-user'>{user ?
          <p>Logged in as <span className="bold">{firstName[0]}</span> ({user.email})  <button className='auth-button button' onClick={()=> signOut()}>Sign Out</button>
          </p>
        : <button className='auth-button' onClick={() => signIn()}>Sign In</button> }
        </div>
        { user ?
        <UserInput addNewMessage={ this.addNewMessage.bind(this) }/> :
        ''
        }
      </footer>
      </div>
    )
  }
}
