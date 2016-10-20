import React, { Component } from 'react'
import firebase, { messsagesFromDatabase, signIn } from '../firebase';
import { pick, map, extend } from 'lodash';
import moment from 'moment';
import UserInput from './UserInput.jsx';
import Messages from './Messages.jsx'

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
      createdAt: moment().format('MMMM D, h:mm a')
    });
  }

  render() {
    const { user, messages } = this.state;
    return (
      <div className="Application">
        <Messages />
        {user ? <p>Hello {user.displayName}</p> : <button onClick={() => signIn()}>Sign In</button> }
      <footer>
        <UserInput addNewMessage={ this.addNewMessage.bind(this) }/>
      </footer>
      </div>
    )
  }
}
