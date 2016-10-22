import React from 'react';
import {SingleUser} from './SingleUser.jsx';
import {countBy} from 'lodash';
import {map, toArray} from 'lodash';


export const UserList = (userList) => {
  let userListArray = userList.userList
  console.log(userListArray)

  let displayUsers = userListArray.map(user => <SingleUser {...user} key={user.uid}/>)
  
  return (
    <div className="user-list-container">
      <ul>
          {displayUsers}
      </ul>
    </div>
  )
}
