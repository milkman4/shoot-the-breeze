import React from 'react';

export const InputButton = ({className, handleClick, type, value, disabled}) => {
  return (
      <input className={className} onClick={handleClick} type = {type} value = {value} disabled = {disabled}/>
  )
}
