import React from 'react';
import {SingleUser} from './SingleUser.jsx';
import {countBy} from 'lodash';
import {map, toArray} from 'lodash';

export const UserList = ({userList, filterByUser}) => {
  let displayUsers = userList.map(user => <SingleUser {...user} key={user.uid} handleClick={filterByUser}/>)
  return (
    <div className="user-list-container">
      <h2 onClick={() => filterByUser(userList)}> Users </h2>
      <ul>
          {displayUsers}
      </ul>
    </div>
  )
}
