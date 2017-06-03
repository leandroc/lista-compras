import React from 'react';
import PropTypes from 'prop-types';

import './CardLista.css';

import { formatDate } from '../utils/helpers';

const IconDelete = () => {
  return (<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><path d="M56.97 52.728L44.244 40 56.97 27.272 52.73 23.03 40 35.756 27.272 23.03 23.03 27.27 35.756 40 23.03 52.728l4.242 4.243L40 44.244 52.728 56.97"/></svg>)
}

const CardLista = ({lista, handleRemove, abrirLista}) => {
  return (
    <article
      className="CardLista"
      onClick={e => abrirLista(lista, e)}>
        <h2>{lista.nome}</h2>

        <time>{formatDate(lista.dataCriacao)} </time>

        {lista.itens.length > 0
        ? <small>- Itens na lista: {lista.itens.length}</small>
        : <small>- Lista vazia</small>}

        <button
          onClick={e => handleRemove(lista, e)}
          title="Remover"
          type="button"><IconDelete /></button>
    </article>
  )
}

CardLista.propTypes = {
  lista: PropTypes.object.isRequired,
  handleRemove: PropTypes.func.isRequired,
  abrirLista: PropTypes.func.isRequired
}

export default CardLista;
