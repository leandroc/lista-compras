import React from 'react';
import PropTypes from 'prop-types';

import './ListaListas.css';

import CardLista from './CardLista';

const ListaListas = ({listas, handleRemove, abrirLista}) => {
  return (
    <ul className="ListaListas">
      {listas.map( lista => (
        <li key={lista._id}>
          <CardLista
            lista={lista}
            abrirLista={abrirLista}
            handleRemove={handleRemove} />
        </li>
      ) )}
    </ul>
  )
}

ListaListas.propTypes = {
  listas: PropTypes.array.isRequired,
  handleRemove: PropTypes.func.isRequired,
  abrirLista: PropTypes.func.isRequired
}

export default ListaListas;
