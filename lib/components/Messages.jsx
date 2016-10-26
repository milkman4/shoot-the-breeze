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
      filterString: '',
      messageView: 100,
      filterUser: ''
    };
  }
  filterByUser(user){
    this.setState({filterUser: user})
  }
  filterMessages(filterString) {
    this.setState ({filterString: filterString});
  }
  componentDidMount() {
    messagesFromDatabase.limitToLast(this.state.messageView).on('value', (snapshot) => {
      const messages = snapshot.val() || {};
      this.setState({
        messages: map(messages, (val, key) => extend(val, { key }))
      });
    });
  }
  componentDidUpdate() {
    var scroll = Scroll.animateScroll;
    scroll.scrollToBottom({
      duration: 0 //happen instantly
    });
  }
  deleteMessage(key) {
    messagesFromDatabase.child(key).remove()
  }
  changeMessageView(e){
    this.setState({ messageView: e.target.value})
    messagesFromDatabase.limitToLast(parseInt(e.target.value)).on('value', (snapshot) => {
      const messages = snapshot.val() || {};
      this.setState({
        messages: map(messages, (val, key) => extend(val, { key }))
      });
    });
  }
  changeSort(direction) {
    direction === 'up' ? this.setState({reverseMessages: true}) : this.setState({reverseMessages: false})
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
    let userArray = this.getUserArray();

    let userListDisplay;
    if(userArray.length > 0){
      userListDisplay = <UserList userList={userArray} currentUser={this.props.currentUser} filterByUser = {this.filterByUser.bind(this)}/>
    }

    let messageArray= this.state.messages;

    if(this.state.filterString.length > 0) {
      messageArray = filter(messageArray, (message) => {
          return message.content.toLowerCase().includes(this.state.filterString.toLowerCase()) && this.state.filterString !== ''
      })
    }
    if(this.state.filterUser.length > 0){
      messageArray = filter(messageArray, (message) => {
          return message.user.displayName.includes(this.state.filterUser) && this.state.filterUser !== '';
      })
    }
    let messageDisplay = messageArray.map(m => <SingleMessage currentUser={this.props.currentUser} {...m} id={m.key} deleteMessage = {this.deleteMessage.bind(this)} key={m.key}/>)

    if(this.state.reverseMessages){
      messageDisplay = messageDisplay.reverse()
    }

    return(
      <div>
      <header>
        <h1>Shoot The Breeze</h1>
        <MessageFilter filterFunction={this.filterMessages.bind(this)}/>
        <SortButtons sort={this.changeSort.bind(this)} />
        <h4 className='disp-text'>Display</h4>
        <input className = 'number-of-msgs' type="number" min='1' value={this.state.messageView} onChange={(e) => this.changeMessageView(e)} />
        <h4 className='disp-text'>Messsages</h4>
      </header>
      <ul className='messages-container'>
        {messageDisplay}
      </ul>
        {userListDisplay}
      </div>
    )
  }
}
