import React from 'react'

export const SingleUser = (user) => {
  return (
    <li>
      <span className="user-name">
        {userListArray.user.displayName}
      </span>
      <span className="user-email">
        {userListArray.user.email}
      </span>
      {/* <p className="user-status">
        {content}
      </p> */}
    </li>
  )
}
