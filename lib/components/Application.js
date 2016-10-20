import React, { Component } from 'react'
import firebase, { messsagesFromDatabase, signIn } from '../firebase';
import { pick, map, extend } from 'lodash';
import UserInput from './UserInput.js';
import Messages from './Messages.js'

// Very few things in this component are a good idea.
// Feel free to blow it all away.

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
    messsagesFromDatabase.push({
      user: pick(user, 'displayName', 'email', 'uid'),
      content: draftMessage,
      createdAt: Date.now()
    });
  }

  render() {
    const { user, messages } = this.state;
    return (
      <div className="Application">
        {user ? <p>Hello {user.displayName}</p> : <button onClick={() => signIn()}>Sign In</button> }
        <Messages />
        <UserInput addNewMessage={ this.addNewMessage.bind(this) }/>
      </div>
    )
  }
}
