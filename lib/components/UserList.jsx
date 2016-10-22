import React from 'react';
import {SingleUser} from './SingleUser.jsx';
import {countBy} from 'lodash';
import {map, toArray} from 'lodash';

export const UserList = (userList) => {
  let userListArray = userList.userList
  let displayUsers = userListArray.map(user => <SingleUser {...user} key={user.uid}/>)
  return (
    <div className="user-list-container">
      <h2> <strong>Users</strong> </h2>
      <ul>
          {displayUsers}
      </ul>
    </div>
  )
}
