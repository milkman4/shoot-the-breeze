import React from 'react'

export const SingleUser = ({displayName, email}) => {
  console.log(displayName)
  return (
    <li className='single-user'>
      <span className="user-name">
        {displayName} 
      </span>
      <span className="user-email">
        ({email})
      </span>
    </li>
  )
}
