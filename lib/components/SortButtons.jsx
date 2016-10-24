import React from 'react';

export const SortButtons = ({sort}) => {
  return (
    <span className="sort-buttons">
      <button className="sort-up button" onClick={() => sort('up')}>Sort ⬆</button>
      <button className="sort-down button" onClick={() => sort('down')}>Sort ⬇</button>
    </span>
  )
}
