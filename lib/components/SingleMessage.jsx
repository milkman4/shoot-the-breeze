import React from 'react'

export const SingleMessage = ({user, createdAt, content}) => {
  return (
    <li>
      <span className="time-stamp">
        {createdAt}
      </span>
      <span className="display-name">
        {user.displayName}
      </span>
      <p className="content">
        {content}
      </p>
    </li>
  )
}
