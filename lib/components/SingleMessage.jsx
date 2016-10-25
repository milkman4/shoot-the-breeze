import React from 'react'

export const SingleMessage = ({user, createdAtDesktop, createdAtMobile, content}) => {
  return (
    <li>
      <span className="time-stamp time-desktop">
        {createdAtDesktop}
      </span>
      <span className="time-stamp time-mobile">
        {createdAtMobile}
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
