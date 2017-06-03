import React from 'react';

import './Total.css';

import { formatPrice } from '../utils/helpers';

const Total = ({total}) => {
  return (
    <div className="Total">
      <h3>Total:</h3>

      <strong>{formatPrice(total)}</strong>
    </div>
  )
}

export default Total;
