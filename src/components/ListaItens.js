import React from 'react';
import PropTypes from 'prop-types';

import './ListaItens.css';

import CardItem from './CardItem';

const ListaItens = ({lista, handleRemove, handleChange}) => {
  return (
    <ul className="ListaItens">
      {lista.itens.map(item => (
        <li key={item._id}>
          <CardItem
            item={item}
            handleChange={handleChange}
            handleRemove={handleRemove} />
        </li>
      ))}
    </ul>
  )
}

ListaItens.propTypes = {
  lista: PropTypes.object.isRequired,
  handleRemove: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired
}

export default ListaItens;
