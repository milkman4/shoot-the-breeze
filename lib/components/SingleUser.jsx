import React from 'react'
import {split} from 'lodash'

export const SingleUser = ({displayName, email, handleClick, currentUser}) => {
  let firstName = split(displayName, ' ')
  return (
    <li className='single-user' onClick={()=>handleClick(displayName)}>
      <span className='user-name'>
        {firstName[0]}&nbsp;
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
