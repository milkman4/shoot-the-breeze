import React from 'react'

export const SingleMessage = ({user, createdAtDesktop, createdAtMobile, content, currentUser, id, deleteMessage}) => {
  let deleteButton;
  let commitTest;
  if(user.displayName === currentUser){
    deleteButton = <span className='delete-message' onClick={()=>deleteMessage(id)}>Delete</span>
  }
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
      {deleteButton}
      <p className="content">
        {content}
      </p>
    </li>
  )
}
