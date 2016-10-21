import React from 'react';
import SingleUser from './SingleUser';
import { countBy } from 'lodash';

export const UserList = ({userListArray, user, createdAt, content}) => {
  return (
    <div className="user-list-container">
      <ul>
        <li>
          {/* {userListArray.map(m => <SingleMessage {...m} key={m.key}/>)} */}
        </li>
      </ul>
    </div>
  )
}
