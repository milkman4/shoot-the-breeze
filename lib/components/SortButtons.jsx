import React from 'react';

export const SortButtons = ({sort}) => {
  return (
    <span className="sort-buttons">
      <button className="sort-up" onClick={() => sort('up')}>Sort ⬆</button>
      <button className="sort-down" onClick={() => sort('down')}>Sort ⬇</button>
    </span>
  )
}
