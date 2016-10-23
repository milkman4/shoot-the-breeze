import React from 'react'

export const SingleUser = ({displayName, email, handleClick, currentUser}) => {
  return (
    <li className='single-user' onClick={()=>handleClick(displayName)}>
      <span className='user-name'>
        {displayName}&nbsp;
      </span>
      <span className='user-email'>
        ({email})
      </span>
      <span className='user-status'>
        {currentUser === displayName ? '😎' : ''}
      </span>
    </li>
  )
}
