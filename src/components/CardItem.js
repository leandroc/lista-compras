import React from 'react';
import PropTypes from 'prop-types';

import './CardItem.css';

import { formatPrice, getPrecoTotal } from '../utils/helpers';

const IconDelete = () => {
  return (<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><path d="M56.97 52.728L44.244 40 56.97 27.272 52.73 23.03 40 35.756 27.272 23.03 23.03 27.27 35.756 40 23.03 52.728l4.242 4.243L40 44.244 52.728 56.97"/></svg>)
}

const CardItem = ({item, handleChange, handleRemove}) => {
  return (
    <article className="CardItem">
      <h2><small>{item.quantidade} x</small> {item.nome}</h2>

      <small>Preço total: <strong>{formatPrice( getPrecoTotal(item.preco, item.quantidade) )}</strong></small>

      <div className="form">
        <label htmlFor={`itemPrecoUnitario ${item._id}`}>Preço unitário:</label>
        <input
          id={`itemPrecoUnitario ${item._id}`}
          name={`itemPrecoUnitario ${item._id}`}
          type="number"
          defaultValue={item.preco}
          onChange={e => handleChange(item, e)} />
      </div>

      <button
        onClick={e => handleRemove(item, e)}
        title="Remover"
        type="button"><IconDelete /></button>
    </article>
  )
}

CardItem.propTypes = {
  item: PropTypes.object.isRequired,
  handleRemove: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired
}

export default CardItem;
