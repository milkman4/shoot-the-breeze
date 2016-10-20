import React from 'react'

export const MessageFilter = ({filterFunction}) => {
  return (
    <input
      className='message-filter'
      type='text'
      onChange={(e) => {
        filterFunction(e.target.value)}
      }
      placeholder = 'Filter'
    />
  )
}
