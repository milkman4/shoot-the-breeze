import React from 'react'

export const SingleUser = ({displayName, email, handleClick}) => {
  return (
    <li className='single-user' onClick={()=>handleClick(displayName)}>
      <span className="user-name">
        {displayName}&nbsp;
      </span>
      <span className="user-email">
        ({email})
      </span>
    </li>
  )
}
