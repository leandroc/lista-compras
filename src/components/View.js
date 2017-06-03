import React from 'react';

import './View.css';

const View = ({children}) => {
  return (
    <div className="View">
      {children}
    </div>
  )
}

export default View;
