import React, { Component } from 'react';
import firebase, { messagesFromDatabase, signIn } from '../firebase';
import { pick, map, extend, filter, countBy, keyBy, find} from 'lodash';
import {SingleMessage} from './SingleMessage.jsx';
import {MessageFilter} from './MessageFilter.jsx';
import {UserList} from './UserList.jsx';
import Scroll from 'react-scroll';
import {SortButtons} from './SortButtons.jsx';


export default class Messages extends Component {
  constructor() {
    super();
    this.state = {
      reverseMessages: false,
      messages: [],
      messagesCount: '',
      filteredMessages: [],
      filterString: ''
    };
  }
  filterByUser(user){
    this.setState ({filteredMessages: filter(this.state.messages, (message) => {
        return message.user.displayName.includes(user);
      })
    });
  }
  filterMessages(filterString) {
    this.setState ({filteredMessages: filter(this.state.messages, (message) => {
        return message.content.toLowerCase().includes(filterString.toLowerCase())
      }),
      filterString: filterString});
  }
  componentDidMount() {
    messagesFromDatabase.limitToLast(100).on('value', (snapshot) => {
      const messages = snapshot.val() || {};
        this.setState({
          messages: map(messages, (val, key) => extend(val, { key })),
          reverseMessages: map(messages, (val, key) => extend(val, { key })).reverse()
        });
    });
  }
  componentDidUpdate() {
    var scroll = Scroll.animateScroll;
    scroll.scrollToBottom({
      duration: 0 //happen instantly
    });
  }
  changeSort(direction) {
    direction === 'up' ? this.setState({reverseMessages: true}) : this.setState({reverseMessages: false})
    console.log(this.state.reverseMessages);
  }
  getUserArray() {
    let userList = keyBy(this.state.messages, 'user.displayName');
    let userNameArray = (Object.keys(userList));
    let userArray = [];
    userNameArray.forEach((userName)=>{
      userArray.push(userList[userName].user);
    });
    return userArray;
  }
  render() {
    let userArray = this.getUserArray()

    let userListDisplay;
    if(userArray.length > 0){
      userListDisplay = <UserList userList={userArray} currentUser={this.props.currentUser} filterByUser = {this.filterByUser.bind(this)}/>
    }

    let messageDisplay;
    if(this.state.filteredMessages.length > 0){
      messageDisplay = this.state.filteredMessages.map(m => <SingleMessage {...m} key={m.key}/>)
    } else if (this.state.filterString.length > 0){
      messageDisplay = ''
    } else {
      messageDisplay = this.state.messages.map(m => <SingleMessage {...m} key={m.key}/>)
    }

    if(!this.state.reverseMessages){
      messageDisplay = messageDisplay.reverse()
    }

    return(
      <div>
      <header>
        <h1>Shoot The Breeze</h1>
        <MessageFilter filterFunction={this.filterMessages.bind(this)}/>
        <SortButtons sort={this.changeSort.bind(this)} />
      </header>
      <ul className='messages-container'>
        {messageDisplay}
      </ul>
        {userListDisplay}
      </div>
    )
  }
}
